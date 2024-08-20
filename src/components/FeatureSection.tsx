
import streetLightController from '../assets/street_light_controler.png';
import gateway from '../assets/gateway_png.png';
import cloudManagement from '../assets/cloud_based management.png';
import users from '../assets/users_png.png';
import evaluation from '../assets/evaluation_png.png';

const FeatureSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        {/* Ecosystem label */}
        <div className="mb-100 flex justify-start">
          <div className="px-20 py-5 bg-blue-500 rounded-full text-white font-medium text-xl">
            Ecosystem
          </div>
        </div>

        {/* Main heading */}
        <h2 className="text-3xl font-bold text-center mb-12">How does a smart street light ecosystem work?</h2>

        <div className="grid grid-cols-3 gap-8 items-center">
          {/* Top row */}
          <div className="col-span-1 text-center">
            <img src={streetLightController} alt="Street Light Controller" className="mx-auto mb-4" />
            <p className="font-semibold">Street Light Controller</p>
            <p className="text-sm">Activates/deactivates in response to motion/light sensing and controls the brightness of the street lamp.</p>
          </div>

          <div className="col-span-1 text-center">
            <img src={gateway} alt="Gateway" className="mx-auto mb-4" />
            <p className="font-semibold">Gateway</p>
            <p className="text-sm">Employed for interfacing between a Controller and the Lighting Management Software.</p>
          </div>

          <div className="col-span-1 text-center">
            <img src={cloudManagement} alt="Cloud-based Management System" className="mx-auto mb-4" />
            <p className="font-semibold">Cloud-based Management System</p>
            <p className="text-sm">Collects information from multiple gateways.</p>
          </div>
        </div>

        {/* Dotted Lines */}
        <div className="relative h-32">
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-px bg-gray-400 border-dashed"></div>
          <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-px bg-gray-400 border-dashed"></div>
        </div>

        <div className="grid grid-cols-2 gap-8 items-center">
          {/* Bottom row */}
          <div className="col-span-1 text-center">
            <img src={users} alt="Users" className="mx-auto mb-4" />
            <p className="font-semibold">Users</p>
            <p className="text-sm">Data from the cloud is used to monitor and control street lights by the System Managers.</p>
          </div>

          <div className="col-span-1 text-center">
            <img src={evaluation} alt="Evaluation" className="mx-auto mb-4" />
            <p className="font-semibold">Evaluation</p>
            <p className="text-sm">Gathered insights are used to evaluate the performance of the lighting systems.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
