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

const VarsityCollegeTutoring = () => {
  const [, setLocation] = useLocation();

  // Organized service data for better maintainability
  const serviceCategories: ServiceCategory[] = [
    {
      title: "Varsity College Tutoring Services",
      items: [
        {
          id: "subjects",
          text: "Comprehensive tutoring for all university subjects and modules"
        },
        {
          id: "assignments",
          text: "Assignment assistance and project guidance"
        },
        {
          id: "exams",
          text: "Exam preparation and test-taking strategies"
        },
        {
          id: "skills",
          text: "Academic writing and research skills development"
        }
      ]
    },
    {
      title: "Why Choose Our Varsity Support",
      items: [
        {
          id: "experts",
          text: "Qualified tutors with university-level expertise"
        },
        {
          id: "flexible",
          text: "Flexible scheduling to fit your university timetable"
        },
        {
          id: "online",
          text: "Online and in-person tutoring options available"
        },
        {
          id: "results",
          text: "Proven track record of improving student performance"
        }
      ]
    }
  ];

  // Reusable CheckIcon component
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
            Varsity College Tutoring
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Excel in your university studies with our specialized varsity college tutoring services. 
            Our expert tutors provide comprehensive support for university students, helping you 
            master complex concepts, improve your grades, and achieve your academic goals.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8" aria-labelledby="services-heading">
          <h2 id="services-heading" className="sr-only">Available Services</h2>
          {serviceCategories.map((category) => (
            <ServiceCard key={category.title} category={category} />
          ))}
        </section>

        <section className="mt-12 text-center" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="sr-only">Register for Varsity College Tutoring.</h2>
          <Button 
            onClick={() => setLocation("/register")} 
            className="bg-primary text-white rounded-md py-3 px-8 text-lg font-medium hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            aria-label="Navigate to registration page for varsity college tutoring"
          >
            Register Now
          </Button>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default VarsityCollegeTutoring;
