import React from 'react';
import Footerimage from '../assets/Footer.png';
import logo from '../assets/smart lights_logo.svg';

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-cover bg-center text-white py-40"  // Increased padding for a bigger footer
      style={{ backgroundImage: `url(${Footerimage})` }}
    >
      <div className="container mx-auto flex flex-col items-start px-20">  
        <div className="flex items-center justify-between w-full mb-8">  
          {/* Smart Lights Logo with text */}
          <img src={logo} alt="Smart Lights Logo" className="h-200 w-200" />
          {/* Navigation Links */}
          <div className="flex space-x-12 text-lg">  
            <a href="#" className="text-white hover:text-gray-400">Product</a>
            <a href="#" className="text-white hover:text-gray-400">Software Services</a>
            <a href="#" className="text-white hover:text-gray-400">Follow Us</a>
          </div>
        </div>
        {/* Policies */}
        <div className="flex space-x-6 text-base"> 
          <a href="#" className="text-blue-300 hover:text-blue-400">Privacy Policy</a>
          <a href="#" className="text-blue-300 hover:text-blue-400">Terms & Conditions</a>
          <a href="#" className="text-blue-300 hover:text-blue-400">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
