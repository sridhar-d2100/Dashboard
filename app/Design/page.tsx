// Dashboard.tsx

"use client"

// Dashboard.tsx

import React, { useState, useEffect } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement, // For Doughnut and Pie
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement // For Doughnut and Pie charts
);

// Type definition for Sales Data
type SalesData = {
  pincode: string;
  chemist: string;
  product_name: string;
  sale_qty: number;
  free: number;
  sales: number;
  chemist_total: number;
  pin_total: number;
  stockist: string;
};

const Dashboard: React.FC = () => {
  const [pincodeFilter, setPincodeFilter] = useState<string>("");
  const [productFilter, setProductFilter] = useState<string>("All");
  const [salesData, setSalesData] = useState<SalesData[]>([]);

  useEffect(() => {
    // Fetch data from the API
    async function fetchData() {
      try {
        const response = await fetch("https://fast-api-l0qs.onrender.com/sales");
        if (response.ok) {
          const data = await response.json();
          setSalesData(data);
        } else {
          console.error("Error fetching sales data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    }

    fetchData();
  }, []);

  // Ensure salesData is loaded before filtering
  if (!salesData.length) {
    return <div>Loading...</div>; // Display loading message while data is fetched
  }

  // Filter data based on the pincode and product
  const filteredData = salesData.filter(item =>
    (pincodeFilter ? item.pincode.includes(pincodeFilter) : true) &&
    (productFilter !== "All" ? item.product_name === productFilter : true)
  );

  // Define chart data and options using types
  const barData = {
    labels: filteredData.map(item => item.product_name),
    datasets: [
      {
        label: "Sales",
        data: filteredData.map(item => item.sales),
        backgroundColor: ["#4CAF50", "#2196F3", "#FFC107", "#F44336"],
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Sales by Product" },
    },
  };

  const lineData = {
    labels: filteredData.map(item => item.product_name),
    datasets: [
      {
        label: "Monthly Sales Trend",
        data: filteredData.map(item => item.sales),
        backgroundColor: "#42A5F5",
        borderColor: "#1E88E5",
        borderWidth: 1,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Monthly Sales Trend" },
    },
  };

  const pieData = {
    labels: ["Product A", "Product B", "Product C", "Product D"],
    datasets: [
      {
        label: "Sales Distribution",
        data: [25, 35, 20, 20],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Sales Distribution by Product" },
    },
  };

  const doughnutData = {
    labels: filteredData.map(item => item.product_name),
    datasets: [
      {
        label: "Sales Distribution",
        data: filteredData.map(item => item.sales),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Sales Distribution by Product" },
    },
  };

  return (
    <div className="flex h-screen flex-col">
      {/* Header (Search Bar) */}
      <div className="bg-white shadow p-4 flex-none">
        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="Search by Pincode..."
            value={pincodeFilter}
            onChange={(e) => setPincodeFilter(e.target.value)}
            className="w-1/3 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-4 py-2"
          />
          <select
            value={productFilter}
            onChange={(e) => setProductFilter(e.target.value)}
            className="ml-4 w-1/3 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-4 py-2"
          >
            <option value="All">All Products</option>
        
         
          </select>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-grow">
        {/* Sidebar (Filters) */}
        <div className="w-1/4 bg-gray-100 p-6 shadow-lg flex-none">
          <h2 className="text-xl font-bold mb-6">Filters</h2>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Pincode</label>
            <input
              type="text"
              value={pincodeFilter}
              onChange={(e) => setPincodeFilter(e.target.value)}
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Product</label>
            <select
              value={productFilter}
              onChange={(e) => setProductFilter(e.target.value)}
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="All">All</option>
              <option value="EPO 500 Softgels">EPO 500 Softgels</option>
            </select>
          </div>
          <button
            onClick={() => {
              setPincodeFilter("");
              setProductFilter("All");
            }}
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
          >
            Clear Filters
          </button>
        </div>

        {/* Charts Section */}
        <div className="w-3/4 p-6">
          <h1 className="text-2xl font-bold mb-6">Sales Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {/* <div className="p-4 bg-white rounded-lg shadow-lg">
              <Bar data={barData} options={barOptions} />
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <Line data={lineData} options={lineOptions} />
            </div> */}
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <Pie data={pieData} options={pieOptions} />
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <Doughnut data={doughnutData} options={doughnutOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
