import React from "react";
import AboutHero from "./components/AboutHero";
import Partners from "./components/Partners";
import Product from "./components/Product";
import Team from "./components/Team";
function About() {
  return (
    <div>
      <AboutHero />
      <Product />
      <Partners />
      <Team />
    </div>
  );
}

export default About;
