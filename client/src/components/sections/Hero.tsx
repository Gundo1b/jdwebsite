import { Button } from "@/components/ui/button";
import { useLocation } from "wouter"; // Import useLocation from wouter
import pic from "./colleagues-studying-university-library.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const [, setLocation] = useLocation(); // useLocation hook to navigate

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  // Handle click event for Enroll Now button
  const handleEnrollClick = () => {
    setLocation("/register"); // Navigate to the /register page
  };

  return (
    <>
      <section
        id="home"
        className="relative bg-gradient-to-r from-blue-50 to-indigo-50 pt-16 pb-12 md:pt-24 md:pb-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Welcome to{" "}
                <span className="text-primary">JD Tutoring</span>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-gray-600">
                We're committed to empowering students to achieve academic greatness. Our skilled tutors offer personalized guidance to help learners conquer challenges and unlock their full potential.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Button
                  onClick={handleEnrollClick}
                  className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-blue-600 transition-colors shadow-md"
                >
                  Enroll now
                </Button>
                <Button
                  onClick={() => setLocation("/services")}
                  variant="outline"
                  className="px-6 py-3 bg-white text-primary border border-primary rounded-md font-medium hover:bg-gray-50 transition-colors"
                >
                  Explore Services
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="hidden md:block"
            >
              <img
                src={pic}
                alt="Students learning mathematics and physics"
                className="rounded-lg shadow-lg object-cover w-full h-auto"
                width="600"
                height="400"
              />
            </motion.div>
          </div>
        </div>

        {/* Floating badges */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:block absolute -bottom-6 left-1/4 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg"
        >
          <div className="flex items-center text-green-500 font-bold">
            <i className="fas fa-check-circle mr-2"></i>
            <span>Personalized Learning</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden lg:block absolute -bottom-6 right-1/4 transform translate-x-1/2 bg-white p-3 rounded-lg shadow-lg"
        >
          <div className="flex items-center text-purple-500 font-bold">
            <i className="fas fa-star mr-2"></i>
            <span>Expert Tutors</span>
          </div>
        </motion.div>
      </section>

     
      <section className="bg-gradient-to-r from-purple-600 to-indigo-800 py-8 px-4 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 tracking-tight">
            Final Revision Examination Workshop
          </h2>
          <p className="text-base sm:text-lg mb-6 text-indigo-200">
            Grades 10-12: Supercharge Your Exam Prep!
          </p>
          <div className="bg-red-500 text-white px-6 py-3 rounded-full inline-block font-bold text-lg sm:text-xl shadow-lg mb-4 animate-pulse">
            50% OFF - LIMITED TIME OFFER!
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-yellow-300">
              Featured Subjects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm sm:text-base">
              <div className="bg-indigo-700/50 p-3 rounded-lg">
                <span className="font-bold">Mathematics/Mathematical Literacy</span>
              </div>
              <div className="bg-indigo-700/50 p-3 rounded-lg">
                <span className="font-bold">Physics</span>
              </div>
              <div className="bg-indigo-700/50 p-3 rounded-lg">
                <span className="font-bold">Accounting</span>
              </div>
              <div className="bg-indigo-700/50 p-3 rounded-lg">
                <span className="font-bold">Life Science</span>
              </div>
            </div>
            <div className="mt-6">
              <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full inline-block font-bold text-sm sm:text-base shadow-md">
                Requirement: Minimum 45% average in the subject
              </div>
            </div>
            <div className="mt-6 text-lg">
              <p>Online Class: R600 per subject</p>
              <p>Face-to-face Class: R750 per subject</p>
              <p>Date: 06 October to 11 October</p>
            </div>
            <div className="mt-8">
              <Button
                onClick={() => setLocation("/register")}
                className="px-8 py-4 bg-yellow-400 text-gray-900 rounded-md font-bold hover:bg-yellow-300 transition-colors shadow-lg"
              >
                Enroll Now
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
