import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Users, Award, HeartPulse, ShieldCheck, Activity } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="pt-20">
      {/* Breadcrumb / Header */}
      <section className="bg-blue-900 py-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800/50" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-blue-900 mb-4 uppercase tracking-tight">Vision</h2>
              <p className="text-base text-gray-600 leading-relaxed mb-8 italic border-l-4 border-blue-600 pl-4">
                "In 2030 to be top 10 a model of comprehensive integrated system – driven and patient – centered health care in Ethiopia."
              </p>
              
              <h2 className="text-2xl font-bold text-blue-900 mb-4 uppercase tracking-tight">Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                To deliver safe – quality, and integrated medical care budded by clinical excellence, innovation and teamwork.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Professional Doctors",
                  "Quality Assurance",
                  "Painless Procedure"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-blue-900 font-bold">
                    <CheckCircle2 className="text-blue-600 w-5 h-5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-gray-50">
                <img src="../image/imageh9.jpg" alt="Alatyon Building" className="w-full" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-blue-600 p-6 rounded-2xl shadow-xl text-white">
                <p className="text-4xl font-bold mb-1">10</p>
                <p className="text-xs font-bold uppercase tracking-widest">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats & Companies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">Built on 10 Years of Expertise, Focused on Your Future Health!</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-xs">Alatyon General Hospital has proudly delivered exceptional medical care and hope for one full decade.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">4</div>
                <h3 className="text-lg font-bold text-blue-900">Companies</h3>
              </div>
              <ul className="space-y-3 text-sm">
                {[
                  "Alatyon General Hospital",
                  "Alatyon Health Since College",
                  "Alatyon Wholesale",
                  "Alatyon Manufacturing"
                ].map((company, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    {company}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-900 p-8 rounded-2xl shadow-xl text-white flex flex-col justify-center items-center text-center">
              <p className="text-5xl font-bold mb-3">120,000k</p>
              <p className="text-lg font-medium opacity-80 mb-4">Patients Served Reliably</p>
              <p className="text-xs opacity-60 leading-relaxed max-w-xs">
                Alatyon General Hospital is profoundly proud to have served over 120,000 patients reliably. Each one of these individuals is a testament to the experience, quality care, and integrity we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">Get 10% off your first visit</h2>
            <p className="text-gray-600 mb-6 text-xs leading-relaxed max-w-xl mx-auto">
              Welcome aboard! We are offering a special gift to new patients who take the first step towards better health. When you register with us directly through our official website, you will instantly receive 10% off your first service fee.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg shadow-blue-600/20 text-xs">
              Book Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
