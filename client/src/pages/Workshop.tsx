import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle, Star, Target, BookOpen, Users } from "lucide-react";

const Workshop = () => {
  const [, setLocation] = useLocation();

  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-800 py-16 px-4 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
          Final Revision Examination Workshop <span className="inline-block bg-red-500 text-white text-lg font-semibold ml-2 px-2.5 py-0.5 rounded-full">50% OFF</span>
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-indigo-200">
          Grades 10-12: Ace Your Exams with Confidence!
        </p>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-yellow-300 flex items-center">
                <BookOpen className="mr-2" /> What You Will Learn
              </h2>
              <ul className="space-y-2 text-indigo-200">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 text-green-400" />
                  <span>Comprehensive review of key subject topics.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 text-green-400" />
                  <span>Effective exam-taking strategies and time management.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 text-green-400" />
                  <span>How to tackle common exam questions and avoid pitfalls.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 text-green-400" />
                  <span>In-depth analysis of past papers and marking schemes.</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-yellow-300 flex items-center">
                <Star className="mr-2" /> Why Choose Our Workshop?
              </h2>
              <ul className="space-y-2 text-indigo-200">
                <li className="flex items-start">
                  <Target className="mr-2 mt-1 text-green-400" />
                  <span>Expert tutors with a track record of success.</span>
                </li>
                <li className="flex items-start">
                  <Target className="mr-2 mt-1 text-green-400" />
                  <span>Small class sizes for personalized attention.</span>
                </li>
                <li className="flex items-start">
                  <Target className="mr-2 mt-1 text-green-400" />
                  <span>Interactive and engaging learning environment.</span>
                </li>
                <li className="flex items-start">
                  <Target className="mr-2 mt-1 text-green-400" />
                  <span>Proven strategies to boost your grades.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-bold mb-4 text-yellow-300">
              Featured Subjects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-base">
              <div className="bg-indigo-700/50 p-4 rounded-lg font-bold">
                Mathematics/Mathematical Literacy
              </div>
              <div className="bg-indigo-700/50 p-4 rounded-lg font-bold">
                Physics
              </div>
              <div className="bg-indigo-700/50 p-4 rounded-lg font-bold">
                Accounting
              </div>
              <div className="bg-indigo-700/50 p-4 rounded-lg font-bold">
                Life Science
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full inline-block font-bold text-lg shadow-md">
              Requirement: Minimum 45% average in the subject
            </div>
          </div>

          <div className="mt-8 text-xl space-y-2">
            <p><span className="font-bold text-yellow-300">Online Class:</span> <span className=""> R600</span> per subject</p>
            <p><span className="font-bold text-yellow-300">Face-to-face Class:</span> <span className=""> R750</span> per subject</p>
            <p><span className="font-bold text-yellow-300">Date:</span> 06 October to 11 October</p>
          </div>

          <div className="mt-10">
            <Button
              onClick={() => setLocation("/register")}
              className="px-10 py-5 bg-yellow-400 text-gray-900 rounded-md font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg transform hover:scale-105"
            >
              Enroll Now and Secure Your Spot!
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Workshop;