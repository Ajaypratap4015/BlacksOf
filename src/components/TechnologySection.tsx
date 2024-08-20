import React from 'react';
import smartlights from '../assets/smart_lights.png';

const TechnologySection: React.FC = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-blue-700 mb-2">Products</h2>
          <h3 className="text-4xl font-bold">
            Cutting-edge hardware, offerings helping cities optimize resources and achieve smart development goals
          </h3>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-8">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Centralized Control & Monitoring System</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg">NEMA-Mounted VOLC 1160</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg">Retrofit Street Light Controller VOLC 2160</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg">Retrofit Street Light Controller VOLC 2180</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg">Retrofit Street Light Controller VOLC 4180</button>
        </div>

        {/* Content Display */}
        <div className="flex space-x-8">
          {/* Image */}
          <div className="w-1/2">
            <img
              src={smartlights}
              alt="Street Lights"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="w-1/2">
            <p className="text-sm text-gray-500 mb-4">Products 1/5</p>
            <h4 className="text-2xl font-semibold mb-4">Centralized Control & Monitoring System</h4>
            <p className="text-lg text-gray-700 mb-6">
              Designed indigenously for street lighting projects, the CCMS offers a complete feeder panel for a group of 30-50 street lights.
            </p>
            <a href="#" className="inline-flex items-center text-blue-500 font-semibold">
              Know More
              <span className="ml-2 text-blue-500">&#10142;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
