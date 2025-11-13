import React from "react";
import HeroSection from "./components/Home/HeroSection";
import TransformindIdeas from "./components/Home/TransformindIdeas";

const page = () => {
  return (
    <main className="pb-5 pt-20">
      <HeroSection />
      <TransformindIdeas />
    </main>
  );
};

export default page;
