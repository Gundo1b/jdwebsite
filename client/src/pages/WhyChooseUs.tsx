import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header"

const WhyChooseUs = () => {
  return (
    <>
    <Header />
    <section id="why-us" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            <i className="fas fa-award text-primary mr-2"></i>Why Choose JD Tutoring
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our proven approach has helped hundreds of students achieve their academic goals and build confidence in their abilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <i className="fas fa-user-graduate text-primary text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Experienced Tutors</h3>
            <p className="text-gray-600">
              Our tutors are specialists in Mathematics and Physics with years of teaching experience and academic excellence.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
              <i className="fas fa-lightbulb text-green-500 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Easy-to-Understand Methods</h3>
            <p className="text-gray-600">
              We break down complex concepts into simple, digestible explanations that make learning enjoyable and effective.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-violet-100 rounded-full mb-4">
              <i className="fas fa-brain text-purple-500 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Concept Clarity</h3>
            <p className="text-gray-600">
              We focus on building a strong foundation of concepts rather than mere memorization, ensuring long-term understanding.
            </p>
          </div>
          
          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <i className="fas fa-users text-primary text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Small Batch Sizes</h3>
            <p className="text-gray-600">
              We maintain small class sizes to ensure each student receives personalized attention and guidance.
            </p>
          </div>
          
          {/* Feature 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
              <i className="fas fa-dollar-sign text-green-500 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Affordable Fees</h3>
            <p className="text-gray-600">
              We provide high-quality education at competitive rates with flexible payment options to suit your budget.
            </p>
          </div>
          
          {/* Feature 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-violet-100 rounded-full mb-4">
              <i className="fas fa-chart-line text-purple-500 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Proven Results</h3>
            <p className="text-gray-600">
              Our students consistently achieve improved grades and enhanced confidence in their mathematical and physics abilities.
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default WhyChooseUs;
