import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const WhyChooseUs = () => {
  return (
    
    <section id="why-us" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - About Us */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              <i className="fas fa-award text-primary mr-2"></i>About Us
            </h2>
            <p className="text-lg text-gray-600">
              With over 10 years of proven excellence, <strong>JD Tutoring</strong> is more than just a tutoring company  we are a team of passionate educators committed to unlocking the full potential of every learner. Our approach blends subject mastery with mentorship, building not only academic competence but also confidence and independence.
              <br /><br />
              Grounded in a deep understanding of the South African education landscape, we offer personalized, results-driven tutoring across multiple curricula, including <strong>CAPS, Cambridge, SACAI</strong>, and <strong>IEB</strong>. Whether your child is in mainstream schooling or an alternative learning pathway, we tailor our support to meet their specific academic needs.
              <br /><br />
              We offer both <strong>online</strong> and <strong>in-person</strong> classes, providing flexible learning options to suit each learner’s lifestyle and preference.
              <br /><br />
              At JD Tutoring, we believe that every student can succeed  with the right guidance, the right mindset, and the right support.
            </p>
          </div>

          {/* Right side - Mission & Vision */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-2xl font-semibold text-primary mb-3">
                <i className="fas fa-bullseye mr-2 text-primary"></i>Mission Statement
              </h3>
              <p className="text-gray-700 text-lg">
                Seeing every learner reach their turning point in their respective subjects by equipping them with the necessary skills and knowledge.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-2xl font-semibold text-primary mb-3">
                <i className="fas fa-eye mr-2 text-primary"></i>Vision
              </h3>
              <p className="text-gray-700 text-lg">
                To create a conducive environment for every learner where they can supplement the knowledge they currently have and catapult them to greater heights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default WhyChooseUs;
