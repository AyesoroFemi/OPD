import Connect from "./components/Connect";
import Download from "../../components/Download";
import Faq from "./components/faq/Faq";
import Hero from "./components/Hero";
import IntroPro from "./components/IntroPro";
import Steps from "./components/Steps";

function Home() {
  return (
    <div>
      <Hero />
      <IntroPro />
      <Steps />
      <Connect />
      <Faq />
      <Download /> 
    </div>
  );
}

export default Home;
