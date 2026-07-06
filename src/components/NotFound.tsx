import React from "react";

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center min-h-[60vh] text-center px-6 py-20">
    <h1 className="text-6xl font-bold text-brand-navy mb-4">404</h1>
    <h2 className="text-2xl font-serif font-bold text-neutral-700 mb-6">
      Page Not Found
    </h2>
    <p className="text-neutral-500 max-w-sm mb-8 font-gill">
      The page you are looking for doesn't exist or has been moved.
    </p>
    <button
      onClick={() => (window.location.hash = "")}
      className="bg-brand-orange hover:bg-brand-dark-orange text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md"
    >
      Go Back Home
    </button>
  </div>
);
export default NotFound;
