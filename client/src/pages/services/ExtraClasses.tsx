import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

// TypeScript interfaces for better type safety
interface ServiceItem {
  id: string;
  text: string;
}

interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

const ExtraClasses = () => {
  const [, setLocation] = useLocation();

  // Organized service data for better maintainability
  const serviceCategories: ServiceCategory[] = [
    {
      title: "What We Offer",
      items: [
        {
          id: "tutoring",
          text: "Subject-specific tutoring for Grades 4–12"
        },
        {
          id: "sessions",
          text: "One-on-one or small group sessions tailored to learner needs"
        },
        {
          id: "scheduling",
          text: "Flexible after-school scheduling (home tutoring or center-based)"
        },
        {
          id: "feedback",
          text: "Regular progress feedback to parents"
        }
      ]
    },
    {
      title: "Additional Support",
      items: [
        {
          id: "guidance",
          text: "Subject choice guidance for Grade 9 learners to make informed Grade 10 selections"
        },
        {
          id: "career",
          text: "Career guidance for Grade 11–12 learners to align studies with future goals"
        },
        {
          id: "preparation",
          text: "Comprehensive test and exam preparation to boost confidence and results"
        }
      ]
    }
  ];

  // Reusable CheckIcon component (since Font Awesome might not be available)
  const CheckIcon = ({ className = "h-5 w-5 text-green-500 mr-3 mt-0.5" }: { className?: string }) => (
    <svg 
      className={className} 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
      aria-hidden="true"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
      />
    </svg>
  );

  // Service card component for better reusability
  const ServiceCard = ({ category }: { category: ServiceCategory }) => (
    <article className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        {category.title}
      </h3>
      <ul className="space-y-3">
        {category.items.map((item) => (
          <li key={item.id} className="flex items-start">
            <CheckIcon />
            <span className="text-gray-700">{item.text}</span>
          </li>
        ))}
      </ul>
    </article>
  );

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            Extra Classes
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            At JD Tutoring, we believe every learner has the potential to succeed with the right support. 
            Our extra classes provide personalized academic assistance to help students overcome challenges 
            and excel in their studies.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8" aria-labelledby="services-heading">
          <h2 id="services-heading" className="sr-only">Available Services</h2>
          {serviceCategories.map((category) => (
            <ServiceCard key={category.title} category={category} />
          ))}
        </section>

        <section className="mt-12 text-center" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="sr-only">Register for Extra Classes</h2>
          <Button 
            onClick={() => setLocation("/register")} 
            className="bg-primary text-white rounded-md py-3 px-8 text-lg font-medium hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            aria-label="Navigate to registration page for extra classes"
          >
            Register Now
          </Button>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ExtraClasses;
