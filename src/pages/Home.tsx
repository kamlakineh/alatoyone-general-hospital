import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  ArrowRight, 
  CheckCircle2, 
  Plus, 
  Minus,
  Users,
  Award,
  Activity,
  Stethoscope,
  Heart,
  ShieldCheck,
  Zap,
  Clock,
  ChevronDown,
  Play,
  Linkedin,
  HeartPulse,
  Microscope,
  Brain,
  Baby,
  ChevronRight,
  Apple,
  Smartphone,
  MapPin,
  Star,
  Calendar
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const Hero = () => {
  const images = [
    "../image/image4.jpg",
    "../image/image2.jpg",
    "../image/image3.jpg"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative min-h-[60vh] flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.img 
            key={currentIndex}
            src={images[currentIndex]} 
            alt="Modern Clinic" 
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-blue-900/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/30">
              HOSPITAL & MEDICAL CLINIC
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              We Are A Full Service <br />
              <span className="text-blue-400">Clinic With Modern</span> <br />
              Technology
            </h1>
            
            <div className="flex flex-wrap gap-6 items-center mb-10">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all shadow-xl shadow-blue-600/30 group text-base">
                Book Appointment <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                  <Phone className="text-white w-5 h-5" />
                </div>
                <div className="text-white">
                  <p className="text-blue-200 text-xs uppercase font-bold">Emergency Call</p>
                  <p className="font-bold text-lg">8086</p>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-white rounded-2xl p-5 max-w-[350px] shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-blue-600 w-5 h-5" />
                <h3 className="text-blue-900 font-bold text-base">Opening Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm border-b border-gray-100 pb-2">
                  <span className="text-gray-500">Monday - Friday</span>
                  <span className="text-blue-900 font-bold">8:00am - 5:00pm</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Saturday - Sunday</span>
                  <span className="text-blue-900 font-bold">9:00am - 3:30pm</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative max-w-md mx-auto lg:mx-0">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="../image/imageh9.jpg" alt="Excellent Care" className="w-full h-auto" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl max-w-[280px] border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <HeartPulse className="text-blue-600 w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-blue-900">Quality Healthcare</h4>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                Facilis nullas ac ultrices us praesent fringilla scelerisque.
              </p>
            </div>
          </div>
          <div>
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 block">ABOUT US</span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
              Alatyon General Hospital
            </h2>
            <p className="text-gray-500 mb-10 leading-relaxed text-base">
            At Alatyon General Hospital, our mission is simply to help you achieve and maintain optimal health. Our highly trained team of specialists utilizes cutting-edge diagnostic technology, including the 1.5T MRI and 64-Slice CT-Scan, to ensure timely and accurate diagnosis and treatment. We combine this technical expertise with genuine, compassionate care, ensuring every patient receives a truly personalized and holistic experience. From routine health screenings to critical emergency intervention, we are always prepared to support your health journey 24 hours a day.
            </p>
    
            <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all text-base">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    { title: "Primary & Preventive Care", icon: <HeartPulse />, color: "bg-blue-600" },
    { title: "Dental & Oral Health", icon: <Stethoscope />, color: "bg-blue-900" },
    { title: "Diagnostics", icon: <Microscope />, color: "bg-blue-900" },
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-3 block">SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Our Medical Clinic Service</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm group hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="aspect-[16/10] rounded-xl overflow-hidden mb-6">
                <img src={`../image/imageh${idx+11}.jpg`} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className={cn("inline-flex p-3 rounded-xl text-white mb-4", service.color)}>
                {React.cloneElement(service.icon as React.ReactElement, { className: "w-5 h-5" })}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Nec tristiqu sed rutrum fringilla. It egestas fringilla condimentum purus.
              </p>
              <button className="flex items-center gap-2 text-blue-600 font-bold text-sm group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { num: "01", title: "Clinical Intake & Health History" },
    { num: "02", title: "Multidisciplinary Patient Review" },
    { num: "03", title: "Personalised Treatment" },
    { num: "04", title: "Outcome Evaluation & Preventive" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-3 block">PROCESS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-5">Take Control Of Your Health With These Simple Steps</h2>
            <p className="text-gray-500 leading-relaxed text-base">
              Et phasellus turpis vel fermentum cursus. Cursus mi placerat faucibus sapien purus odio arcu in. Amet dui mauris accumsan elit nec.
            </p>
            <div className="mt-10">
              <img src="../image/imagew.png" alt="Medical Team" className="rounded-3xl shadow-lg max-w-md" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className={cn("p-6 rounded-2xl border border-gray-100", idx === 1 ? "bg-blue-900 text-white" : "bg-white shadow-sm")}>
                <div className={cn("text-3xl font-bold mb-3", idx === 1 ? "text-blue-400" : "text-blue-600")}>{step.num}</div>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className={cn("text-xs leading-relaxed", idx === 1 ? "text-blue-100/70" : "text-gray-500")}>
                  Nec tristiqu sed rutrum fringilla. It egestas fringilla condimentum purus.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const leftItems = [
    { title: "Whole-Body, Whole-Family Care", icon: <Heart /> },
    { title: "Door-To-Door Service Options", icon: <Phone /> },
    { title: "Transparent, Wallet-Friendly Pricing", icon: <ShieldCheck /> },
  ];
  const rightItems = [
    { title: "Hospital-Level Technology, Boutique Feel", icon: <Microscope /> },
    { title: "Rapid Results, Proven Outcomes", icon: <Activity /> },
    { title: "Compassion-Centred Culture", icon: <Heart /> },
  ];

  return (
    <section className="py-20 bg-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-3 block">WHY CHOOSE US</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">The Health Partner You've Been Looking For</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="space-y-10">
            {leftItems.map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start text-right">
                <div className="flex-1">
                  <h4 className="font-bold text-blue-900 mb-2.5 text-lg">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Nec tristiqu sed rutrum fringilla. It egestas fringilla condimentum purus.</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center text-white shrink-0 shadow-lg">
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-5 h-5" })}
                </div>
              </div>
            ))}
          </div>
          <div className="relative max-w-[320px] mx-auto">
            <div className="rounded-full overflow-hidden aspect-square border-[12px] border-white shadow-2xl">
              <img src="../image/imageh.jpg" alt="Doctor" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div className="space-y-10">
            {rightItems.map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center text-white shrink-0 shadow-lg">
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-5 h-5" })}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-blue-900 mb-2.5 text-lg">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Nec tristiqu sed rutrum fringilla. It egestas fringilla condimentum purus.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const EmergencyDepartment = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative max-w-md mx-auto lg:mx-0"
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-600/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl" />
            <img 
              src="../image/imageh6.jpg" 
              alt="Emergency Department" 
              className="relative z-10 w-full h-[400px] object-cover rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-8 left-8 z-20 bg-white p-5 rounded-2xl shadow-2xl flex items-center gap-4 max-w-[280px]">
              <div className="bg-red-100 p-3 rounded-xl">
                <Phone className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Emergency 24/7</p>
                <p className="text-lg font-black text-blue-900">8086</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              <Activity className="w-5 h-5" />
              Emergency Department
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-6 leading-tight">
              Rapid Response and Expert Personnel
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm h-fit shrink-0">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Expert Personnel</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Our department operates 24/7 and is led by highly experienced doctors, nurses, and specialists with specialized training in emergency medicine. Every clinical team is coordinated to deliver a swift and effective response to all life-threatening conditions.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm h-fit shrink-0">
                  <Microscope className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Advanced Technology and Infrastructure</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    The unit is fully equipped with state-of-the-art medical and diagnostic technology. It features dedicated, immediate access to CT-Scan and Ultrasound services within the department, enabling instant and precise diagnosis to commence treatment immediately. All necessary equipment for trauma management and life support is maintained at a constant state of readiness.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm h-fit shrink-0">
                  <HeartPulse className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Integrated Critical Care</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    The Emergency Department is seamlessly connected to the hospital’s advanced Adult and Neonatal Intensive Care Units (ICU/NICU). This integration ensures that patients with complex, critical conditions are smoothly transitioned to specialized critical care, guaranteeing uninterrupted, high-level attention and monitoring.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BookingSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-blue-900 p-8 rounded-2xl text-white">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-3 block">BOOKING</span>
            <h2 className="text-3xl font-bold mb-4">Book Your Care Appointment Now</h2>
            <p className="text-blue-100/70 mb-8 text-sm leading-relaxed">
              Ante auctor a parturient neque mattis odio. Convallis nunc sem eget scelerisque nunc maecenas volutpat scelerisque. Condimentum auctor porta fermentum nulla.
            </p>
            <div className="bg-blue-800 p-6 rounded-xl flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-blue-300 text-[10px] uppercase font-bold">Support</p>
                <p className="text-xl font-bold">24/7 Emergency Call</p>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-blue-800 pb-2">
                <span>Mon - Fri</span>
                <span className="font-bold">08.00 - 18.00 pm</span>
              </div>
              <div className="flex justify-between">
                <span>Sat - Sun</span>
                <span className="font-bold">09.00 - 16.00 pm</span>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Book An Appointment</h3>
            <form className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-blue-900">Name*</label>
                <input type="text" placeholder="Full Name" className="w-full px-5 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-600 outline-none text-sm" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-blue-900">Email*</label>
                <input type="email" placeholder="Email Address" className="w-full px-5 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-600 outline-none text-sm" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-blue-900">Phone*</label>
                <input type="text" placeholder="Phone Number" className="w-full px-5 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-600 outline-none text-sm" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-blue-900">Date*</label>
                <input type="date" className="w-full px-5 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-600 outline-none text-sm" />
              </div>
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-blue-900">Doctor*</label>
                <select className="w-full px-5 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-600 outline-none appearance-none text-sm">
                  <option>Find Doctors</option>
                </select>
              </div>
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-blue-900">Message</label>
                <textarea placeholder="Your Message" rows={3} className="w-full px-5 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-600 outline-none resize-none text-sm" />
              </div>
              <div className="sm:col-span-2">
                <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 text-sm">
                  Send Appointments
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsBar = () => {
  const stats = [
    { icon: <HeartPulse />, label: "Our Service", value: "8,200+" },
    { icon: <Award />, label: "Awards Received", value: "4.9K" },
    { icon: <Clock />, label: "Years Of Experience", value: "15+" },
    { icon: <Stethoscope />, label: "Doctors Specialist", value: "280+" },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center text-white shrink-0 shadow-lg">
                {React.cloneElement(stat.icon as React.ReactElement, { className: "w-5 h-5" })}
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-900">{stat.value}</div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const doctors = [
    { name: "Dr. Ricad Santoso", role: "Internal Medicine", image: "https://i.pravatar.cc/300?u=ricad" },
    { name: "Dr. Indra Miracle", role: "Internal Medicine", image: "https://i.pravatar.cc/300?u=indra" },
    { name: "Dr. Wendy Yonas", role: "Internal Medicine", image: "https://i.pravatar.cc/300?u=wendy" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-900 hover:bg-blue-600 hover:text-white transition-all shadow-lg">
                      <Icon className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-5 text-center">
                <h4 className="text-lg font-bold text-blue-900 mb-1">{doc.name}</h4>
                <p className="text-xs text-gray-500">{doc.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-16">
          <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all text-base">
            See All Doctor
          </button>
        </div>
      </div>
    </section>
  );
};

const SpecialOffersSection = () => {
  const offers = [
    {
      title: "Free Treatment for Cleft Lip and Palate:",
      badge: "$Free",
      description: "We provide entirely free medical, surgical, and supportive care for children and adolescents born with Cleft Lip and Palate. Our commitment is to restore a full smile and a path to a healthier life for your child, removing the financial barrier to this essential surgery.",
      icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Discount on Diabetes Screening:",
      badge: "10%",
      description: "Early detection of diabetes is key to effective management. To help prevent and control the disease, we have introduced reduced pricing on vital diabetes screening and diagnostic tests. Make regular screening a priority to safeguard your well-being.",
      icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Reduced Price for Blood Pressure Check-ups",
      badge: "10%",
      description: "Untreated high blood pressure (hypertension) can lead to serious heart and kidney complications. To encourage proactive health management, we offer discounted rates for blood pressure check-ups. Check now, save later.",
      icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Best prices for all types of services</h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-sm leading-relaxed">
            At Alatyon General Hospital, we believe that <span className="font-bold text-blue-900">high-quality healthcare must be accessible to everyone.</span> That's why we offer specialized discounts and free treatments. Prioritize your health today and take advantage of these special offerings.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, idx) => (
            <div key={idx} className="bg-blue-50/30 p-10 rounded-[2rem] border border-blue-50 flex flex-col items-center text-center group hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-6">
                {offer.icon}
              </div>
              <div className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold mb-8">
                {offer.badge}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-6 px-4">{offer.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                {offer.description}
              </p>
              <button className="flex items-center gap-2 text-blue-900 font-bold text-sm hover:gap-3 transition-all uppercase tracking-wider">
                LEARN MORE <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <button className="bg-blue-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all text-sm uppercase tracking-widest">
            VIEW ALL
          </button>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Selome Mindaye",
      role: "Alatyon, our member one choice!",
      image: "../image/image3.jpg",
      avatar: "https://i.pravatar.cc/150?u=selome"
    },
    {
      name: "Mesfin Hailemariam",
      role: "An amazing and a real community serving hospital. Stands for service not for profit.",
      image: "../image/image4.jpg",
      avatar: "https://i.pravatar.cc/150?u=mesfin"
    },
    {
      name: "Mame Getachew",
      role: "Alatyon general hospital real true genuine Alatyon my first choice",
      image: "https://picsum.photos/seed/testimonial-3/600/800",
      avatar: "https://i.pravatar.cc/150?u=mame"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">What People Say About Us</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Justo nec ultrices dui sapien eget mi proin sed. Sit amet porttitor eget dolor morbi.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden group shadow-lg">
              <img src={t.image} alt={t.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gray-500/50 backdrop-blur-sm flex items-center justify-center text-white">
                  <Facebook className="w-6 h-6 fill-current" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white text-sm font-medium mb-6 line-clamp-3 italic">
                  "{t.role}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="text-white font-bold text-base">{t.name}</h4>
                    <p className="text-blue-200 text-xs">Alatyon, our member</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const BlogSection = () => {
  const posts = [
    { title: "5 Everyday Habits to Keep Your Blood Pressure in Check", date: "Dec 13, 2025", image: "../image/imageh11.jpg" },
    { title: "Mindfulness Techniques to Lower Everyday Stress", date: "Dec 13, 2025", image: "../image/imageh12.jpg"  },
    { title: "Living Well with Type-2 Diabetes Meal Planning Ma...", date: "Dec 13, 2025", image: "../image/imageh11.jpg"  },
    { title: "Flu Season Guide 2025 Vaccines, Myths & Facts", date: "Dec 13, 2025", image: "../image/imageh13.jpg"  },
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-3 block">BLOG & NEWS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Health Insights & Clinic News</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-5 rounded-2xl flex gap-6 group cursor-pointer hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="w-28 h-28 rounded-xl overflow-hidden shrink-0">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-base font-bold text-blue-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">{post.title}</h4>
                <p className="text-xs text-gray-400 mb-4">Lacus pulvinar risus commodo lectus fringilla fames tellus faucibus.</p>
                <button className="flex items-center gap-2 text-blue-600 font-bold text-xs group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseUs />
      <EmergencyDepartment />
      <StatsBar />
      <SpecialOffersSection />
      <TestimonialsSection />
      <BlogSection />
      <BookingSection />
        <div className="py-24 flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="text-2xl font-black text-blue-900 italic tracking-tighter">logoipsum</div>
          ))}
        </div>
    </div>
  );
};

export default Home;
