'use client';

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Create a context for dark mode
export const DarkModeContext = React.createContext<{
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}>(null!);

export default function Providers({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <Navbar />
      {children}
      <Footer />
    </DarkModeContext.Provider>
  );
}