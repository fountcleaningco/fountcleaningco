import { FAQItem, ServiceItem } from './types';

export const COMPANY_NAME = "Fount Cleaning Co., LLC";
export const PHONE_NUMBER = "(601) 954-5693";
export const EMAIL = "audrey@fountcleaningco.com";
export const SERVICE_AREA = "Starkville, MS";

export const BRAND_COLORS = {
  primary: "#F07F63", // Lighter Terracotta/Orange
  secondary: "#2D3748",
  background: "#F9F7F2", // Warm beige
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Specialties', href: '#specialties' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const SPECIALTIES: ServiceItem[] = [
  {
    title: "Short-Term Rental Cleanings",
    description: "Effortless turnover, impeccable results! Our short-term rental cleaning service ensures your property is spotless and guest-ready. We handle everything—from deep cleaning kitchens and bathrooms to fresh linens and restocking essentials—so your guests feel welcomed and your reviews shine. Quick, reliable, and detail-oriented, we make turnovers seamless and stress-free."
  },
  {
    title: "Same-Day Turnovers",
    description: "Quick, efficient, and ready for the next guest! Our same-day turnover service ensures your rental is cleaned, refreshed, and prepared for new arrivals in record time. We handle everything—sanitizing spaces, replacing linens, and restocking essentials—so you can keep bookings flowing without a hitch. Fast, thorough, and hassle-free, we make back-to-back stays effortless."
  },
  {
    title: "Family-Owned",
    description: "Trust, quality, and a personal touch! As a family-owned business, we take pride in delivering top-tier cleaning services with care and dedication. Our team treats every property like our own, ensuring attention to detail, reliability, and a warm, welcoming atmosphere. With us, you’re not just a client—you’re part of the family. Experience the difference of service rooted in integrity and commitment!"
  }
];

export const ABOUT_TEXT = `Fount Cleaning Co. is owned and operated by Ed and Audrey Chaney. We are a dedicated residential cleaning company based in Starkville, MS. We specialize in providing high-quality cleaning services for short-term rental properties like Airbnb's and VRBO's. Our team ensures seamless turnovers and spotless stays for a comfortable and welcoming experience. As a family-owned business, we take pride in our work and strive to exceed our clients' expectations with every clean.`;

export const FAQS: FAQItem[] = [
  {
    question: "What are your service areas?",
    answer: "We proudly serve Starkville, MS and the immediately surrounding areas."
  },
  {
    question: "How do you determine pricing for your services?",
    answer: "Pricing is based on the specific needs of your rental property. Contact us for a free estimate!"
  },
  {
    question: "How do I get in contact with you?",
    answer: `You can reach us at ${PHONE_NUMBER}, email us at ${EMAIL}, or fill out the 'Get an Estimate' form on this website.`
  }
];

// System prompt for the AI assistant
export const AI_SYSTEM_INSTRUCTION = `You are the friendly and helpful AI assistant for Fount Cleaning Co., a family-owned cleaning business in Starkville, MS, owned by Ed and Audrey Chaney.
Your goal is to assist potential clients who visit the website.
Base your answers on the following company information:
- Name: ${COMPANY_NAME}
- Location: ${SERVICE_AREA}
- Phone: ${PHONE_NUMBER}
- Email: ${EMAIL}
- Owners: Ed and Audrey Chaney
- Services: Short-term rental cleanings, Same-day turnovers for Airbnbs/VRBOs.
- Key Selling Points: Family-owned, detail-oriented, reliable, seamless turnovers, fresh linens, restocking essentials.
- Pricing: Based on property size and needs (encourage them to get an estimate).

Tone: Warm, professional, trustworthy, and efficient.
If a user asks for a quote, encourage them to click the "Get an Estimate" button or provide the phone number.
`;