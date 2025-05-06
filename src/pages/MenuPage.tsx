import React from "react";
import ContactCTA from "../components/ContactCTA";
import Hero from "../components/MenuPage/Hero";
import MenuSection from "../components/MenuPage/MenuSection";

const MenuPage: React.FC = () => {
  return (
    <div>
      <Hero />
      <MenuSection />
      <ContactCTA />
    </div>
  );
};

export default MenuPage;
