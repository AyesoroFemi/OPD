import React from "react";
import Download from "../../components/Download";
import AboutHero from "./components/AboutHero";
import Innovation from "./components/Innovation";
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
      <Innovation />
      <Download />
    </div>
  );
}

export default About;
