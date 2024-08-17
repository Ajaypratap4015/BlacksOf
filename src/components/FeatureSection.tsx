import React from 'react';

// Importing images from the assets folder
import streetLightController from '../assets/street_light_controler.png';
import gateway from '../assets/gateway_png.png';
import cloudManagement from '../assets/cloud_based management.png';
import users from '../assets/users_png.png';
import evaluation from '../assets/evaluation_png.png';

const FeatureSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto relative">
        <h2 className="text-3xl font-bold text-center mb-12">How does a smart street light ecosystem work?</h2>

        {/* Street Light Controller */}
        <div className="absolute left-0 top-1/4 w-64 p-4 bg-gray-100 rounded shadow text-center">
          <img src={streetLightController} alt="Street Light Controller" className="mx-auto mb-4" />
          <p className="font-semibold">Street Light Controller</p>
          <p>Activates/deactivates in response to motion/light sensing and controls the brightness of the street lamp.</p>
        </div>
        
        {/* Gateway */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-1/4 w-64 p-4 bg-gray-100 rounded shadow text-center">
          <img src={gateway} alt="Gateway" className="mx-auto mb-4" />
          <p className="font-semibold">Gateway</p>
          <p>Employed for interfacing between a Controller and the Lighting Management Software.</p>
        </div>
        
        {/* Cloud-based Management System */}
        <div className="absolute right-0 top-1/4 w-64 p-4 bg-gray-100 rounded shadow text-center">
          <img src={cloudManagement} alt="Cloud-based Management System" className="mx-auto mb-4" />
          <p className="font-semibold">Cloud-based Management System</p>
          <p>Collects information from multiple gateways.</p>
        </div>

        {/* Users */}
        <div className="absolute left-1/4 bottom-0 w-64 p-4 bg-gray-100 rounded shadow text-center">
          <img src={users} alt="Users" className="mx-auto mb-4" />
          <p className="font-semibold">Users</p>
          <p>Data from the cloud is used to monitor and control street lights by the System Managers.</p>
        </div>

        {/* Evaluation */}
        <div className="absolute right-1/4 bottom-0 w-64 p-4 bg-gray-100 rounded shadow text-center">
          <img src={evaluation} alt="Evaluation" className="mx-auto mb-4" />
          <p className="font-semibold">Evaluation</p>
          <p>Gathered insights are used to evaluate the performance of the lighting systems.</p>
        </div>

        {/* Lines connecting the elements */}
        <div className="absolute inset-0">
          {/* Horizontal lines */}
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gray-400"></div>
          <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gray-400"></div>

          {/* Vertical lines */}
          <div className="absolute top-1/4 left-1/2 h-3/4 w-px bg-gray-400"></div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
