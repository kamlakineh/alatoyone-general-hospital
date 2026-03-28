import React from 'react';
import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const TeamSection = () => {
  const doctors = [
    { name: "Dr. Ricad Santoso", role: "Internal Medicine", image: "../image/imaged2.jpg" },
    { name: "Dr. Indra Miracle", role: "Internal Medicine", image: "../image/imaged3.jpg" },
    { name: "Dr. Wendy Yonas", role: "Internal Medicine", image: "../image/imaged4.jpg" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 ">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-3 block">DOCTOR & STAFF</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Expert Doctor & Staff Team</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-xl transition-all"
            >
              <div className="aspect-[1/1] overflow-hidden relative">
                <img src={doc.image} alt={doc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-5 text-center">
                <h4 className="text-lg font-bold text-blue-900 mb-1">{doc.name}</h4>
                <p className="text-xs text-gray-500">{doc.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Doctors = () => {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 pt- sm:px-6 lg:px-8 mb-12 bg-blue-900">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Doctors</h1>
        <p className="text-gray-100 text-lg max-w-2xl">
          Meet our team of highly qualified and experienced medical professionals dedicated to your health and well-being.
        </p>
      </div>
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Team: A Blend of Expertise and Commitment</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed text-xs">
            The Alatyon General Hospital team embodies a powerful mix of experience, compassion, and cutting-edge medical knowledge. We are a unified group of certified specialists and dedicated professionals who collaborate seamlessly.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden shadow-xl">
                <img src={`../image/imaged${i+4}.jpg`} alt="Team member" className="w-full h-[240px] object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex flex-col justify-end p-4 text-white text-left">
                  <h4 className="text-base font-bold">Professional Alatyon</h4>
                  <p className="text-[10px] opacity-80">Certified Specialist</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TeamSection />
    </div>
  );
};

export default Doctors;
