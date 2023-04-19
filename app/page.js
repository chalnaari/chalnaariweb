import About from "@/components/About/About";
import Connect from "@/components/Connect/Connect";
import Dbutton from "@/components/Dbutton/Dbutton";
import Faq from "@/components/FaqSection/Faq";
import FlowTab from "@/components/FlowTab/FlowTab";
import Blog from "@/components/Home/Blog/Blog";
import Hero from "@/components/Home/Hero/Hero";
import OurWork from "@/components/Home/OurWork/OurWork";
import Pillars from "@/components/Home/Pillars/Pillars";
import Why from "@/components/Home/Why/Why";
import PConnect from "@/components/PConnect/PConnect";
import Social from "@/components/Social/Social";

const Home = () => {
  return (
    <main>
      <Hero />
      <FlowTab />
      <Dbutton />
      <Social />
      <About />
      <PConnect />
      <Why />
      <Pillars />
      <OurWork />
      <Blog />
      <Connect />
      <Faq />
      {/* <Partners /> */}
    </main>
  );
};

export default Home;
