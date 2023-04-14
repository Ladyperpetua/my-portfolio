import React from "react";
import "./App.css";
import HeaderNav from "./HeaderNav";
import HeroSection from "./HeroSection";
import ContentSection from "./ContentSection";
import FrostedBackGround from "./FrostedBackGround";
import DevelopmentJourney from "./DevelopmentJourney";
import Footer from "./Footer";

function App() {
  return (
    <>
      <HeaderNav />
      <FrostedBackGround />
      <HeroSection />
      {/* <Example /> */}
      <ContentSection />
      <FrostedBackGround />
      <DevelopmentJourney />
      <Footer />
    </>
  );
}

export default App;
