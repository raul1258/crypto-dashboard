import React from "react";
import Header from "../components/Common/Header";
import LandingIntro from "../components/LandingPage/Intro";

function Home() {
  return (
    <div style={{minHeight:"120vh"}}>
      <Header />
      <LandingIntro />
    </div>
  );
}

export default Home;