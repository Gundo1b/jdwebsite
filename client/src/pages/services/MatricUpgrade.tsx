import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

// TypeScript interfaces for better type safety
interface FeatureItem {
  id: string;
  text: string;
}

interface ProgramCard {
  title: string;
  description: string;
  type: 'ASC' | 'NSC';
}

const MatricUpgrade = () => {
  const [, setLocation] = useLocation();

  // Program data organized for better maintainability
  const programs: ProgramCard[] = [
    {
      title: "Matric Amended (ASC)",
      type: "ASC",
      description: "Ideal for adults (21 years and older) who never completed school or did not pass Grade 12. Candidates can choose up to 6 subjects and study part-time through online or consultation classes. This recognised certificate enhances employability and provides a pathway to further education."
    },
    {
      title: "Matric Upgrade (NSC)",
      type: "NSC",
      description: "For learners who want to improve their matric results, this program offers up to 4 subjects with both online and contact classes. Students benefit from CAPS-aligned content, past paper practice, ongoing assessments, and personalized tutor support."
    }
  ];

  const features: FeatureItem[] = [
    {
      id: "flexible",
      text: "Flexible online and contact learning options"
    },
    {
      id: "curriculum",
      text: "CAPS-aligned curriculum and study material provided"
    },
    {
      id: "classes",
      text: "Small group classes with individual attention"
    },
    {
      id: "support",
      text: "Access to one-on-one consultations with tutors and mentors"
    }
  ];

  // Reusable CheckIcon component
  const CheckIcon = ({ className = "h-6 w-6 text-green-500 mr-2" }: { className?: string }) => (
    <svg 
      className={className} 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );

  // Program card component for better reusability
  const ProgramCard = ({ program }: { program: ProgramCard }) => (
    <article className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        {program.title}
      </h3>
      <p className="text-gray-700 leading-relaxed">
        {program.description}
      </p>
    </article>
  );

  return (
    <>
      <Header />
      <main className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
              Matric Upgrade Program
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              At JD Tutoring, we believe it's never too late to complete your matric and unlock new opportunities. 
              Our Matric Amended (ASC) and Matric Upgrade (NSC) programs are designed to support adults and young 
              learners who want to improve their results or obtain their certificate.
            </p>
          </header>

          <section className="mb-12" aria-labelledby="programs-heading">
            <h2 id="programs-heading" className="sr-only">Available Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((program) => (
                <ProgramCard key={program.type} program={program} />
              ))}
            </div>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-md" aria-labelledby="features-heading">
            <h2 id="features-heading" className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose JD Tutoring?
            </h2>
            <ul className="space-y-4 text-gray-700">
              {features.map((feature) => (
                <li key={feature.id} className="flex items-start">
                  <CheckIcon />
                  <span className="ml-2">{feature.text}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8 text-center" aria-labelledby="cta-heading">
            <h2 id="cta-heading" className="sr-only">Register Now</h2>
            <Button 
              onClick={() => setLocation("/register")} 
              className="bg-primary text-white rounded-md py-3 px-8 text-lg font-medium hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-label="Navigate to registration page"
            >
              Register Now
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MatricUpgrade;
