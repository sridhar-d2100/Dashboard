"use client"
import { useEffect } from 'react';

const CustomSearch = () => {


  useEffect(() => {
    // Load Google CSE script
    const script = document.createElement("script");
    script.src = "https://cse.google.com/cse.js?cx=a1bb213e714ff4ae2"; // Replace with your actual cx
    script.async = true;
    document.body.appendChild(script);

    // Clean up script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto mt-8">
      <div className="relative">
        <input
          type="text"
          id="gsc-i-id1"
          className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Search..."
        />
        <button className="absolute right-0 top-0 mt-2 mr-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
          Search
        </button>
      </div>
      <div className="gcse-searchresults-container mt-4 p-4 border border-gray-200 rounded-lg bg-gray-50 shadow">
        <div className="gcse-searchresults" />
      </div>
    </div>
  );
};

export default CustomSearch;
