import { Footer, Navbar } from "../components";
import { About, Explore, GetStarted, Hero } from "../sections";

const Page = () => (
  <div className="bg-[#283b2b] overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <GetStarted />
    <Footer />
  </div>
);

export default Page;
