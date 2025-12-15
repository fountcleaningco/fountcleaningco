import React, { useState } from 'react';
import { PHONE_NUMBER, NAV_LINKS } from '../constants';
import Button from './Button';

interface HeaderProps {
  onGetEstimate: () => void;
}

const Header: React.FC<HeaderProps> = ({ onGetEstimate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F9F7F2]/95 backdrop-blur-md shadow-sm border-b border-[#EBE5DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Area - Blank */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#home" 
              onClick={(e) => handleScroll(e, '#home')}
              className="flex items-center gap-2 group h-16 w-auto"
            >
              {/* Logo removed as requested */}
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-slate-600 hover:text-[#F07F63] font-medium transition-colors text-sm uppercase tracking-wide cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex flex-col items-end">
                <a href="tel:+16019545693" className="text-slate-900 font-bold hover:text-[#F07F63] transition-colors">
                {PHONE_NUMBER}
                </a>
            </div>
            
            <Button onClick={onGetEstimate} size="md">
              Get an Estimate
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
             <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-500 hover:text-[#F07F63] p-2"
            >
              <span className="sr-only">Open menu</span>
              {/* Hamburger Icon */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#F9F7F2] border-t border-[#EBE5DA] absolute w-full shadow-lg h-screen">
          <div className="pt-2 pb-6 space-y-1 px-4">
             {NAV_LINKS.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-3 py-4 text-xl font-family-serif text-slate-800 hover:text-[#F07F63] border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-8 pt-2 space-y-6 px-3">
               <div className="flex justify-between items-center">
                   <span className="text-slate-500">Call us:</span>
                   <a href="tel:+16019545693" className="font-bold text-slate-900 text-lg">
                    {PHONE_NUMBER}
                  </a>
               </div>
              <div>
                <Button onClick={() => { onGetEstimate(); setIsMenuOpen(false); }} className="w-full py-4 text-lg">
                  Get an Estimate
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;