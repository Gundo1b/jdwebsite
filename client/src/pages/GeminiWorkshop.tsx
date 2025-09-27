import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const GeminiWorkshop = () => {
  const [, setLocation] = useLocation();

  const handleRegisterClick = () => {
    setLocation("/register");
  };

  return (
    <>
      <Header />
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Gemini Final Revision Examination Workshop <span className="inline-block bg-red-500 text-white text-lg font-semibold ml-2 px-2.5 py-0.5 rounded-full">50% OFF</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Supercharge Your Exam Prep for Grades 10-12
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Workshop Details
                </h3>
                <p className="text-gray-600 mb-6">
                  Our intensive workshop is designed to provide students with the knowledge, skills, and confidence to excel in their final exams.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Key Focus Areas:
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      In-depth review of core concepts
                    </li>
                    <li>
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      Extensive practice with past papers
                    </li>
                    <li>
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      Mastering effective exam techniques
                    </li>
                    <li>
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      Time management and stress-reduction strategies
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <p className="text-blue-800 font-medium">
                    <i className="fas fa-info-circle mr-2"></i>
                    Limited spots available to ensure personalized attention.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Announcements
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-100 rounded-lg">
                    <h4 className="font-semibold text-yellow-800">
                      Schedule Update
                    </h4>
                    <p className="text-yellow-700">
                      The workshop will now be held from 9:00 AM to 3:00 PM.
                    </p>
                  </div>
                  <div className="p-4 bg-green-100 rounded-lg">
                    <h4 className="font-semibold text-green-800">
                      New Guest Speaker
                    </h4>
                    <p className="text-green-700">
                      We are excited to announce that Dr. Jane Doe, a renowned physicist, will be joining us for a special session on exam preparation.
                    </p>
                  </div>
                  <div className="p-4 bg-red-100 rounded-lg">
                    <h4 className="font-semibold text-red-800">
                      Registration Deadline
                    </h4>
                    <p className="text-red-700">
                      The deadline for registration is August 25, 2025.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              onClick={handleRegisterClick}
              className="px-8 py-4 bg-red-600 text-white rounded-md font-medium text-lg hover:bg-red-700 transition-colors"
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GeminiWorkshop;
