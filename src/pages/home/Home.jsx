import React from "react";
import Connect from "./components/Connect";
import Hero from "./components/Hero";
import IntroPro from "./components/IntroPro";
import Steps from "./components/Steps";


function Home() {
  return (
    <div>
      <Hero />;
      <IntroPro />
      <Steps />
      <Connect />
    </div>
  );
}

export default Home;
