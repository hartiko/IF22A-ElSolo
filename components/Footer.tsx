import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between">
        <div>&copy; 2025 ShoeStore. All rights reserved.</div>
        <div className="space-x-4">
          <a href="#" className="hover:text-yellow-500">Terms & Conditions</a>
          <a href="#" className="hover:text-yellow-500">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
