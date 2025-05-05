import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MenuPreview: React.FC = () => {
  const categories = [
    {
      title: "Brisket",
      image:
        "https://www.kevinschoices.com/cdn/shop/files/korean_thin_slice_brisket_01.jpg?v=1742352931",
      description: "Start your meal with our delicious slice of brisket.",
    },
    {
      title: "LA Galbi",
      image:
        "https://cdn11.bigcommerce.com/s-qxyhjadm8d/images/stencil/1280x1280/products/280/531/33fc66b59e314ff99c938c14599bed7a---item_main---ab33d5b2-be15-4031-8c03-0f0dca401672__22358.1724874620.jpg?c=1",
      description: "Discover our exceptional quality marbling galbi.",
    },
    {
      title: "Pork Belly",
      image: "https://i.redd.it/elq36q3niifa1.jpg",
      description: "Complete you Korean grill cravings with pork belly.",
    },
    {
      title: "Drinks",
      image:
        "https://www.campariacademy.com/wp-content/uploads/2023/08/Soju.jpg",
      description: "Pair your meal with the perfect beverage.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Explore Our Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted dishes made from the freshest
            ingredients, combining traditional flavors with innovative
            techniques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden group"
            >
              <div className="rounded-lg shadow-md overflow-hidden bg-white">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  <h3 className="absolute bottom-4 left-4 text-xl font-serif font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="inline-block bg-primary-600 text-white py-3 px-8 rounded-md font-medium hover:bg-primary-700 transition-colors"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
