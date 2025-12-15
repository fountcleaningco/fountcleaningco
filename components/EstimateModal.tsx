import React, { useState } from 'react';
import Button from './Button';
import { EMAIL } from '../constants'; 

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EstimateModal: React.FC<EstimateModalProps> = ({ isOpen, onClose }) => {
  // RE-ENABLING STATE FOR AJAX
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  // RE-ENABLING AJAX HANDLER
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // ATOMIC ENCODING (Starts with form-name from the hidden field)
    let encoded = `form-name=${encodeURIComponent(form.getAttribute('name') || '')}`;

    // Append all other form data fields
    for (const [key, value] of formData.entries()) {
        // Skip the _next field as it's not needed for the body, only for HTML POST.
        // We also rely on the form's name attribute, so we don't need the hidden form-name field here.
        if (key !== '_next' && key !== 'form-name') {
            encoded += `&${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
        }
    }

    try {
      // POST to the root path with required headers
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encoded
      });

      if (response.ok) {
        // SUCCESS: Show the modal success message
        setSubmitted(true);
      } else {
        // FAILURE: Show the alert
        alert('Form submission failed. Please ensure all fields are valid and try again. If the problem persists, please email us directly.');
        console.error('Netlify response was not OK:', response.statusText);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert('An unexpected error occurred during submission.');
    }
  };

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
                  {submitted ? 'Request Received!' : 'Get a Free Estimate'}
                </h3>
                
                {!submitted ? (
                  <div className="mt-4">
                    <p className="text-sm text-slate-500 mb-6">
                      Tell us a bit about your property, and we'll send the request directly to our team.
                    </p>
                    {/* FINAL FORM ATTRIBUTES: name, method, action, and onSubmit */}
                    <form 
                        name="estimate-request" 
                        method="POST" 
                        action="/?success=true" // EXPLICIT ACTION for Netlify
                        onSubmit={handleSubmit} 
                        className="space-y-4"
                    >
                        {/* We are REMOVING the hidden input type="hidden" name="form-name" here
                            and relying on the form name and the encoded body construction for AJAX. 
                        */}

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
                ) : (
                    <div className="mt-4 text-center py-6">
                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                            <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-slate-600 mb-6">
                            Success! Your request has been sent to our team. We will be in touch shortly.
                        </p>
                        <Button onClick={onClose} className="w-full">
                            Close
                        </Button>
                    </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstimateModal;
