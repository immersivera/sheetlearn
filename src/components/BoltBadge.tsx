import React from 'react';

export const BoltBadge: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://bolt.new"
        target="_blank"
        rel="noopener noreferrer"
        className="group block transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
        aria-label="Powered by Bolt.new"
      >
        <div className="relative">
          {/* Badge Container */}
          <div className="bg-black rounded-full p-1 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="/black_circle_360x360.png"
              alt="Powered by Bolt"
              className="w-12 h-12 rounded-full"
            />
          </div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
              Powered by Bolt.new
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};