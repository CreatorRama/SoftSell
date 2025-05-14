import Link from 'next/link';
import { FiFacebook, FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-blue-500 rounded-md mr-2"></div>
              <span className="text-xl font-bold">SoftSell</span>
            </div>
            <p className="text-gray-400">
              Helping businesses recover value from unused software licenses since 2023.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="#how-it-works" className="text-gray-400 hover:text-white">How It Works</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white">Get a Quote</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>hello@softsell.example</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Software Ave, Tech City</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <FiFacebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <FiTwitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <FiLinkedin size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <FiGithub size={20} />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SoftSell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;