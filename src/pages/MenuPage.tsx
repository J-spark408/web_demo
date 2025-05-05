import React, { useState } from "react";
import { motion } from "framer-motion";
import { menuCategories, menuItems, MenuItem } from "../data/menuData";
import ContactCTA from "../components/ContactCTA";

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("combos");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredItems: MenuItem[] = menuItems.filter(
    (item) =>
      (activeCategory === "all" || item.category === activeCategory) &&
      (searchTerm === "" ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.tags &&
          item.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )))
  );

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-[50vh] min-h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://www.letsmeatnyc.com/wp-content/uploads/2018/09/2018_8_23_letsmeat_screenshot_12.jpg')",
        }}
      >
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-4">
              Our Menu
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Discover our culinary creations crafted with passion and the
              finest ingredients.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="max-w-md mx-auto mb-8">
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div className="flex justify-center flex-wrap gap-3">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeCategory === "all"
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                }`}
              >
                All
              </button>
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    activeCategory === category.id
                      ? "bg-primary-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Category Description */}
          {activeCategory !== "all" && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12 max-w-2xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">
                {menuCategories.find((c) => c.id === activeCategory)?.name}
              </h2>
              <p className="text-gray-600">
                {
                  menuCategories.find((c) => c.id === activeCategory)
                    ?.description
                }
              </p>
            </motion.div>
          )}

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {item.image && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <span className="font-serif text-lg text-primary-600 font-bold">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-500">
                  No menu items found. Please try a different search.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <ContactCTA />
    </div>
  );
};

export default MenuPage;
