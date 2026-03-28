import React from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  MessageCircle,
  Headphones
} from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-blue-900 py-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800/50" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-base text-blue-100/80 max-w-2xl leading-relaxed">
            We are here to help. Reach out to us for any medical inquiries, feedback, or emergency assistance.
          </p>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100 flex flex-col items-center text-center group hover:bg-blue-600 hover:text-white transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:bg-white group-hover:text-blue-600 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">Emergency Call</h3>
              <p className="text-xl font-bold mb-1">8086</p>
              <p className="text-[10px] opacity-60">Available 24/7 for urgent care</p>
            </div>

            <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100 flex flex-col items-center text-center group hover:bg-blue-600 hover:text-white transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:bg-white group-hover:text-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">Email Address</h3>
              <p className="text-sm font-bold mb-1">alatyonhospital@gmail.com</p>
              <p className="text-[10px] opacity-60">Send us your inquiries anytime</p>
            </div>

            <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100 flex flex-col items-center text-center group hover:bg-blue-600 hover:text-white transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:bg-white group-hover:text-blue-600 transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">Our Location</h3>
              <p className="text-sm font-bold mb-1">Hawassa, Ethiopia</p>
              <p className="text-[10px] opacity-60">Visit our main hospital facility</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 outline-none focus:ring-2 focus:ring-blue-500 transition-all text-base" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 outline-none focus:ring-2 focus:ring-blue-500 transition-all text-base" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Subject</label>
                  <input type="text" placeholder="How can we help?" className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 outline-none focus:ring-2 focus:ring-blue-500 transition-all text-base" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Message</label>
                  <textarea rows={5} placeholder="Your message here..." className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none text-base"></textarea>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 text-base">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Width Map Section */}
      <section className="h-[500px] px-4 w-full relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d406.11356016730053!2d38.49540676249811!3d7.0321008782273955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2set!4v1774688886143!5m2!1sen!2set" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute bottom-8 left-8 bg-white p-6 rounded-3xl shadow-2xl max-w-xs pointer-events-none border border-gray-100">
          <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4 text-blue-600" /> Alatyon Hospital
          </h4>
          <p className="text-xs text-gray-500 leading-relaxed">Main Road, Hawassa, Ethiopia. Open 24/7 for all medical services.</p>
        </div>
      </section>

      {/* Social Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 p-10 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Follow Our Socials</h3>
              <p className="text-blue-200 text-sm">Stay connected with us on social media for latest updates.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <Facebook />, label: "Facebook" },
                { icon: <Instagram />, label: "Instagram" },
                { icon: <Linkedin />, label: "LinkedIn" },
                { icon: <Youtube />, label: "YouTube" },
                { icon: <MessageCircle />, label: "Telegram" }
              ].map((social, idx) => (
                <a key={idx} href="#" className="w-12 h-12 bg-white/10 hover:bg-blue-600 rounded-2xl flex items-center justify-center transition-all group">
                  {React.cloneElement(social.icon, { className: "w-5 h-5 group-hover:scale-110 transition-transform" })}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
