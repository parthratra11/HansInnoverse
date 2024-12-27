/* eslint-disable @typescript-eslint/no-explicit-any */

import PrizesComponent from "./components/Prizes";
import TimelineComponent from "./components/Timeline";
import OrganizersComponent from "./components/Organizers";
import ThemesComponent from "./components/Themes";
import MentorsComponent from "./components/Mentors";
import FaqComponent from "./components/FAQ";
import BgAnimation from "./components/BgAnimation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <BgAnimation />
      <div>
        <Navbar />
        <Hero />
        <About />
        <ThemesComponent />
        <TimelineComponent />
        <PrizesComponent />
        <section
          id="team"
          className="min-h-screen py-12 sm:py-10 relative z-50 bg-gradient-to-r from-[#000000] to-[#05101d]"
        >
          <MentorsComponent />
          <OrganizersComponent />
        </section>
        <FaqComponent />
        <Banner />
        <Footer />
      </div>
    </>
  );
}
