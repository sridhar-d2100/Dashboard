"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';


const profiles = [
  {
    name: "Portfolio",
    path: "/Sridhar_DashBoard/",
    image: "https://via.placeholder.com/300x200?text=Portfolio",
    description: "Personal and professional projects.",
  },
  {
    name: "Dashboard",
    path: "/DashBoard_list",
    image: "https://via.placeholder.com/300x200?text=Dashboard",
    description: "Monitor metrics and insights in real time.",
  },
  {
    name: "Analytics",
    path: "/analytics",
    image: "https://via.placeholder.com/300x200?text=Analytics",
    description: "Gain insights into performance and trends.",
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 10);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="animate-bounce flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-24 w-24 text-gray-300"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 0v4m0-4h4m-4 0H8"
            />
          </svg>
          <p className="mt-4 text-lg text-gray-300">Launching...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center px-6 py-12"
      style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/633959.jpg')",
      }}
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-12 text-center">
  Hello, I&apos;m Sridhar <br />
</h1>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
        {profiles.map((profile) => (
          <Link key={profile.name} href={profile.path} legacyBehavior>
            <a className="group relative block bg-white bg-opacity-30 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <div className="relative w-full h-52">
                <img
                  src={profile.image}
                  alt={profile.name}
                
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition duration-300"
                />
              </div>
              {/* Dark overlay for better contrast */}
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition duration-300"></div>
              <div className="relative p-5 text-center">
                <h2 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition duration-200">
                  {profile.name}
                </h2>
                <p className="text-gray-300 mt-2">{profile.description}</p>
              </div>
              <div className="absolute bottom-3 right-3 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                  />
                </svg>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
