import React from "react";
import Hero from "../components/ContactPage/Hero";
import FindUs from "../components/ContactPage/FindUs";
import ContactInfo from "../components/ContactPage/ContactInfo";
import FAQs from "../components/ContactPage/FAQs";
import MessageCTA from "../components/ContactPage/MessageCTA";

const ContactPage: React.FC = () => {
  return (
    <div>
      <Hero />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FindUs />
            <ContactInfo />
          </div>
        </div>
      </section>
      <FAQs />
      <MessageCTA />
    </div>
  );
};

export default ContactPage;
