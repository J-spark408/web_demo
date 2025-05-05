import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutPreview: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Restaurant interior" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 md:w-48 md:h-48 bg-primary-100 rounded-lg -z-10"></div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Gabin LA has been a culinary landmark in the heart of the city, offering an exceptional dining experience that combines traditional flavors with innovative techniques.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              Our executive chef, Marco Bianchi, brings over 20 years of international experience to create dishes that are both familiar and surprising, using only the freshest seasonal ingredients sourced from local farmers and producers.
            </p>
            <Link
              to="/about"
              className="inline-block border-2 border-primary-600 text-primary-600 py-3 px-8 rounded-md font-medium hover:bg-primary-600 hover:text-white transition-colors"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;