import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import About from './components/About';
import FAQ from './components/FAQ';
import ContactFooter from './components/ContactFooter';
import EstimateModal from './components/EstimateModal';
// The import for ChatWidget is now deleted.

function App() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);

  const handleOpenEstimate = () => {
    setIsEstimateModalOpen(true);
  };

  const handleCloseEstimate = () => {
    setIsEstimateModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      <Header onGetEstimate={handleOpenEstimate} />
      
      <main className="flex-grow">
        <Hero onGetEstimate={handleOpenEstimate} />
        <Specialties />
        <About />
        <FAQ />
      </main>

      <ContactFooter onGetEstimate={handleOpenEstimate} />
      
      <EstimateModal 
        isOpen={isEstimateModalOpen} 
        onClose={handleCloseEstimate} 
      />
      {/* The <ChatWidget /> tag is now deleted. */}
    </div>
  );
}

export default App;
