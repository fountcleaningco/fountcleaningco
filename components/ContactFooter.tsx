import React from 'react';
import { COMPANY_NAME, PHONE_NUMBER, EMAIL, NAV_LINKS } from '../constants';
import Button from './Button';

interface ContactFooterProps {
    onGetEstimate: () => void;
}

const ContactFooter: React.FC<ContactFooterProps> = ({ onGetEstimate }) => {
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer id="contact" className="bg-[#2D3748] text-slate-300 border-t-8 border-[#F07F63] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Contact Us */}
          <div>
            <h4 className="text-white font-['Playfair_Display'] text-2xl font-bold mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-center">
                 <div className="w-10 h-10 rounded-full bg-[#F07F63]/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-[#F07F63]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                 </div>
                 <span className="text-white text-lg font-medium">{PHONE_NUMBER}</span>
              </li>
              <li className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#F07F63]/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-[#F07F63]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href={`mailto:${EMAIL}`} className="hover:text-[#F07F63] transition-colors break-all text-lg">{EMAIL}</a>
              </li>
            </ul>
          </div>

           {/* Quick Links */}
          <div>
            <h4 className="text-white font-['Playfair_Display'] text-2xl font-bold mb-8">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleScroll(e, link.href)}
                    className="hover:text-[#F07F63] transition-colors flex items-center cursor-pointer"
                  >
                    <span className="mr-2 text-[#F07F63]">&rsaquo;</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-[#1A202C] p-8 rounded-xl border border-slate-700">
             <h4 className="text-white font-['Playfair_Display'] text-xl font-bold mb-4">Ready for a spotless turnover?</h4>
             <p className="text-slate-400 mb-6 text-sm">
               Get a free estimate today and experience the Fount Cleaning Co. difference.
             </p>
             <Button onClick={onGetEstimate} className="w-full">
               Get an Estimate
             </Button>
          </div>

        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <div className="flex flex-col items-center md:items-start">
             <p className="font-bold text-slate-300 mb-1">{COMPANY_NAME}</p>
             <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <p>Powered by <span className="text-[#F07F63]">Fount Cleaning Co.</span></p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;