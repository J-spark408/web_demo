import React from 'react';
import Hero from '../components/Hero';
import MenuPreview from '../components/MenuPreview';
import AboutPreview from '../components/AboutPreview';
import Testimonials from '../components/Testimonials';
import ContactCTA from '../components/ContactCTA';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <MenuPreview />
      <AboutPreview />
      <Testimonials />
      <ContactCTA />
    </div>
  );
};

export default HomePage;