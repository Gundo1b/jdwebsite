import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
// import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
// import WhoCanJoin from "@/components/sections/WhoCanJoin";
// import Contact from "@/components/sections/Contact";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About"
import CtaBanner from "@/components/sections/CtaBanner";
import HowItWorks from "@/components/sections/HowItWorks";

const HomePage = () => {
  useEffect(() => {
    // Add Font Awesome CDN
    const fontAwesomeLink = document.createElement("link");
    fontAwesomeLink.rel = "stylesheet";
    fontAwesomeLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    document.head.appendChild(fontAwesomeLink);

    // Update page title
    <img src="./colleagues-studying-university-library.jpg" alt="" />
    document.title = "JD Tutoring ";
    
    return () => {
      // Clean up the added link on component unmount
      document.head.removeChild(fontAwesomeLink);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
         <WhyChooseUs />
        <HowItWorks />
        {/* <Services /> */}
        {/* <About /> */}
        
        {/* <WhoCanJoin /> */}
        
        
        {/* <Contact /> */}
        {/* <Testimonials /> */}
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
