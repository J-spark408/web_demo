import React from "react";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const FAQs: React.FC = () => {
  const faqs = [
    {
      question: "Do you offer all you can eat?",
      answer:
        "No, we offer premium quality meat which can be ordered à la carte and in set combos of beef or pork. This allows you to select the specific cuts and quantities that best suit your preferences.",
    },
    {
      question: " Do you have vegetarian options?",
      answer:
        "While our focus is on premium meats, we do offer a selection of vegetarian side dishes that can be ordered. Please see our menu for details.",
    },
    {
      question: "What is included in your set combos?",
      answer:
        "Our set combos vary and typically include a selection of our premium meats, along with complementary side dishes. Please refer to our menu for the specific items included in each combo.",
    },
    {
      question: "Is parking available?",
      answer:
        "Complimentary valet parking is available for our guests. There are also public parking facilities within a short walking distance of the restaurant.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-serif font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to our most commonly asked questions. If you need more
            information, feel free to contact us.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-start">
                  <HelpCircle
                    size={20}
                    className="text-primary-600 mt-1 mr-3 flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
