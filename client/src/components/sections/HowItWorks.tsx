import { motion } from "framer-motion";
import { Check, User, Book, Award } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: User,
      title: "Choose a Service",
      description: "Browse our services and choose the one that best fits your needs.",
    },
    {
      icon: Check,
      title: "Register",
      description: "Create an account and enroll in your chosen workshop or tutoring session.",
    },
    {
      icon: Book,
      title: "Start Learning",
      description: "Attend your sessions and start your journey to academic excellence.",
    },
    {
      icon: Award,
      title: "Achieve Your Goals",
      description: "With our support, you will be on your way to achieving your academic goals.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            A simple and straightforward process to get you started on your learning journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center p-6 bg-gray-50 rounded-lg shadow-md"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mx-auto mb-4">
                <step.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
