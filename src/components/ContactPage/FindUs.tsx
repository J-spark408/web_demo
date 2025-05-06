import React from "react";
import { motion } from "framer-motion";
import googleMap from "../../assets/images/GabinGoogleMap.png";
import { MapPin } from "lucide-react";

const FindUs: React.FC = () => {
  return (
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
            <h2 className="text-3xl font-serif font-bold mb-4">Find Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Located in the heart of the Los Angeles Korea Town, we're easily
              accessible by public transportation and offer valet parking for
              our guests.
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
  );
};

export default FindUs;
