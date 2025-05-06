import React from "react";
import ContactCTA from "../components/ContactCTA";
import Hero from "../components/AboutPage/Hero";
import OurStory from "../components/AboutPage/OurStory";
import Values from "../components/AboutPage/Values";
import OpenInfo from "../components/AboutPage/OpenInfo";

const AboutPage: React.FC = () => {
  return (
    <div>
      <Hero />
      <OurStory />
      <Values />
      <OpenInfo />
      <ContactCTA />
    </div>
  );
};

export default AboutPage;
