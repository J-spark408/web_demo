import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <div
      className="relative h-screen min-h-[600px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url('https://cdn.vox-cdn.com/uploads/chorus_image/image/72963582/2023_08_02_Baekjeong_SJ_025__edited_.0.jpg')",
      }}
    >
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-serif text-white font-bold mb-4">
            Experience Korean BBQ Grill at Its Best
          </h1>
          <p className="text-xl text-gray-100 mb-8">
            Savor the flavors and quality of our finest ingredients.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent opacity-60"></div>

      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-1 h-16 bg-white opacity-60 rounded-full mx-auto"></div>
      </motion.div>
    </div>
  );
};

export default Hero;
