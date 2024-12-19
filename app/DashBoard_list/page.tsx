import React from "react";
import Link from "next/link";

interface PanPlate {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string; // New field for dynamic navigation
}

const PanPlateCards: React.FC = () => {
  const panPlates: PanPlate[] = [
    {
      id: 1,
      title: "Sales Dashboard 1",
      description: "Track your sales with detailed insights.",
      image: "https://www.geckoboard.com/uploads/Sales-Activity-Dashboard-Snapshot.png",
      link: "Design", // Navigates to the "sales" page
    },
    {
      id: 2,
      title: "Sales Dashboard 2",
      description: "Visualize your sales overview effectively.",
      image: "https://blog.hubspot.com/hs-fs/hubfs/Sales-Overview-Dashboard.jpg?width=1800&name=Sales-Overview-Dashboard.jpg",
      link: "report", // Navigates to the "report" page
    },
    {
      id: 3,
      title: "Sales Dashboard 3",
      description: "Optimize your sales pipeline.",
      image: "https://blog.hubspot.com/hs-fs/hubfs/Sales-Overview-Dashboard.jpg?width=1800&name=Sales-Overview-Dashboard.jpg",
      link: "any-page", // Navigates to a page named "any-page"
    },
    {
        id: 4,
        title: "Sales Dashboard 2",
        description: "Visualize your sales overview effectively.",
        image: "https://blog.hubspot.com/hs-fs/hubfs/Sales-Overview-Dashboard.jpg?width=1800&name=Sales-Overview-Dashboard.jpg",
        link: "report", // Navigates to the "report" page
      },
      {
        id: 5,
        title: "Sales Dashboard 2",
        description: "Visualize your sales overview effectively.",
        image: "https://blog.hubspot.com/hs-fs/hubfs/Sales-Overview-Dashboard.jpg?width=1800&name=Sales-Overview-Dashboard.jpg",
        link: "report", // Navigates to the "report" page
      },
      {
        id: 6,
        title: "Sales Dashboard 1",
        description: "Track your sales with detailed insights.",
        image: "https://www.geckoboard.com/uploads/Sales-Activity-Dashboard-Snapshot.png",
        link: "Design", // Navigates to the "sales" page
      },
      {
        id: 7,
        title: "Sales Dashboard 1",
        description: "Track your sales with detailed insights.",
        image: "https://www.geckoboard.com/uploads/Sales-Activity-Dashboard-Snapshot.png",
        link: "Design", // Navigates to the "sales" page
      },
  ];

  const visiblePlates = panPlates.slice(0, 10);

  return (
    <div className="bg-gradient-to-b from-blue-100 to-white p-8 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-800 tracking-wide">Dashboard Collections</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visiblePlates.map((plate) => (
          <div
            key={plate.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={plate.image}
              alt={plate.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-700 mb-3">{plate.title}</h2>
              <p className="text-gray-600 mb-4">{plate.description}</p>
              <Link href={`/${plate.link}`}>
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PanPlateCards;
