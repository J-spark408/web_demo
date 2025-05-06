import React from "react";
import { motion } from "framer-motion";
import { restaurantDescription } from "../../data/restaurantInfo";

const OurStory: React.FC = () => {
  return (
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
  );
};

export default OurStory;
