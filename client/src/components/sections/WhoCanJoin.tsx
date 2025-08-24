import { Heading } from "lucide-react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

const WhoCanJoin = () => {
  return (

     
    <section id="who-can-join" className="py-16 bg-gradient-to-r from-primary/5 to-purple-500/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            <i className="fas fa-user-friends text-primary mr-2"></i>Who Can Join
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our tutoring programs are designed to support students at various academic levels who want to improve their performance in Mathematics and Physics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Student Group 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full mb-4">
              <i className="fas fa-school text-primary text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">High School Students</h3>
            <p className="text-gray-600">
              Get help with coursework, exam preparation, and building strong foundations in Math and Physics.
            </p>
          </div>
          
          {/* Student Group 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-green-100 rounded-full mb-4">
              <i className="fas fa-graduation-cap text-green-500 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">College Students</h3>
            <p className="text-gray-600">
              Master complex topics, prepare for tests, and excel in your undergraduate math and physics courses.
            </p>
          </div>
          
          {/* Student Group 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-violet-100 rounded-full mb-4">
              <i className="fas fa-trophy text-purple-500 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Competitive Exam Aspirants</h3>
            <p className="text-gray-600">
              Get specialized coaching for entrance exams and competitions requiring strong math and physics skills.
            </p>
          </div>
          
          {/* Student Group 4 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-amber-100 rounded-full mb-4">
              <i className="fas fa-atom text-amber-500 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Knowledge Seekers</h3>
            <p className="text-gray-600">
              Anyone looking to strengthen their understanding of mathematical and physical concepts for personal growth.
            </p>
          </div>
        </div>
      </div>


      
    </section>
    
  );
};

export default WhoCanJoin;
