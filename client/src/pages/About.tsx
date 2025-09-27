import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Award, Target, Eye, Users, BookOpen, Trophy, Clock, Star } from "lucide-react";

const About = () => {
  const stats = [
    { number: "10+", label: "Years Experience", icon: Clock },
    { number: "500+", label: "Students Helped", icon: Users },
    { number: "95%", label: "Success Rate", icon: Trophy },
    { number: "4.9", label: "Average Rating", icon: Star },
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in education and student outcomes."
    },
    {
      icon: Users,
      title: "Personalized Learning",
      description: "Every student receives tailored support based on their unique needs."
    },
    {
      icon: BookOpen,
      title: "Comprehensive Support",
      description: "From curriculum alignment to exam preparation, we cover it all."
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description: "Our track record speaks for itself with consistent student success."
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About JD Tutoring</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Empowering students to achieve academic excellence through personalized, results-driven education
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* About Us Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Story</h2>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  With over <strong>10 years of proven excellence</strong>, JD Tutoring is more than just a tutoring company – we are a team of passionate educators committed to unlocking the full potential of every learner.
                </p>
                <p>
                  Our approach blends subject mastery with mentorship, building not only academic competence but also confidence and independence. We understand that every student learns differently, which is why we tailor our methods to suit individual learning styles.
                </p>
                <p>
                  Grounded in a deep understanding of the South African education landscape, we offer personalized, results-driven tutoring across multiple curricula, including <strong>CAPS, Cambridge, SACAI</strong>, and <strong>IEB</strong>.
                </p>
                <p>
                  We offer both <strong>online</strong> and <strong>in-person</strong> classes, providing flexible learning options to suit each learner's lifestyle and preference.
                </p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Mission Statement</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Seeing every learner reach their turning point in their respective subjects by equipping them with the necessary skills and knowledge.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Vision</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To create a conducive environment for every learner where they can supplement the knowledge they currently have and catapult them to greater heights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose JD Tutoring?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Flexible Learning</h3>
              <p className="text-gray-600">Choose between online and in-person sessions that fit your schedule and learning preferences.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Curriculum Expertise</h3>
              <p className="text-gray-600">Specialized knowledge across CAPS, Cambridge, SACAI, and IEB curricula.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Proven Track Record</h3>
              <p className="text-gray-600">Over 10 years of helping students achieve their academic goals with measurable results.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;