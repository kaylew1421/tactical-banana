import React from 'react';

const Profile: React.FC = () => {
  return (
    <section id="profile" className="py-20 sm:py-32 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wider text-yellow-400 mb-6">
              Operative Profile
            </h2>
            <p className="text-gray-300 mb-4">
              Forged in the fires of the produce aisle and hardened on the fields of suburban skirmishes, Agent 'TGI James' Banana is the operative you call when the situation gets... slippery.
            </p>
            <p className="text-gray-300 mb-4">
              Half man, half fruit, all tactical. He brings a unique blend of potassium-powered performance and battlefield prowess. His callsign is simple: when you see yellow, it's time to mellow... or face the consequences.
            </p>
            <p className="font-semibold text-gray-200">
              STATUS: <span className="text-green-400">Ripe and Ready.</span>
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="/images/tb-07.jpg" 
              alt="Agent James posing tactically in a field"
              className="rounded-lg shadow-2xl w-full h-auto object-cover transform md:rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-105"
              loading="lazy"
              width="1170"
              height="1168"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;