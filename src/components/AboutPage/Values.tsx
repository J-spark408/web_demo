import React from "react";
import { motion } from "framer-motion";
import { Clock, Award, Users, Utensils } from "lucide-react";

const Values: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-serif font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What drives us forward and shapes our approach to food and
              service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="inline-block p-4 bg-primary-100 rounded-full mb-6">
                <Utensils size={30} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Quality Ingredients
              </h3>
              <p className="text-gray-600">
                We source only the freshest, highest-quality ingredients from
                local farmers and trusted suppliers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="inline-block p-4 bg-primary-100 rounded-full mb-6">
                <Award size={30} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Culinary Excellence
              </h3>
              <p className="text-gray-600">
                Our team of expert chefs is dedicated to creating memorable
                dining experiences through culinary innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="inline-block p-4 bg-primary-100 rounded-full mb-6">
                <Users size={30} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Exceptional Service
              </h3>
              <p className="text-gray-600">
                We believe in personalized service that makes every guest feel
                special and valued.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="inline-block p-4 bg-primary-100 rounded-full mb-6">
                <Clock size={30} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to sustainable practices that minimize our
                environmental impact and support local communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default Values;
