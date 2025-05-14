'use client';

import { useState } from 'react';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen dark:bg-gray-900 dark:text-white">
        <HeroSection darkMode={darkMode} setDarkMode={setDarkMode} />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
        <ChatWidget />
      </div>
    </main>
  );
}