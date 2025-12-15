import React from 'react';
import Button from './Button';
import { SERVICE_AREA } from '../constants';

interface HeroProps {
  onGetEstimate: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetEstimate }) => {
  return (
    <section id="home" className="relative bg-[#F9F7F2] pt-24 pb-32 flex items-center justify-center overflow-hidden min-h-[60vh] scroll-mt-28">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <span className="inline-block py-1.5 px-4 rounded-full bg-[#F07F63]/10 text-[#F07F63] text-sm font-bold tracking-wider uppercase mb-8">
          Serving {SERVICE_AREA}
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight font-['Playfair_Display']">
          Your Short-Term Rental <br />
          <span className="text-[#F07F63]">Turnover Partner</span>
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Family-owned and detail-oriented. We ensure your Starkville property is spotless and guest-ready every single time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={onGetEstimate} size="lg" className="shadow-xl shadow-[#F07F63]/20 text-lg px-8 py-4">
            Get an Estimate
          </Button>
        </div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F07F63]/5 rounded-full blur-[100px] -z-0 pointer-events-none"></div>
    </section>
  );
};

export default Hero;