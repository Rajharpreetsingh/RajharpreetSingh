import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (

    <center>
        <hr/>
    <footer className="bg-gray-100 text-gray-600 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
        
        {/* Left Side: Copyright */}
        <div className="mt-4 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5">
            &copy; {currentYear} RajharpreetSingh. All rights reserved.
          </p>
        </div>

        {/* Right Side: Simple Links */}
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="#" className="text-sm hover:text-gray-900 transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm hover:text-gray-900 transition-colors">Terms of Service</a>
          <a href="#" className="text-sm hover:text-gray-900 transition-colors">Contact</a>
        </div>

      </div>
    </footer>
    </center>

  );
};

export default Footer;
