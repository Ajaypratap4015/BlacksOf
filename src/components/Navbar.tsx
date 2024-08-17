import React from 'react';
import logo from '../assets/smart lights_logo.svg'; // Adjust the path if necessary

const Navbar: React.FC = () => {
  return (
    <nav className="bg-transparent absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Large Logo Only */}
        <img src={logo} alt="Smart Lights Logo" className="h-200 w-200" />
        <div className="space-x-4">
          <button className="text-white">Home</button>
          <button className="text-white">Products</button>
          <button className="text-white">Software Services</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
