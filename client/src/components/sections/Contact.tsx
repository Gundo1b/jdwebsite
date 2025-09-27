import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "emailjs-com";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

const contactFormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  subject: z.string().min(1, { message: "Please select a subject" }),
  classType: z.string().min(1, { message: "Please select a class type" }),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      classType: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    const { firstName, lastName, email, phone, subject, classType, message } = data;

    // EmailJS template data
    const emailData = {
      firstName,
      lastName,
      email,
      phone,
      subject,
      classType,
      message: message || "N/A",
    };

    try {
      // Send email using EmailJS
      await emailjs.send(
        "service_7ag1xaq", // Replace with your EmailJS service ID
        "template_24z8ulq", // Replace with your EmailJS template ID
        emailData,
        "Xvf-gSyaxD4Drv3g_" // Replace with your EmailJS user ID
      );

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    
    
   
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            Have questions or ready to get started? We're here to help.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Enquiry Form</h3>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input type="tel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="mathematics">English</SelectItem>
                        <SelectItem value="mathematics">Afrikaans</SelectItem>
                        <SelectItem value="physics">Sciences </SelectItem>
                        <SelectItem value="both">Mathematics</SelectItem>
                        <SelectItem value="mathematics">Commerce </SelectItem>
                        <SelectItem value="mathematics">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="classType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Class Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select class type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="online">Online Class</SelectItem>
                        <SelectItem value="in-person">In-Person Class</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                  
                )}
              />

<FormField
                control={form.control}
                name="classType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Grade</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select class type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="online">Grade 1 - 6 </SelectItem>
                        <SelectItem value="online">Grade 7 - 9 </SelectItem>
                        <SelectItem value="online">Grade 10 - 12  </SelectItem>
                        <SelectItem value="online">Varsity/ College.</SelectItem>
                        <SelectItem value="in-person">Other </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                  
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message (Optional)</FormLabel>
                    <FormControl>
                      <Textarea rows={4} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Submitting..." : "Send Email"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
    
    
  );
};

export default Contact;
