// import React from 'react';
// import { motion } from 'framer-motion';
// import { Star } from 'lucide-react';

// const Testimonials: React.FC = () => {
//   const testimonials = [
//     {
//       name: 'Sarah Johnson',
//       avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
//       rating: 5,
//       text: 'Absolutely incredible dining experience! The flavors were extraordinary, and the service was impeccable. Will definitely be coming back soon.',
//       date: 'January 15, 2023'
//     },
//     {
//       name: 'Michael Chen',
//       avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
//       rating: 5,
//       text: 'One of the best restaurants I\'ve visited in years. The chef\'s tasting menu was a journey of flavors I won\'t soon forget. Highly recommended!',
//       date: 'March 8, 2023'
//     },
//     {
//       name: 'Emily Rodriguez',
//       avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
//       rating: 4,
//       text: 'Beautiful atmosphere and exquisite food. The wine pairing suggestions were perfect. A little pricey but worth every penny for a special occasion.',
//       date: 'November 20, 2023'
//     }
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
//             What Our Guests Say
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Don't just take our word for it. Here's what our guests have to say about their dining experience at Gabin LA.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-white p-8 rounded-lg shadow-md"
//             >
//               <div className="flex items-center mb-4">
//                 <img
//                   src={testimonial.avatar}
//                   alt={testimonial.name}
//                   className="w-12 h-12 rounded-full object-cover mr-4"
//                 />
//                 <div>
//                   <h4 className="font-semibold">{testimonial.name}</h4>
//                   <div className="flex">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         size={16}
//                         className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <p className="mb-3 text-gray-600">"{testimonial.text}"</p>
//               <p className="text-sm text-gray-500">{testimonial.date}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
