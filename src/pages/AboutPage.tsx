import React from "react";
import { motion } from "framer-motion";
import { restaurantDescription, openingHours } from "../data/restaurantInfo";
import { Clock, Award, Users, Utensils } from "lucide-react";
import ContactCTA from "../components/ContactCTA";

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
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

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-serif font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                {restaurantDescription.full
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index} className="text-lg">
                      {paragraph}
                    </p>
                  ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="h-64 overflow-hidden rounded-lg">
                  <img
                    src="https://cdn.vox-cdn.com/uploads/chorus_image/image/72963582/2023_08_02_Baekjeong_SJ_025__edited_.0.jpg"
                    alt="Restaurant interior"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-64 sm:mt-12 overflow-hidden rounded-lg">
                  <img
                    src="https://www.letsmeatnyc.com/wp-content/uploads/2018/09/2018_8_23_letsmeat_screenshot_12.jpg"
                    alt="Chef preparing food"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-64 overflow-hidden rounded-lg">
                  <img
                    src="https://blog.resy.com/wp-content/uploads/2024/02/originkbbq-9550.jpg"
                    alt="Restaurant exterior"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-64 sm:mt-12 overflow-hidden rounded-lg">
                  <img
                    src="https://nashvillelifestyles.com/downloads/29118/download/Babo%20Nashville%20Lifestyles-4.jpg?cb=f77f8e30ac0ceb5b83d6d7a9c87f74e7&w=1500&h="
                    alt="Signature dish"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
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

      {/* Opening Hours Section */}
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

      {/* CTA Section */}
      <ContactCTA />
    </div>
  );
};

export default AboutPage;
