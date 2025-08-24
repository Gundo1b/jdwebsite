import { Button } from "@/components/ui/button";

const CtaBanner = () => {
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
    <section className="py-12 bg-gradient-to-r from-primary to-purple-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Boost Your Grades?</h2>
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Join JD Tutoring today and take the first step towards academic excellence in Mathematics and Physics.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            onClick={() => scrollToSection("contact")} 
            variant="default"
            className="px-8 py-4 bg-white text-primary font-medium rounded-md shadow-lg hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Button>
          <Button 
            onClick={() => scrollToSection("contact")} 
            variant="outline"
            className="px-8 py-4 bg-transparent text-white border-2 border-white font-medium rounded-md hover:bg-white/10 transition-colors"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
