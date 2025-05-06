import React from "react";
import Hero from "../components/HomePage/Hero";
import MenuPreview from "../components/HomePage/MenuPreview";
import AboutPreview from "../components/HomePage/AboutPreview";
import ContactCTA from "../components/ContactCTA";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <MenuPreview />
      <AboutPreview />
      <ContactCTA />
    </div>
  );
};

export default HomePage;
