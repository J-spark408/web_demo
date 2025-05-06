import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <div
      className="relative h-[50vh] min-h-[400px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://blog.resy.com/wp-content/uploads/2024/02/originkbbq-9550.jpg')",
      }}
    >
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-4">
            About Gabin LA
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Our story, our passion, and our commitment to exceptional dining.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
