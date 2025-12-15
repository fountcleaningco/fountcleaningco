import React from 'react';
import { ABOUT_TEXT } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#F9F7F2] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h4 className="text-[#F07F63] font-bold uppercase tracking-widest text-sm mb-3">About Us</h4>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">Fount Cleaning Co.</h2>
          <div className="prose prose-lg text-slate-600 mx-auto">
             <p className="leading-loose">
               {ABOUT_TEXT}
             </p>
          </div>
          
          <div className="mt-10 border-t border-[#EBE5DA] pt-8">
              <p className="font-['Playfair_Display'] text-xl italic text-slate-800">
                "Exceeding expectations with every clean."
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;