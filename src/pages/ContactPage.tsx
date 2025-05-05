import React, { useState } from "react";
import { motion } from "framer-motion";
import { contactInfo, openingHours } from "../data/restaurantInfo";
import googleMap from "../assets/images/GabinGoogleMap.png";
import { MapPin, Phone, Mail, Clock, Send, HelpCircle } from "lucide-react";

const ContactPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would connect to a backend service
    // For now, we'll simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message:
        "Thank you! Your message has been received. We will contact you as soon as possible.",
    });

    // Reset form after successful submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

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
    <div>
      {/* Hero Section */}
      <div
        className="relative h-[50vh] min-h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://nashvillelifestyles.com/downloads/29118/download/Babo%20Nashville%20Lifestyles-4.jpg?cb=f77f8e30ac0ceb5b83d6d7a9c87f74e7&w=1500&h=')",
        }}
      >
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              call to reserve a table, ask questions, or simply get in touch.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Find us and Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Find Us */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                  >
                    <h2 className="text-3xl font-serif font-bold mb-4">
                      Find Us
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Located in the heart of the Los Angeles Korea Town, we're
                      easily accessible by public transportation and offer valet
                      parking for our guests.
                    </p>
                  </motion.div>

                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <div className="aspect-w-16 aspect-h-9 h-[400px] bg-gray-200 relative">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${googleMap})`,
                        }}
                      >
                        <div className="flex justify-center items-center h-full">
                          <div>
                            <h3 className="font-bold text-lg mb-2 flex justify-center items-center">
                              Gabin LA
                            </h3>
                            <a
                              href="https://www.google.com/maps/place/400+S+Western+Ave+Unit+104,+Los+Angeles,+CA+90020/@34.0670509,-118.3111915,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2b89a29ee2379:0xafe90616d5475be6!8m2!3d34.0670509!4d-118.3086166!16s%2Fg%2F11n09cp6ry?entry=ttu&g_ep=EgoyMDI1MDQyOS4wIKXMDSoASAFQAw%3D%3D"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-primary-600 text-white py-2 px-4 rounded-md font-medium hover:bg-primary-700 transition-colors inline-flex items-center"
                            >
                              <MapPin size={16} className="mr-2" />
                              Get Directions
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-serif font-bold mb-6">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <MapPin size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Our Location</h3>
                    <p className="text-gray-600">
                      {contactInfo.address.street}
                      <br />
                      {contactInfo.address.city}, {contactInfo.address.state}{" "}
                      {contactInfo.address.zipCode}
                      <br />
                      {contactInfo.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Phone size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Phone</h3>
                    <p className="text-gray-600 mb-1">
                      Reservations:{" "}
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="text-primary-600 hover:underline"
                      >
                        {contactInfo.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Mail size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Email</h3>
                    <p className="text-gray-600 mb-1">
                      General Inquiries:{" "}
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-primary-600 hover:underline"
                      >
                        {contactInfo.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Clock size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Hours</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>Monday - Thursday: 11:30 AM - 10:00 PM</p>
                      <p>Friday - Saturday: 11:30 AM - 11:00 PM</p>
                      <p>Sunday: 10:30 AM - 9:00 PM</p>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Kitchen closes 1 hour before closing time
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Find answers to our most commonly asked questions. If you need
              more information, feel free to contact us.
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
                      <h3 className="text-lg font-medium mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Message Us Form */}
      <section className="py-16 bg-primary-950 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-serif font-bold mb-4">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Have a question or comment? We'd love to hear from you.
              </p>
            </motion.div>
            {formStatus?.submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 mb-6 rounded-md ${
                  formStatus.success
                    ? "bg-green-50 text-green-800"
                    : "bg-red-50 text-red-800"
                }`}
              >
                <p>{formStatus.message}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="johndoe@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-white text-primary-900 py-3 px-8 rounded-md font-medium hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
