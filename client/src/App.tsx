import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import Services from "./pages/Services";
import Register from "./pages/Register";
import WhyChooseUs from "./pages/WhyChooseUs";
import WhoCanJoin from "./pages/WhoCanJoin";
import Contact from "./pages/Contact";
import About from "./pages/About";
import GeminiWorkshop from "./pages/GeminiWorkshop";
import Workshop from "./pages/Workshop";
import MatricUpgrade from "./pages/services/MatricUpgrade";
import SaturdaySchool from "./pages/services/SaturdaySchool";
import ExtraClasses from "./pages/services/ExtraClasses";
import VarsityCollegeTutoring from "./pages/services/VarsityCollegeTutoring";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './index.css';
import Loading from './components/Loading';
import { useState, useEffect } from 'react';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    console.log("Location changed:", location);
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      console.log("Loading set to false");
    }, 1000);

    return () => {
      clearTimeout(timer);
      console.log("Timer cleared");
    };
  }, [location[0]]);

  if (loading) {
    console.log("Rendering Loading component");
    return <Loading />;
  }

  console.log("Rendering page content");

  return (
    <>
      <ScrollToTop />
      <TransitionGroup>
        <CSSTransition key={location[0]} classNames="fade" timeout={300}>
          <>
            <Switch>
              {/* Define Routes using `Route` from wouter */}
              <Route path="/" component={HomePage} />
              <Route path="/services" component={Services} />
              <Route path="/register" component={Register} />
              <Route path="/WhyChooseUs" component={WhyChooseUs} />
              <Route path="/WhoCanJoin" component={WhoCanJoin} />
              <Route path="/Contact" component={Contact} />
              <Route path="/About" component={About} />
              <Route path="/gemini-workshop" component={GeminiWorkshop} />
              <Route path="/workshop" component={Workshop} />
              <Route path="/services/matric-upgrade" component={MatricUpgrade} />
              <Route path="/services/saturday-school" component={SaturdaySchool} />
              <Route path="/services/extra-classes" component={ExtraClasses} />
              <Route path="/services/varsity-college-tutoring" component={VarsityCollegeTutoring} />
              {/* Default route for 404 Not Found */}
              <Route component={NotFound} />
            </Switch>
          </>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
