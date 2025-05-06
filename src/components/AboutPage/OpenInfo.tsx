import React from "react";
import { motion } from "framer-motion";
import { openingHours } from "../../data/restaurantInfo";

const OpenInfo: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-primary-50 p-8 md:p-12 rounded-lg shadow-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-serif font-bold mb-4">
              Opening Hours
            </h2>
            <p className="text-gray-600">
              We look forward to serving you during these hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {openingHours.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex justify-between p-4 border-b border-gray-200"
              >
                <span className="font-medium">{item.day}</span>
                <span className="text-gray-700">{item.hours}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenInfo;
