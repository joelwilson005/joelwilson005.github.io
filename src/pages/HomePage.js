import About from "../components/About";
import Hero from "../components/Hero";
import { useEffect, useState } from "react";
import PageLoader from "../components/PageLoader";
import FeaturedProject from "../components/FeaturedProject";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { motion, useScroll } from "framer-motion";
import "../styles/progressbar.css";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading((loading) => !loading);
    }, 1200);

    return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Hero />
      <About />
      <FeaturedProject />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
