import React from "react";
import Hero from "../components/home/hero";
import About from "../components/home/about";
import Projects from "../components/home/projects";
import Footer from "../components/home/footer";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </React.Fragment>
  );
}
