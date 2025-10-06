import React, { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { MessageCircle, Send, X } from 'lucide-react';
import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

const token = import.meta.env.VITE_GITHUB_TOKEN;
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Welcome to JD Tutoring! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const websiteContent = `JD Tutoring is an educational private institution aiming to improve students' understanding in various subjects at primary, high school, college, and university levels, primarily focusing on UNISA students. Services include tutoring in subjects like Mathematics, Sciences, Commerce, and Languages. They offer home tutoring and extra classes, with a mission to help learners reach their full potential through personalized support.

🔥 50% OFF Final Revision Examination Workshop - Limited Time!

Online Class: R600 per subject
Face-to-face Class: R750 per subject

Contact us at:
Phone/WhatsApp: 076 380 3862
Email: info@jdtutoring.co.za
`;

  const systemPrompt = `You are an intelligent assistant for JD Tutoring\'s website. Answer user questions strictly based on the website content provided below.

Rules:
1. Do not make up answers.
2. If the information is not available, respond: "I’m sorry, I couldn’t find that information on our website. Would you like to contact support?"
3. Be concise, friendly, and helpful.

Website Content: ${websiteContent}`;

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const client = ModelClient(
        endpoint,
        new AzureKeyCredential(token),
      );

      const response = await client.path("/chat/completions").post({
        body: {
          messages: [
            { role: "system", content: systemPrompt },
            ...messages,
            userMessage,
          ],
          temperature: 1.0,
          top_p: 1.0,
          model: model
        }
      });

      if (isUnexpected(response)) {
        throw response.body.error;
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: response.body.choices[0].message.content || 'Sorry, I couldn\'t generate a response.',
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error: any) {
      console.error('Error calling Azure AI:', error);
      let errorContent = 'Sorry, there was an error processing your request.';
      if (error?.status === 429) {
        errorContent = 'Sorry, the AI service is currently unavailable due to rate limits. Please try again later or contact support.';
      } else if (error?.message?.includes('quota')) {
        errorContent = 'Sorry, the AI service quota has been exceeded. Please check your Azure account billing details.';
      }
      const errorMessage: Message = {
        role: 'assistant',
        content: errorContent,
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Icon */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 shadow-lg"
        >
          <MessageCircle className="w-8 h-8 text-white" />
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 w-96 h-[500px] max-w-full max-h-full bg-white rounded-lg shadow-xl flex flex-col">
          {/* Header */}
          <CardHeader className="bg-green-500 text-white p-4 flex flex-row justify-between items-center rounded-t-lg">
            <CardTitle className="font-bold text-lg">JD Tutoring help bot</CardTitle>
            <Button size="icon" variant="ghost" onClick={() => setIsOpen(false)}>
              <X className="w-6 h-6" />
            </Button>
          </CardHeader>

          {/* Messages Area */}
          <div
            ref={chatContainerRef}
            className="flex-1 p-4 overflow-y-auto"
            style={{
              backgroundColor: '#ECE5DD',
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
              >
                <div
                  className={`p-3 rounded-lg max-w-xs shadow ${ 
                    msg.role === 'user'
                      ? 'bg-green-100 text-gray-800'
                      : 'bg-white text-gray-800'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="p-3 rounded-lg max-w-xs shadow bg-white text-gray-800">
                  Typing...
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-gray-100 flex items-center rounded-b-lg">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 rounded-full bg-white px-4 py-2 border-gray-300 focus:ring-green-500 focus:border-green-500"
            />
            <Button onClick={handleSend} disabled={isLoading} className="ml-3 rounded-full w-12 h-12 bg-green-500 hover:bg-green-600">
              <Send className="w-6 h-6 text-white" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;