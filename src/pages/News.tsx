import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, Tag, ChevronRight, ArrowRight } from 'lucide-react';

const News = () => {
  const posts = [
    {
      id: 1,
      title: "Happy New Day",
      date: "December 13, 2025",
      category: "Uncategorized",
      author: "Bete",
      image: "https://picsum.photos/seed/news-1/800/600",
      excerpt: "Alatyon General Hospital is proud to announce its new initiatives for the upcoming year, focusing on patient-centered care and advanced technology."
    },
    {
      id: 2,
      title: "New Neurologist Joins Our Team",
      date: "December 10, 2025",
      category: "Team",
      author: "Admin",
      image: "https://picsum.photos/seed/news-2/800/600",
      excerpt: "We are excited to welcome Yegeta Teshale, MD, Assistant Professor of Neurology, to our team of specialists."
    },
    {
      id: 3,
      title: "Advanced 64-Slice CT-Scan Now Available",
      date: "November 28, 2025",
      category: "Technology",
      author: "Admin",
      image: "https://picsum.photos/seed/news-3/800/600",
      excerpt: "Our new 64-slice CT scan unit can capture detailed 3D images of the body in seconds, vital for accurate and timely diagnosis."
    },
    {
      id: 4,
      title: "Community Health Awareness Program",
      date: "November 15, 2025",
      category: "Community",
      author: "Admin",
      image: "https://picsum.photos/seed/news-4/800/600",
      excerpt: "Join us for our upcoming health awareness program focusing on preventive care and early detection of chronic diseases."
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-blue-900 py-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800/50" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl font-bold mb-4">News & Updates</h1>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-400 font-bold uppercase tracking-wider mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-blue-600" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3 text-blue-600" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-500 text-base leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <button className="flex items-center gap-2 text-blue-600 font-bold text-xs group/btn">
                    Read More <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
          
          {/* Pagination Placeholder */}
          <div className="mt-12 flex justify-center gap-3">
            <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg shadow-blue-600/20 text-xs">1</button>
            <button className="w-10 h-10 rounded-full bg-white text-blue-900 border border-gray-200 flex items-center justify-center font-bold hover:bg-blue-50 transition-colors text-xs">2</button>
            <button className="w-10 h-10 rounded-full bg-white text-blue-900 border border-gray-200 flex items-center justify-center font-bold hover:bg-blue-50 transition-colors text-xs">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
