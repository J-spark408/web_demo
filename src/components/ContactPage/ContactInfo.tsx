import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { contactInfo } from "../../data/restaurantInfo";

const ContactInfo: React.FC = () => {
  return (
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
  );
};

export default ContactInfo;
