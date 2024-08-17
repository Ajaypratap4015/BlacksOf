import React from 'react';

const TechnologySection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-4">
          <img src="/path/to/image.jpg" alt="Smart Streetlight" className="rounded shadow" />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h3 className="text-3xl font-bold">Cutting-edge hardware, offering...</h3>
          <p className="mt-4">Leading-class devices...</p>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
