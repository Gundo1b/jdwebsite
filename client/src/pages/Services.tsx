import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GraduationCap, Calendar, Plus, University, ClipboardCheck, BookOpen, Users, Award } from "lucide-react";

const Services = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Tutoring Services</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Comprehensive academic support designed to unlock your potential and achieve excellence in your studies
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span>Expert Tutors</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Small Classes</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span>CAPS Aligned</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Matric Upgrade */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Matric Upgrade</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Improve your final Grade 12 results with focused support, targeted resources, and structured exam preparation.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  CAPS-aligned curriculum
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Past paper practice
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Regular assessments
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Personalised attention
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl transition-all">
                Enquire Now
              </Button>
            </div>
          </div>

          {/* Saturday School */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Saturday School</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Stay ahead with our Saturday revision classes focusing on core subjects and exam techniques.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Weekly revision sessions
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Focused subject areas
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Group learning environment
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Consistent progress tracking
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 rounded-xl transition-all">
                Join Saturday School
              </Button>
            </div>
          </div>

          {/* Extra Classes */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <Plus className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Extra Classes</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get extra support in subjects you find challenging, tailored to your pace and learning style.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Subject-specific sessions
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  One-on-one or small group
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Based on learner needs
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  After-school flexibility
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 rounded-xl transition-all">
                Request Extra Class
              </Button>
            </div>
          </div>

          {/* Varsity/College Tutoring */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <University className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Varsity / College Tutoring</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Academic support for university and college students in key subjects including math, science, business, and more.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Assistance with assignments & modules
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Online or in-person sessions
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Study strategies for higher ed
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Exam prep & consultation
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all">
                Book a Session
              </Button>
            </div>
          </div>

          {/* Final Revision Examination Workshop */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 md:col-span-2 lg:col-span-1">
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <ClipboardCheck className="w-8 h-8 text-white" />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-gray-800">Final Revision Workshop</h3>
                <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold px-3 py-1 rounded-full animate-pulse">
                  50% OFF
                </span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Intensive workshops designed to cover the entire syllabus, focusing on key areas and exam strategies to boost your confidence.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Comprehensive syllabus coverage
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Mock examinations
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Time management skills
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Q&A sessions with examiners
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-xl transition-all">
                Register for Workshop
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Services;
