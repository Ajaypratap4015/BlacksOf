import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Smart Lights. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-blue-500 mx-2">Privacy</a>
          <a href="#" className="text-blue-500 mx-2">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
