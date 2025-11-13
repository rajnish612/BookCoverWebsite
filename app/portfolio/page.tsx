import React from "react";
import HeroSection from "../components/Portfolio/HeroSection";
import BestCollections from "../components/Portfolio/BestCollections";
import AboutMeCard from "../components/AboutMeCard";
import RecentWorks from "../components/Portfolio/RecentWorks";
import WhatCanIDo from "../components/Portfolio/About/WhatCanIDo";

const page = () => {
  return (
    <div className="pt-20 pb-10">
      <HeroSection />
      <AboutMeCard />

      <BestCollections />

      {/* <RecentWorks /> */}
      <WhatCanIDo />
    </div>
  );
};

export default page;
