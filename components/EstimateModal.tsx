import React, { useState } from 'react';
import Button from './Button';
import { EMAIL } from '../constants'; 

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EstimateModal: React.FC<EstimateModalProps> = ({ isOpen, onClose }) => {
  // NOTE: 'submitted' state and handleSubmit are removed for this diagnostic test.
  // The form will now perform a standard HTML POST, which will cause a page refresh
  // but should reliably register the form in Netlify's Forms tab.

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-[#2D3748] bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose}></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
          
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <h3 className="text-2xl leading-6 font-bold text-slate-900 font-['Playfair_Display']" id="modal-title">
                  Get a Free Estimate
                </h3>
                
                <div className="mt-4">
                    <p className="text-sm text-slate-500 mb-6">
                      Tell us a bit about your property, and we'll send the request directly to our team.
                    </p>
                    {/* The form now relies on standard HTML POST and Netlify's redirect */}
                    <form 
                        name="estimate-request" 
                        method="POST" 
                        className="space-y-4"
                    >
                        {/* CRITICAL: Netlify requires this hidden field to link the dynamic form to the static definition */}
                        <input type="hidden" name="form-name" value="estimate-request" /> 

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                            <input name="name" type="text" id="name" required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-[#F07F63] focus:ring-[#F07F63] sm:text-sm border p-2" placeholder="Jane Doe" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                            <input name="email" type="email" id="email" required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-[#F07F63] focus:ring-[#F07F63] sm:text-sm border p-2" placeholder="jane@example.com" />
                        </div>
                        <div>
                            <label htmlFor="serviceType" className="block text-sm font-medium text-slate-700">Service Type</label>
                            <select name="serviceType" id="serviceType" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-[#F07F63] focus:ring-[#F07F63] sm:text-sm border p-2">
                                <option>Short-Term Rental Turnover</option>
                                <option>Same-Day Turnover</option>
                                <option>Deep Clean</option>
                                <option>Residential Standard Clean</option>
                                <option>Move-In / Move-Out</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                              <div>
                                  <label htmlFor="bedrooms" className="block text-sm font-medium text-slate-700">Bedrooms</label>
                                  <select name="bedrooms" id="bedrooms" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-[#F07F63] focus:ring-[#F07F63] sm:text-sm border p-2">
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5+</option>
                                  </select>
                              </div>
                              <div>
                                  <label htmlFor="bathrooms" className="block text-sm font-medium text-slate-700">Bathrooms</label>
                                  <select name="bathrooms" id="bathrooms" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-[#F07F63] focus:ring-[#F07F63] sm:text-sm border p-2">
                                      <option>1</option>
                                      <option>1.5</option>
                                      <option>2</option>
                                      <option>2.5</option>
                                      <option>3+</option>
                                  </select>
                              </div>
                        </div>
                        <div>
                            <label htmlFor="details" className="block text-sm font-medium text-slate-700">Property Details / Address</label>
                            <textarea name="details" id="details" rows={3} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-[#F07F63] focus:ring-[#F07F63] sm:text-sm border p-2" placeholder="123 Main St, Starkville..."></textarea>
                        </div>
                        
                        <div className="mt-5 sm:mt-6 flex gap-3">
                            <Button type="submit" className="w-full">
                                Send Estimate Request
                            </Button>
                            <Button type="button" variant="outline" className="w-full" onClick={onClose}> 
                                Cancel
                            </Button>
                        </div>
                    </form>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstimateModal;
