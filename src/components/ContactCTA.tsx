import React from "react";
import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { contactInfo } from "../data/restaurantInfo";

const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 bg-primary-950 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Reserve Your Table Today
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join us for an unforgettable dining experience. Book your table now
            or contact us for more information.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="tel:+12131234567"
              className="flex items-center justify-center space-x-3 bg-white text-primary-900 py-4 px-6 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              <Phone size={20} />
              <span>{contactInfo.phone}</span>
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center space-x-3 bg-primary-600 text-white py-4 px-6 rounded-md font-medium hover:bg-primary-700 transition-colors"
            >
              <Calendar size={20} />
              <span>Make a Reservation</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
