import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Qualities from "../components/Qualities";
import Menu from "../components/Menu";
import Team from "../components/Team";
import Footer from "../components/Footer";
import Reservation from "../components/Reservation";
import WhoAreWe from "../components/WhoAreWe";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Qualities />
      <Menu />
      <WhoAreWe />
      <Team />
      <Reservation/>
      <Footer />
    </>
  );
};

export default Home;
