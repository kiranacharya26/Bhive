import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white text-black h-[90px] shadow-md">
      <div className="container mx-auto h-full flex items-center justify-between px-6"> {/* Centered content with consistent margins */}
        <div className="flex items-center">
          <img src="/assets/images/image54.png" alt="Left Logo" className="h-8" /> {/* Adjust image height as needed */}
        </div>
        <div className="flex items-center">
          <img src="/assets/images/call.png" alt="Right Logo" className="h-8" /> {/* Adjust image height as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
