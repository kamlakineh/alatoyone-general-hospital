import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Phone, 
  Stethoscope, 
  HeartPulse, 
  Microscope, 
  Baby, 
  Activity, 
  ShieldCheck, 
  Users, 
  Clock, 
  ArrowRight,
  Brain,
  Bone,
  Eye,
  Ear,
  Apple,
  Video,
  Truck,
  FlaskConical,
  Syringe,
  ClipboardCheck,
  UserRound,
  Calendar,
  Mail,
  MessageSquare,
  MapPin,
  ChevronRight,
  Plus,
  Minus
} from 'lucide-react';
import { cn } from '../lib/utils';

interface ServiceData {
  id: string;
  title: string;
  icon: React.ReactNode;
  detail: string;
  doctorInfo: string;
  leadDoctor: string;
}

const servicesData: ServiceData[] = [
  {
    id: "emergency-critical",
    title: "Emergency & Critical Care",
    icon: <Activity />,
    detail: "Our Emergency and Critical Care department operates 24/7 to provide immediate medical attention for life-threatening conditions. The department is equipped with modern emergency response technology, advanced life-support systems, and highly trained emergency specialists. Patients suffering from trauma, severe infections, cardiac emergencies, respiratory distress, and other urgent medical conditions receive rapid diagnosis and treatment to stabilize their health. Our emergency team works closely with surgical specialists, radiologists, and intensive care units to ensure fast and effective treatment.",
    leadDoctor: "Dr. Daniel Bekele",
    doctorInfo: "Dr. Daniel Bekele is a board-certified emergency medicine specialist with over 12 years of clinical experience in trauma care and critical patient management. He completed his medical training at Addis Ababa University and has worked in several leading hospitals across Ethiopia. Dr. Bekele specializes in emergency response coordination, advanced trauma life support, and rapid patient stabilization. His team ensures that every patient receives immediate, professional, and compassionate care."
  },
  {
    id: "diagnostic-imaging",
    title: "Advanced Diagnostic Imaging",
    icon: <Microscope />,
    detail: "The Advanced Diagnostic Imaging department provides modern medical imaging services used for accurate diagnosis and treatment planning. The department utilizes advanced technologies such as CT scans, MRI, digital X-ray systems, and ultrasound imaging to detect internal conditions with high precision. These imaging techniques assist physicians in diagnosing a wide range of conditions including fractures, tumors, organ abnormalities, neurological disorders, and cardiovascular diseases. All imaging procedures are performed by experienced specialists using safe and reliable technology.",
    leadDoctor: "Dr. Hana Tesfaye",
    doctorInfo: "Dr. Tesfaye is a board-certified radiologist specializing in diagnostic imaging interpretation. With over 10 years of experience in radiology and medical imaging, she provides accurate diagnostic analysis that supports physicians in making informed treatment decisions."
  },
  {
    id: "internal-medicine",
    title: "Internal Medicine",
    icon: <HeartPulse />,
    detail: "The Internal Medicine department focuses on the diagnosis, treatment, and prevention of adult diseases affecting internal organs. Physicians in this department manage conditions related to the heart, lungs, kidneys, digestive system, and endocrine system. Patients receive comprehensive care for chronic illnesses such as diabetes, hypertension, respiratory diseases, and metabolic disorders. The department emphasizes preventive care and long-term health management to ensure overall patient wellness.",
    leadDoctor: "Dr. Samuel Alemu",
    doctorInfo: "Dr. Alemu is a senior internal medicine physician with more than 15 years of clinical experience treating complex adult medical conditions. His expertise includes chronic disease management, preventive healthcare, and comprehensive patient evaluation."
  },
  {
    id: "pediatrics-adolescent",
    title: "Pediatrics & Adolescent Health",
    icon: <Baby />,
    detail: "The Pediatrics and Adolescent Health department provides specialized healthcare services for infants, children, and teenagers. The department focuses on monitoring growth and development, treating childhood illnesses, and providing preventive healthcare services. Our pediatric specialists ensure that children receive proper medical attention, vaccinations, nutritional guidance, and developmental monitoring to support healthy physical and mental growth throughout childhood and adolescence.",
    leadDoctor: "Dr. Sara Mohammed",
    doctorInfo: "Dr. Mohammed is a pediatrician with extensive experience in child healthcare and developmental medicine. She specializes in treating childhood diseases, monitoring growth milestones, and providing family-centered pediatric care."
  },
  {
    id: "surgical-services",
    title: "Comprehensive Surgical Services",
    icon: <Stethoscope />,
    detail: "The Comprehensive Surgical Services department offers a wide range of surgical procedures for treating medical conditions requiring operative intervention. Our surgical team performs both minor and major surgeries using modern surgical techniques and advanced medical equipment. The department focuses on patient safety, precise surgical procedures, and effective post-operative care to ensure successful recovery and improved health outcomes.",
    leadDoctor: "Dr. Abebe Girma",
    doctorInfo: "Dr. Girma is a highly experienced surgeon specializing in general and abdominal surgery. With more than 14 years of surgical experience, he has performed numerous successful procedures and focuses on safe surgical practices and patient recovery."
  },
  {
    id: "general-consultation",
    title: "General Consultation",
    icon: <UserRound />,
    detail: "General consultation services provide patients with initial medical evaluation and guidance for various health concerns. During a consultation, physicians review symptoms, perform medical examinations, and recommend appropriate treatments or specialist referrals. This service ensures that patients receive proper medical advice and early diagnosis for a wide range of health conditions.",
    leadDoctor: "Dr. Meron Kebede",
    doctorInfo: "Dr. Kebede is a primary care physician specializing in general health assessments and preventive medicine. She provides patient-centered consultations focused on early diagnosis and effective healthcare guidance."
  },
  {
    id: "preventive-care",
    title: "Preventive Care & Health Checkups",
    icon: <ClipboardCheck />,
    detail: "Preventive healthcare services focus on identifying potential health risks before they develop into serious conditions. Our health checkup programs include routine medical examinations, screenings, and lifestyle assessments. These services help patients maintain good health through early detection, risk assessment, and personalized health recommendations.",
    leadDoctor: "Dr. Yohannes Desta",
    doctorInfo: "Dr. Desta specializes in preventive healthcare and public health medicine. His expertise includes disease prevention strategies, wellness programs, and early detection of medical conditions."
  },
  {
    id: "immunization",
    title: "Immunization & Vaccination",
    icon: <Syringe />,
    detail: "The Immunization and Vaccination department provides vaccines that protect individuals from infectious diseases. Vaccinations are essential for maintaining personal health and preventing the spread of contagious illnesses. The department offers vaccines for children, adults, and travelers following national and international vaccination guidelines.",
    leadDoctor: "Dr. Helen Tesema",
    doctorInfo: "Dr. Tesema is a physician specializing in immunization programs and infectious disease prevention. She ensures that vaccination procedures follow strict medical safety protocols."
  },
  {
    id: "laboratory-tests",
    title: "Laboratory Tests & Diagnostics",
    icon: <FlaskConical />,
    detail: "The Laboratory and Diagnostic department performs essential medical tests used to diagnose diseases and monitor health conditions. Tests include blood analysis, urine testing, microbiology studies, and biochemical diagnostics. Accurate laboratory results support physicians in diagnosing medical conditions and determining appropriate treatment plans.",
    leadDoctor: "Dr. Mekonnen Tadesse",
    doctorInfo: "Dr. Tadesse is a clinical pathologist specializing in laboratory diagnostics and medical testing. His work ensures precise laboratory analysis and reliable diagnostic results."
  },
  {
    id: "emergency-care",
    title: "Emergency Care",
    icon: <Phone />,
    detail: "Emergency Care services focus on immediate medical treatment for urgent health conditions such as accidents, injuries, sudden illness, and severe pain. Patients receive prompt evaluation and stabilization by trained medical staff. The department is designed to provide rapid medical response and ensure patients receive timely treatment during emergencies.",
    leadDoctor: "Dr. Tesfaye Abate",
    doctorInfo: "Dr. Abate specializes in urgent medical care and trauma management. His experience includes emergency patient stabilization and rapid medical intervention."
  },
  {
    id: "neurology",
    title: "Neurology",
    icon: <Brain />,
    detail: "The Neurology department specializes in diagnosing and treating disorders of the brain, spinal cord, and nervous system. Conditions treated include epilepsy, stroke, migraines, nerve damage, and neurological disorders. Advanced diagnostic tools are used to identify neurological conditions and provide effective treatment plans.",
    leadDoctor: "Dr. Dawit Kebede",
    doctorInfo: "Dr. Kebede is a neurologist with extensive experience treating neurological disorders and brain-related conditions."
  },
  {
    id: "cardiology",
    title: "Cardiology",
    icon: <HeartPulse />,
    detail: "The Cardiology department provides specialized care for heart and cardiovascular diseases. Services include heart disease diagnosis, cardiac monitoring, and treatment for conditions such as hypertension, heart failure, and coronary artery disease. The department focuses on maintaining heart health and preventing cardiovascular complications.",
    leadDoctor: "Dr. Fitsum Haile",
    doctorInfo: "Dr. Haile is a heart specialist with over a decade of experience diagnosing and treating cardiovascular diseases."
  },
  {
    id: "orthopedics",
    title: "Orthopedics",
    icon: <Bone />,
    detail: "The Orthopedics department treats conditions affecting bones, joints, muscles, and ligaments. Services include fracture treatment, joint care, sports injury management, and rehabilitation. Patients receive specialized care for mobility and musculoskeletal health.",
    leadDoctor: "Dr. Girma Fekadu",
    doctorInfo: "Dr. Fekadu specializes in orthopedic surgery and musculoskeletal injury treatment."
  },
  {
    id: "pediatric-care-2",
    title: "Pediatric Care",
    icon: <Baby />,
    detail: "Pediatric Care focuses on providing medical services specifically for children. The department addresses childhood illnesses, developmental concerns, and routine pediatric health monitoring.",
    leadDoctor: "Dr. Ruth Getachew",
    doctorInfo: "Dr. Ruth Getachew is a dedicated pediatrician focused on the holistic well-being of children, from infancy through adolescence."
  },
  {
    id: "dermatology",
    title: "Dermatology",
    icon: <ShieldCheck />,
    detail: "Dermatology services diagnose and treat skin conditions including acne, infections, allergic reactions, and chronic skin diseases.",
    leadDoctor: "Dr. Samuel Girma",
    doctorInfo: "Dr. Samuel Girma is a specialist in dermatology with expertise in both medical and cosmetic skin treatments."
  },
  {
    id: "ent",
    title: "ENT",
    icon: <Ear />,
    detail: "ENT services treat conditions affecting the ear, nose, throat, and related structures including infections, hearing problems, and sinus conditions.",
    leadDoctor: "Dr. Dawit Tsegaye",
    doctorInfo: "Dr. Dawit Tsegaye is an otolaryngologist specializing in the surgical and medical management of conditions of the head and neck."
  },
  {
    id: "radiology-imaging",
    title: "Radiology & Imaging Services",
    icon: <Microscope />,
    detail: "Radiology services provide imaging examinations used for medical diagnosis such as X-ray, ultrasound, and CT scans.",
    leadDoctor: "Dr. Almaz Worku",
    doctorInfo: "Dr. Almaz Worku is a radiology expert focused on providing high-quality imaging and accurate reports to guide patient care."
  },
  {
    id: "nutrition",
    title: "Nutrition Services",
    icon: <Apple />,
    detail: "Nutrition services provide dietary consultation and personalized nutrition plans to support healthy living and disease management.",
    leadDoctor: "Dr. Bethel Alem",
    doctorInfo: "Dr. Bethel Alem is a clinical nutritionist who helps patients achieve their health goals through evidence-based dietary interventions."
  },
  {
    id: "dental-care",
    title: "Dental Care",
    icon: <Stethoscope />,
    detail: "Dental services focus on oral health including tooth care, gum disease treatment, and preventive dental checkups.",
    leadDoctor: "Dr. Tewodros Bekele",
    doctorInfo: "Dr. Tewodros Bekele is a dentist committed to providing comprehensive oral healthcare and beautiful smiles."
  },
  {
    id: "online-consultation",
    title: "Online Consultation",
    icon: <Video />,
    detail: "Online consultation services allow patients to communicate with doctors remotely through secure digital platforms.",
    leadDoctor: "Dr. Hanna Desta",
    doctorInfo: "Dr. Hanna Desta is a telemedicine specialist who ensures patients can access expert medical advice from the comfort of their homes."
  },
  {
    id: "ambulance-service",
    title: "Ambulance Services",
    icon: <Truck />,
    detail: "Ambulance services provide emergency medical transportation equipped with life-support equipment and trained medical personnel.",
    leadDoctor: "Dr. Tesfaye Birhanu",
    doctorInfo: "Dr. Tesfaye Birhanu coordinates our emergency transport services, ensuring rapid and safe patient transfer during critical situations."
  }
];

