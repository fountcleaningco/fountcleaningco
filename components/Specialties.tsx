import React from 'react';
import { SPECIALTIES } from '../constants';

const Specialties: React.FC = () => {
  return (
    <section id="specialties" className="py-24 bg-white relative scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Specialties</h2>
          <div className="h-1.5 w-24 bg-[#F07F63] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {SPECIALTIES.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#F9F7F2] rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-[#EBE5DA] group"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 text-[#F07F63] shadow-sm group-hover:bg-[#F07F63] group-hover:text-white transition-colors duration-300">
                {index === 0 && (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                )}
                {index === 1 && (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {index === 2 && (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-['Playfair_Display']">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;