
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} The Tactical Banana. All Rights Reserved.
        </p>
        <p className="text-sm mt-2">
          No bananas were harmed in the making of this website.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