const Services = () => {
  const [selectedId, setSelectedId] = useState(servicesData[0].id);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = useMemo(() => {
    return servicesData.filter(s => 
      s.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const selectedService = useMemo(() => {
    return servicesData.find(s => s.id === selectedId) || servicesData[0];
  }, [selectedId]);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 bg-blue-900 pb-2">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl pt-4 ">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Medical Services</h1>
            <p className="text-gray-100 text-lg leading-relaxed">
              Explore our comprehensive healthcare services provided by experienced specialists and advanced medical technology.
            </p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search services..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border border-gray-100 shadow-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar (25%) */}
          <aside className="lg:w-1/4">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden sticky top-28">
              <div className="p-6 border-b border-gray-50">
                <h2 className="text-lg font-bold text-blue-900">All Medical Services</h2>
              </div>
              <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
                {filteredServices.length > 0 ? (
                  filteredServices.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedId(service.id)}
                      className={cn(
                        "w-full text-left px-6 py-4 flex items-center gap-4 transition-all hover:bg-blue-50 group",
                        selectedId === service.id ? "bg-blue-50 border-r-4 border-blue-600" : "bg-transparent"
                      )}
                    >
                      <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                        selectedId === service.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600"
                      )}>
                        {React.cloneElement(service.icon as React.ReactElement, { className: "w-5 h-5" })}
                      </div>
                      <span className={cn(
                        "text-sm font-bold transition-all",
                        selectedId === service.id ? "text-blue-900" : "text-gray-500 group-hover:text-blue-900"
                      )}>
                        {service.title}
                      </span>
                    </button>
                  ))
                ) : (
                  <div className="p-8 text-center text-gray-400 text-sm">
                    No services found matching your search.
                  </div>
                )}
              </div>
            </div>
          </aside>

          {/* Content Area (75%) */}
          <main className="lg:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* 1. Service Information */}
                <div className="bg-white rounded-[1.5rem] p-5 md:p-6 shadow-sm border border-gray-100 max-w-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20">
                      {React.cloneElement(selectedService.icon as React.ReactElement, { className: "w-5 h-5" })}
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-blue-900">{selectedService.title}</h2>
                  </div>
                  
                  <div className="prose prose-blue max-w-none">
                    <h3 className="text-xs font-bold text-blue-900 mb-2 uppercase tracking-wider text-[9px]">Service Description</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {selectedService.detail}
                    </p>
                  </div>
                   <div className="relative z-10 mt-2">
                    <h3 className="text-xs font-bold mb-3 uppercase tracking-wider text-[9px] text-blue-400">Lead Specialist Information</h3>
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                      <div className="w-16 h-16 rounded-lg bg-blue-800 flex items-center justify-center shrink-0 border border-blue-700">
                        <UserRound className="w-8 h-8 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-0.5">Lead Specialist: {selectedService.leadDoctor}</h4>
                        <p className="text-blue-900 text-sm leading-relaxed">
                          {selectedService.doctorInfo}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Appointment Booking */}
                <div className="bg-white rounded-[1.5rem] p-5 md:p-6 shadow-sm border border-gray-100 max-w-2xl">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-blue-900 mb-0.5">Book an Appointment</h3>
                      <p className="text-xs text-gray-500">Fill out the form below to schedule your visit.</p>
                    </div>
                    <div className="bg-red-50 px-3 py-2 rounded-xl border border-red-100 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white">
                        <Phone className="w-3 h-3" />
                      </div>
                      <div>
                        <p className="text-[7px] text-red-600 font-bold uppercase tracking-widest">Emergency?</p>
                        <p className="text-blue-900 font-bold text-xs">8086</p>
                      </div>
                    </div>
                  </div>

                  <form className="grid md:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-blue-900 ml-1">Full Name</label>
                      <input type="text" placeholder="Your Full Name" className="w-full px-4 py-2 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all text-xs" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-blue-900 ml-1">Email Address</label>
                      <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all text-xs" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-blue-900 ml-1">Phone Number</label>
                      <input type="tel" placeholder="Your Phone" className="w-full px-4 py-2 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all text-xs" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-blue-900 ml-1">Select Service</label>
                      <select className="w-full px-4 py-2 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-600 outline-none appearance-none transition-all cursor-pointer text-xs" defaultValue={selectedService.title}>
                        {servicesData.map(s => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-blue-900 ml-1">Preferred Doctor</label>
                      <input type="text" placeholder={`e.g. ${selectedService.leadDoctor}`} className="w-full px-4 py-2 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all text-xs" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-blue-900 ml-1">Date</label>
                        <input type="date" className="w-full px-4 py-2 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all text-xs" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-blue-900 ml-1">Time</label>
                        <input type="time" className="w-full px-4 py-2 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all text-xs" />
                      </div>
                    </div>
                    <div className="md:col-span-2 space-y-1">
                      <label className="text-[10px] font-bold text-blue-900 ml-1">Message</label>
                      <textarea rows={2} placeholder="Briefly describe your symptoms" className="w-full px-4 py-2 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none text-xs" />
                    </div>
                    <div className="md:col-span-2 pt-1">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold text-xs transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2 group">
                        Book Appointment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d1d5db;
        }
      `}} />
    </div>
  );
};

export default Services;
