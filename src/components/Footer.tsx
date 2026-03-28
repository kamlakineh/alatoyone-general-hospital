import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartPulse, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin, 
  MapPin, 
  Phone, 
  Mail 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 pt-24 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <HeartPulse className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-black tracking-tighter">Alatyon</span>
            </div>
            <p className="text-blue-100/60 text-sm leading-relaxed">
              Habitant augue molestie felis purus platea mollis mauris lectus cursus. Siverra scelerisque commodo sem nisl sed vitae in neque volutpat.
            </p>
            <div className="space-y-4">
              <h5 className="font-bold text-white">Contact Us</h5>
              <div className="flex items-start gap-3 text-sm text-blue-100/60">
                <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                <p>Hawassa. welamel</p>
              </div>
              <div className="flex items-center gap-3 text-sm text-blue-100/60">
                <Phone className="w-4 h-4 text-blue-400" />
                <div>
                  <p className="text-[10px] uppercase font-bold">For Emergency Call</p>
                  <p className="text-white font-bold">8086</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Our Services</h4>
            <ul className="space-y-4 text-sm text-blue-100/60 font-medium">
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Primary & Preventive Care</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Dental & Oral Health</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Virtual & Remote Care</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Rehabilitation & Movement</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Women's Health</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Diagnostics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm text-blue-100/60 font-medium">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about-us" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Our Services</Link></li>
              <li><Link to="/about-us" className="hover:text-blue-400 transition-colors">Our Team</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Appointments</Link></li>
              <li><Link to="/news" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-blue-100/60 text-sm mb-6">Stay updated with our latest health news and tips.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/10 border border-white/20 rounded-full py-3 px-5 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-blue-500 transition-all text-xs"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-blue-600 hover:bg-blue-500 text-white px-4 rounded-full font-bold transition-all text-[10px]">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-blue-100/40">
          <p>Hospital & Medical Clinic "Alatyon" © 2025. All rights reserved</p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, idx) => (
              <a key={idx} href="#" className="hover:text-blue-400 transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
