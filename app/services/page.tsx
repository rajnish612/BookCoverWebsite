import React from "react";
import HeroSection from "../components/Services/HeroSection";
import ServiceCard from "../components/Services/ServiceCard";
import { Book } from "@deemlol/next-icons";
const services = {
  title: "title",
  description: "description",
  icon: <Book size={24} />,
  features: ["test", "test"],
  buttonText: "Get in touch",
};
const page = () => {
  return (
    <div>
      <HeroSection />
      <div className="flex flex-wrap px-10 mt-10 gap-6">
        <ServiceCard {...services} />
      </div>
    </div>
  );
};

export default page;
