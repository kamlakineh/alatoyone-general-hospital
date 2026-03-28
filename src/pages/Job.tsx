import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  Mail, 
  Phone, 
  Globe, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Upload, 
  PenTool, 
  CheckCircle2,
  Clock,
  Calendar,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Send
} from 'lucide-react';

const CountdownTimer = ({ targetDate, title }: { targetDate: string, title: string }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="mb-16 last:mb-0">
      <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-8 text-center uppercase tracking-tight">{title}</h3>
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
        {[
          { label: 'Day', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds }
        ].map((item, idx) => (
          <React.Fragment key={idx}>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-5xl font-black text-blue-600 tabular-nums">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">{item.label}</div>
            </div>
            {idx < 3 && (
              <div className="text-2xl md:text-4xl font-black text-blue-200 self-start mt-1">:</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const Job = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    email: '',
    phone: '',
    country: '',
    region: '',
    streetAddress: '',
    educationTitle: '',
    graduationDate: '',
    companyName: '',
    yearsOfExperience: '',
    consent: false
  });

  return (
    <div className="pt-10 bg-white">
      {/* Page Title */}
      <section className="py-12 bg-blue-900 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-black text-white tracking-tighter">Job</h1>
        </div>
      </section>

      {/* Info Image Section */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group max-w-3xl mx-auto">
            <img 
              src="../image/download.png" 
              alt="Medical Services Info" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Countdowns */}
      <section className="py-12 bg-blue-50/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <CountdownTimer title="The end date of the Registration" targetDate="2026-04-30T23:59:59" />
            <div className="h-px bg-blue-100 my-8" />
            <CountdownTimer title="The start date of the exam" targetDate="2026-05-15T09:00:00" />
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-4 lg:px-6">
          <div className="bg-white rounded-3xl shadow-2xl shadow-blue-900/5 border border-gray-100 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-600 text-white p-2 rounded-xl">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-blue-900 tracking-tighter">Alatyon Job-Application</h2>
                <p className="text-gray-500 font-medium text-xs">Join our world-class medical team</p>
              </div>
            </div>
            
            <div className="h-px bg-gray-100 my-8" />

            <form className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                    <User className="w-3 h-3 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-black text-blue-900 tracking-tight">Personal Information</h3>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-[8px] font-black text-blue-900 uppercase tracking-widest">First Name *</label>
                    <input type="text" placeholder="E.g. John" className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-medium text-xs" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[8px] font-black text-blue-900 uppercase tracking-widest">Last Name *</label>
                    <input type="text" placeholder="E.g. Smith" className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-medium text-xs" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[8px] font-black text-blue-900 uppercase tracking-widest">Middle Name *</label>
                    <input type="text" placeholder="E.g. Doe" className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-medium text-xs" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[8px] font-black text-blue-900 uppercase tracking-widest">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400" />
                      <input type="email" placeholder="E.g. john@doe.com" className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-medium text-xs" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[8px] font-black text-blue-900 uppercase tracking-widest">Phone *</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400" />
                      <input type="tel" placeholder="E.g. 0949037682" className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-medium text-xs" />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-[8px] font-black text-blue-900 uppercase tracking-widest">Country *</label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400" />
                      <input type="text" placeholder="E.g. Ethiopia" className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-medium text-xs" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[8px] font-black text-blue-900 uppercase tracking-widest">Region</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400" />
                      <input type="text" placeholder="E.g. Hawassa" className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-medium text-xs" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[8px] font-black text-blue-900 uppercase tracking-widest">Street Address *</label>
                    <input type="text" placeholder="E.g. Addis Ababa" className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-medium text-xs" />
                  </div>
                </div>
              </div>

              {/* Background */}
              <div className="space-y-8">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                    <GraduationCap className="w-3 h-3 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-black text-blue-900 tracking-tight">Background</h3>
                </div>
                
                <div className="space-y-8">
                  {/* Education */}
                  <div className="space-y-3">
                    <h4 className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Education</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[8px] font-black text-blue-900 uppercase tracking-widest">Education Title *</label>
                        <input type="text" placeholder="E.g. HR" className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-medium text-xs" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[8px] font-black text-blue-900 uppercase tracking-widest">Graduation Date *</label>
                        <div className="relative">
                          <input type="date" className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all appearance-none font-medium text-xs" />
                          <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Work Experience */}
                  <div className="space-y-3">
                    <h4 className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Work Experience</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[8px] font-black text-blue-900 uppercase tracking-widest">Company Name *</label>
                        <input type="text" placeholder="E.g. alatyon" className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-medium text-xs" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[8px] font-black text-blue-900 uppercase tracking-widest">Years Of Experience</label>
                        <input type="text" placeholder="E.g. 3 years / 11 Month" className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-medium text-xs" />
                      </div>
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div className="space-y-2">
                    <label className="text-[8px] font-black text-blue-900 uppercase tracking-widest">Resume Upload *</label>
                    <div className="border-2 border-dashed border-gray-200 rounded-2xl p-6 text-center hover:border-blue-600 transition-colors cursor-pointer group bg-gray-50/50">
                      <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm group-hover:scale-110 transition-transform">
                        <Upload className="w-5 h-5 text-blue-600" />
                      </div>
                      <p className="text-gray-500 font-medium text-xs">Drag and Drop (or) <span className="text-blue-600 font-bold">Choose Files</span></p>
                      <p className="text-[8px] text-gray-400 mt-1">Max file size: 10MB (PDF, DOCX)</p>
                    </div>
                  </div>

                  {/* Signature */}
                  <div className="space-y-2">
                    <label className="text-[8px] font-black text-blue-900 uppercase tracking-widest">Signature</label>
                    <div className="border border-gray-200 rounded-2xl p-4 h-32 relative bg-gray-50/50 group">
                      <p className="text-gray-400 text-[10px] font-medium italic">Start signing your signature here</p>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <PenTool className="w-8 h-8 text-blue-100" />
                      </div>
                      <PenTool className="absolute bottom-4 right-4 w-4 h-4 text-gray-300" />
                    </div>
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-2 p-3 bg-blue-50/50 rounded-xl border border-blue-100">
                    <input type="checkbox" id="consent" className="mt-1 w-4 h-4 rounded border-blue-200 text-blue-600 focus:ring-blue-600 transition-all cursor-pointer" />
                    <label htmlFor="consent" className="text-[10px] text-gray-700 font-medium leading-relaxed cursor-pointer">
                      Consent * <br />
                      Yes, I agree with the <a href="#" className="text-blue-600 font-black hover:underline">privacy policy</a> and <a href="#" className="text-blue-600 font-black hover:underline">terms and conditions</a>.
                    </label>
                  </div>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-black text-base shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2 group">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info Section (from PDF Page 7) */}
      <section className="py-16 bg-blue-900 text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black tracking-tighter">About-US</h3>
              <p className="text-blue-100/70 text-xs leading-relaxed">
                We are dedicated to providing the highest quality medical care to our community. Our team of experts is here to support you 24/7.
              </p>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-all">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black tracking-tighter">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-blue-200 uppercase font-bold tracking-widest">Free Call Us</p>
                    <p className="text-base font-black">8086</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-blue-200 uppercase font-bold tracking-widest">Write a Message</p>
                    <p className="text-base font-black">info@alatyon.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black tracking-tighter">Location</h3>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-blue-200 uppercase font-bold tracking-widest">Address</p>
                  <p className="text-base font-black leading-tight">Hawassa, Ethiopia, Welde Amanueal Dubale</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black tracking-tighter">Developer</h3>
              <p className="text-blue-100/70 text-xs">About Developer This Website</p>
              <div className="pt-6 border-t border-white/10">
                <p className="text-[10px] text-blue-300 font-bold uppercase tracking-widest">Copyright © 2026</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-50" />
      </section>
    </div>
  );
};

export default Job;
