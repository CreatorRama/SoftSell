'use client';

import { FiArrowRight } from 'react-icons/fi';

interface HeroSectionProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const HeroSection = ({ darkMode, setDarkMode }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Turn Unused Software Licenses Into Cash
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              SoftSell helps businesses recover value from unused software licenses quickly and securely.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium flex items-center transition-colors"
              >
                Sell My Licenses <FiArrowRight className="ml-2" />
              </a>
              <a
                href="#how-it-works"
                className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white bg-opacity-20 rounded-xl p-8 backdrop-blur-sm">
              <div className="bg-white rounded-lg shadow-lg p-6 text-gray-800">
                <h3 className="font-bold text-lg mb-2">Get an Instant Estimate</h3>
                <p className="mb-4">Enter your license details to see how much you could earn.</p>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">Software Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="e.g., Adobe Creative Cloud"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">License Type</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                      <option>Select license type</option>
                      <option>Perpetual</option>
                      <option>Subscription</option>
                    </select>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Estimate Value
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white dark:bg-gray-900"></div>
    </section>
  );
};

export default HeroSection;