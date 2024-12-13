"use client"
import React, { useState } from "react";
import { Bar, Line, Pie, Doughnut, Scatter, Radar } from "react-chartjs-2";
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
  ArcElement,
  RadialLinearScale, // Add RadialLinearScale here
} from "chart.js";

import csvParser from 'csv-parser';
import fs from 'fs';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale // Register RadialLinearScale
);

const Dashboard: React.FC = () => {
  const [pincodeFilter, setPincodeFilter] = useState("");
  const [productFilter, setProductFilter] = useState("All");

  
  const data = [
    {
      PINCODE: "3201",
      CHEMIST: "NEW HEALTH PHARMACY",
      "PRODUCT NAME": "D-Vitamin 1000 IU",
      "SALE QTY": 10,
      "FREE": 0,
      "SALES": 150.00,
      "CHEMIST TOTAL": null,
      "PIN TOTAL": "CITY CENTRAL",
      "STOCKIST": null
    },
    {
      PINCODE: "3210",
      CHEMIST: "OM SARAVANA PHARMACY *",
      "PRODUCT NAME": "GALA MG1",
      "SALE QTY": 4,
      "FREE": 0,
      "SALES": 250.00,
      "CHEMIST TOTAL": 400.00,
      "PIN TOTAL": "CITY CENTRAL",
      "STOCKIST": "MUTHU"
    },
    {
      PINCODE: "1301",
      CHEMIST: "RAVI MEDICALS (URAPAKKAM)",
      "PRODUCT NAME": "ABDIFER Softgel",
      "SALE QTY": 2,
      "FREE": 0,
      "SALES": 134.54,
      "CHEMIST TOTAL": 1095.76,
      "PIN TOTAL": "SUGAMBI",
      "STOCKIST": null
    },
    {
      PINCODE: "1302",
      CHEMIST: "SHREE KRISHNA MEDICALS",
      "PRODUCT NAME": "EPO 1000 Softgels",
      "SALE QTY": 5,
      "FREE": 0,
      "SALES": 369.15,
      "CHEMIST TOTAL": null,
      "PIN TOTAL": "PALTAM",
      "STOCKIST": null
    },
    {
      PINCODE: "3210",
      CHEMIST: "JAYA PHARMACY (28)",
      "PRODUCT NAME": "SEP10 Tablets",
      "SALE QTY": 3,
      "FREE": 0,
      "SALES": 152.12,
      "CHEMIST TOTAL": 454.16,
      "PIN TOTAL": "MUTHU",
      "STOCKIST": null
    },
    {
      PINCODE: "1301",
      CHEMIST: "THE MADARAS MEDICALS",
      "PRODUCT NAME": "AZUMIN 500 Tablets",
      "SALE QTY": 1,
      "FREE": 0,
      "SALES": 113.09,
      "CHEMIST TOTAL": 113.09,
      "PIN TOTAL": "PALTAM",
      "STOCKIST": null
    },
    {
      PINCODE: "44",
      CHEMIST: "DR J SELVAKUMAR M B B S",
      "PRODUCT NAME": "FOLYGEL MB TABS",
      "SALE QTY": 30,
      "FREE": 15,
      "SALES": 2583.00,
      "CHEMIST TOTAL": 2583.00,
      "PIN TOTAL": "PALTAM",
      "STOCKIST": null
    },
    {
      PINCODE: "3210",
      CHEMIST: "MUDHUVAI MEDICALS C&D (20)",
      "PRODUCT NAME": "ADEB-T Soft gels",
      "SALE QTY": 3,
      "FREE": 0,
      "SALES": 302.04,
      "CHEMIST TOTAL": 302.04,
      "PIN TOTAL": "SVS",
      "STOCKIST": null
    },
    {
      PINCODE: "1303",
      CHEMIST: "SRI VARATHARASAN MEDICALS",
      "PRODUCT NAME": "OSTEO CARE Calcium",
      "SALE QTY": 6,
      "FREE": 0,
      "SALES": 215.58,
      "CHEMIST TOTAL": null,
      "PIN TOTAL": "PALTAM",
      "STOCKIST": null
    },
    {
      PINCODE: "1302",
      CHEMIST: "K.S. PHARMA",
      "PRODUCT NAME": "ADAPRIN Tablets",
      "SALE QTY": 4,
      "FREE": 1,
      "SALES": 198.72,
      "CHEMIST TOTAL": null,
      "PIN TOTAL": "MUTHU",
      "STOCKIST": "JAYASREE"
    },
    {
      PINCODE: "3201",
      CHEMIST: "HEALTH CORNER",
      "PRODUCT NAME": "ALFOMIX Tablets",
      "SALE QTY": 8,
      "FREE": 2,
      "SALES": 1260.00,
      "CHEMIST TOTAL": null,
      "PIN TOTAL": "CITY CENTRAL",
      "STOCKIST": null
    },
    {
      PINCODE: "1304",
      CHEMIST: "SRI AMMAN PHARMA",
      "PRODUCT NAME": "METSOFT Tablets",
      "SALE QTY": 7,
      "FREE": 0,
      "SALES": 189.40,
      "CHEMIST TOTAL": null,
      "PIN TOTAL": "PALTAM",
      "STOCKIST": null
    },
    {
      PINCODE: "3210",
      CHEMIST: "RAVI DRUGS (30)",
      "PRODUCT NAME": "ZINCOVIT Syrup",
      "SALE QTY": 10,
      "FREE": 0,
      "SALES": 520.00,
      "CHEMIST TOTAL": 1040.00,
      "PIN TOTAL": "CITY CENTRAL",
      "STOCKIST": null
    },
    {
      PINCODE: "1301",
      CHEMIST: "SRI KANNIKA PARASAKTHI MEDICALS",
      "PRODUCT NAME": "CETROFEX Tablets",
      "SALE QTY": 3,
      "FREE": 1,
      "SALES": 87.78,
      "CHEMIST TOTAL": 87.78,
      "PIN TOTAL": "PALTAM",
      "STOCKIST": "JAYASREE"
    },
    {
      PINCODE: "1302",
      CHEMIST: "SRI VENKATESHWARA MEDICALS",
      "PRODUCT NAME": "SANTACAL Tablets",
      "SALE QTY": 5,
      "FREE": 0,
      "SALES": 187.50,
      "CHEMIST TOTAL": null,
      "PIN TOTAL": "PALTAM",
      "STOCKIST": null
    },
    {
      PINCODE: "3210",
      CHEMIST: "SREE RAMA MEDICALS",
      "PRODUCT NAME": "METSOFT Tablet",
      "SALE QTY": 6,
      "FREE": 0,
      "SALES": 152.88,
      "CHEMIST TOTAL": 457.20,
      "PIN TOTAL": "CITY CENTRAL",
      "STOCKIST": "MUTHU"
    },
    {
      PINCODE: "1301",
      CHEMIST: "SRI VASAVI MEDICALS",
      "PRODUCT NAME": "D-Vitamin 1000 IU",
      "SALE QTY": 10,
      "FREE": 0,
      "SALES": 150.00,
      "CHEMIST TOTAL": 1500.00,
      "PIN TOTAL": "PALTAM",
      "STOCKIST": null
    },
    {
      PINCODE: "1302",
      CHEMIST: "SRI RAGHAVA MEDICALS",
      "PRODUCT NAME": "ASPIRIN Tablets",
      "SALE QTY": 5,
      "FREE": 0,
      "SALES": 135.75,
      "CHEMIST TOTAL": null,
      "PIN TOTAL": "PALTAM",
      "STOCKIST": "MUTHU"
    },
    {
      PINCODE: "3210",
      CHEMIST: "SARAVANA MEDICALS",
      "PRODUCT NAME": "VITAMIN-C Tablets",
      "SALE QTY": 3,
      "FREE": 1,
      "SALES": 96.30,
      "CHEMIST TOTAL": 192.60,
      "PIN TOTAL": "CITY CENTRAL",
      "STOCKIST": null
    },
    {
      PINCODE: "1303",
      CHEMIST: "SRI KALYANA MEDICALS",
      "PRODUCT NAME": "VITAMIN-C Tablets",
      "SALE QTY": 4,
      "FREE": 0,
      "SALES": 132.80,
      "CHEMIST TOTAL": null,
      "PIN TOTAL": "PALTAM",
      "STOCKIST": "MUTHU"
    },
    {
      PINCODE: "3210",
      CHEMIST: "SUNDRAM MEDICALS",
      "PRODUCT NAME": "VITAMIN-D Tablets",
      "SALE QTY": 2,
      "FREE": 0,
      "SALES": 110.40,
      "CHEMIST TOTAL": null,
      "PIN TOTAL": "CITY CENTRAL",
      "STOCKIST": null
    },
    {
      PINCODE: "1301",
      CHEMIST: "SRI GOKUL MEDICALS",
      "PRODUCT NAME": "CALCIUM Tablets",
      "SALE QTY": 3,
      "FREE": 0,
      "SALES": 78.00,
      "CHEMIST TOTAL": null,
      "PIN TOTAL": "PALTAM",
      "STOCKIST": "MUTHU"
    },
    {
      PINCODE: "1302",
      CHEMIST: "SRI RAMA MEDICALS",
      "PRODUCT NAME": "ANTINEX Capsules",
      "SALE QTY": 4,
      "FREE": 0,
      "SALES": 112.00,
      "CHEMIST TOTAL": null,
      "PIN TOTAL": "PALTAM",
      "STOCKIST": "JAYASREE"
    },
    {
      PINCODE: "3210",
      CHEMIST: "SRI KANDHAPURA MEDICALS",
      "PRODUCT NAME": "OSTEO CARE Tablets",
      "SALE QTY": 5,
      "FREE": 0,
      "SALES": 260.00,
      "CHEMIST TOTAL": 1300.00,
      "PIN TOTAL": "CITY CENTRAL",
      "STOCKIST": null
    },
    {
      PINCODE: "1303",
      CHEMIST: "SRI VIGNESH MEDICALS",
      "PRODUCT NAME": "ZINCOVIT Syrup",
      "SALE QTY": 5,
      "FREE": 0,
      "SALES": 260.00,
      "CHEMIST TOTAL": null,
      "PIN TOTAL": "PALTAM",
      "STOCKIST": "MUTHU"
    },
    {
      PINCODE: "1302",
      CHEMIST: "SRI GOKUL MEDICALS",
      "PRODUCT NAME": "CEF-AZ Tablets",
      "SALE QTY": 2,
      "FREE": 0,
      "SALES": 188.00,
      "CHEMIST TOTAL": null,
      "PIN TOTAL": "PALTAM",
      "STOCKIST": "JAYASREE"
    },
    {
      PINCODE: "3210",
      CHEMIST: "SRI SELVA PHARMACY",
      "PRODUCT NAME": "GALA MG1",
      "SALE QTY": 6,
      "FREE": 0,
      "SALES": 150.00,
      "CHEMIST TOTAL": 900.00,
      "PIN TOTAL": "CITY CENTRAL",
      "STOCKIST": null
    },
    {
      PINCODE: "1301",
      CHEMIST: "SRI MADURA MEDICALS",
      "PRODUCT NAME": "FOLYGEL MB TABS",
      "SALE QTY": 4,
      "FREE": 1,
      "SALES": 285.00,
      "CHEMIST TOTAL": null,
      "PIN TOTAL": "PALTAM",
      "STOCKIST": "JAYASREE"
    },
    {
      PINCODE: "1302",
      CHEMIST: "SRI VENKATESH MEDICALS",
      "PRODUCT NAME": "SEPTIFER Tablets",
      "SALE QTY": 3,
      "FREE": 1,
      "SALES": 125.40,
      "CHEMIST TOTAL": 502.04,
      "PIN TOTAL": "PALTAM",
      "STOCKIST": "MUTHU"
    },
    {
      PINCODE: "3210",
      CHEMIST: "SRI RAGHAVA PHARMA",
      "PRODUCT NAME": "ZINCOVIT Tablets",
      "SALE QTY": 8,
      "FREE": 0,
      "SALES": 520.00,
      "CHEMIST TOTAL": 2080.00,
      "PIN TOTAL": "CITY CENTRAL",
      "STOCKIST": null
    },
    {
      PINCODE: "1303",
      CHEMIST: "SRI KURUKKAL MEDICALS",
      "PRODUCT NAME": "ZINCOVIT Tablets",
      "SALE QTY": 6,
      "FREE": 1,
      "SALES": 207.00,
      "CHEMIST TOTAL": 1242.00,
      "PIN TOTAL": "PALTAM",
      "STOCKIST": "MUTHU"
    },
    {
      PINCODE: "1302",
      CHEMIST: "SRI KALYANI PHARMA",
      "PRODUCT NAME": "ALFOMIX Tablets",
      "SALE QTY": 5,
      "FREE": 0,
      "SALES": 950.00,
      "CHEMIST TOTAL": null,
      "PIN TOTAL": "PALTAM",
      "STOCKIST": "JAYASREE"
    },
    {
      PINCODE: "3210",
      CHEMIST: "SRI KANDHAPURA MEDICALS",
      "PRODUCT NAME": "OSTEO CARE Calcium",
      "SALE QTY": 2,
      "FREE": 1,
      "SALES": 109.28,
      "CHEMIST TOTAL": 218.56,
      "PIN TOTAL": "CITY CENTRAL",
      "STOCKIST": null
    },
    {
      PINCODE: "1301",
      CHEMIST: "SRI SARAVANA PHARMACY",
      "PRODUCT NAME": "D-Vitamin 1000 IU",
      "SALE QTY": 7,
      "FREE": 2,
      "SALES": 1200.00,
      "CHEMIST TOTAL": null,
      "PIN TOTAL": "PALTAM",
      "STOCKIST": null
    },
    {
      PINCODE: "1302",
      CHEMIST: "SRI VENKATESHWARA PHARMA",
      "PRODUCT NAME": "OSTEO CARE Tablets",
      "SALE QTY": 5,
      "FREE": 0,
      "SALES": 260.00,
      "CHEMIST TOTAL": 1300.00,
      "PIN TOTAL": "PALTAM",
      "STOCKIST": "JAYASREE"
    },
    {
      PINCODE: "3210",
      CHEMIST: "SRI ARUNA MEDICALS",
      "PRODUCT NAME": "GALA MG1",
      "SALE QTY": 3,
      "FREE": 1,
      "SALES": 180.00,
      "CHEMIST TOTAL": 540.00,
      "PIN TOTAL": "CITY CENTRAL",
      "STOCKIST": null
    },
    {
      PINCODE: "1303",
      CHEMIST: "SRI SARAVANA MEDICALS",
      "PRODUCT NAME": "ASPIRIN Tablets",
      "SALE QTY": 3,
      "FREE": 0,
      "SALES": 75.60,
      "CHEMIST TOTAL": null,
      "PIN TOTAL": "PALTAM",
      "STOCKIST": "MUTHU"
    },
    {
      PINCODE: "1302",
      CHEMIST: "SRI VENKATESHWARA PHARMACY",
      "PRODUCT NAME": "ANTINEX Capsules",
      "SALE QTY": 5,
      "FREE": 1,
      "SALES": 210.00,
      "CHEMIST TOTAL": 1050.00,
      "PIN TOTAL": "PALTAM",
      "STOCKIST": "JAYASREE"
    },
    {
      PINCODE: "3210",
      CHEMIST: "SRI KALYANI MEDICALS",
      "PRODUCT NAME": "CALCIUM Tablets",
      "SALE QTY": 2,
      "FREE": 0,
      "SALES": 70.00,
      "CHEMIST TOTAL": null,
      "PIN TOTAL": "CITY CENTRAL",
      "STOCKIST": null
    },
    {
      PINCODE: "1301",
      CHEMIST: "SRI GOKUL PHARMA",
      "PRODUCT NAME": "SEPTIFER Tablets",
      "SALE QTY": 2,
      "FREE": 0,
      "SALES": 80.00,
      "CHEMIST TOTAL": null,
      "PIN TOTAL": "PALTAM",
      "STOCKIST": "MUTHU"
    },
    {
      PINCODE: "1302",
      CHEMIST: "SRI MADURA PHARMA",
      "PRODUCT NAME": "SEPTIFER Tablets",
      "SALE QTY": 4,
      "FREE": 0,
      "SALES": 150.00,
      "CHEMIST TOTAL": 600.00,
      "PIN TOTAL": "PALTAM",
      "STOCKIST": "JAYASREE"
    },
    {
      PINCODE: "3210",
      CHEMIST: "SRI VENKATESHWARA MEDICALS",
      "PRODUCT NAME": "VITAMIN-D Tablets",
      "SALE QTY": 3,
      "FREE": 0,
      "SALES": 100.20,
      "CHEMIST TOTAL": 300.60,
      "PIN TOTAL": "CITY CENTRAL",
      "STOCKIST": null
    },
    {
      PINCODE: "1303",
      CHEMIST: "SRI RAGHAVA MEDICALS",
      "PRODUCT NAME": "GALA MG1",
      "SALE QTY": 8,
      "FREE": 0,
      "SALES": 240.00
    },
    // ... (additional data entries)
  ];



  const filteredData = data.filter(item =>
    (pincodeFilter ? item.PINCODE.includes(pincodeFilter) : true) &&
    (productFilter !== "All" ? item["PRODUCT NAME"] === productFilter : true)
  );

  const barData = {
    labels: filteredData.map(item => item["PRODUCT NAME"]),
    datasets: [
      {
        label: "Sales",
        data: filteredData.map(item => item["SALES"]),
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
    labels: filteredData.map(item => item["PRODUCT NAME"]),
    datasets: [
      {
        label: "Monthly Sales Trend",
        data: filteredData.map(item => item["SALES"]),
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
    labels: filteredData.map(item => item["PRODUCT NAME"]),
    datasets: [
      {
        label: "Sales Distribution",
        data: filteredData.map(item => item["SALES"]),
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
    labels: filteredData.map(item => item["PRODUCT NAME"]),
    datasets: [
      {
        label: "Sales Distribution",
        data: filteredData.map(item => item["SALES"]),
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

  const scatterData = {
    labels: filteredData.map(item => item["PRODUCT NAME"]),
    datasets: [
      {
        label: "Sales Over Time",
        data: filteredData.map(item => ({ x: item["SALE QTY"], y: item["SALES"] })),
        backgroundColor: "#FF6384",
        borderColor: "#FF6384",
        pointRadius: 5,
      },
    ],
  };

  const scatterOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Sales Quantity vs. Sales" },
    },
  };

  const radarData = {
    labels: ["Product A", "Product B", "Product C", "Product D"],
    datasets: [
      {
        label: "Sales Over Time",
        data: [150, 250, 180, 120],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  const radarOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Sales Performance Comparison" },
    },
  };

  const downloadCSV = () => {
    const csv = filteredData.map(row => 
      Object.values(row).join(",")).join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sales_data.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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
            <option value="EPO 500 Softgels">EPO 500 Softgels</option>
            <option value="OMD Capsule">OMD Capsule</option>
            <option value="FOLY GEL DHA">FOLY GEL DHA</option>
            <option value="ABDIFER XT TABLETS">ABDIFER XT TABLETS</option>
            <option value="GALA MG2">GALA MG2</option>
            <option value="EPOCAL Softgels">EPOCAL Softgels</option>
            <option value="FOLYGEL Softgels">FOLYGEL Softgels</option>
            <option value="ABDIFER Softgel">ABDIFER Softgel</option>
            <option value="TRIFECT PLUS Susp">TRIFECT PLUS Susp</option>
            <option value="EPO 500 Softgels">EPO 500 Softgels</option>
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
              <option value="All">All Products</option>
              <option value="EPO 500 Softgels">EPO 500 Softgels</option>
              <option value="OMD Capsule">OMD Capsule</option>
              <option value="FOLY GEL DHA">FOLY GEL DHA</option>
              <option value="ABDIFER XT TABLETS">ABDIFER XT TABLETS</option>
              <option value="GALA MG2">GALA MG2</option>
              <option value="EPOCAL Softgels">EPOCAL Softgels</option>
              <option value="FOLYGEL Softgels">FOLYGEL Softgels</option>
              <option value="ABDIFER Softgel">ABDIFER Softgel</option>
              <option value="TRIFECT PLUS Susp">TRIFECT PLUS Susp</option>
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
          <button
            onClick={downloadCSV}
            className="w-full bg-blue-600 text-white py-2 mt-4 rounded-md hover:bg-blue-700"
          >
            Download CSV
          </button>
        </div>

        {/* Charts Section */}
        <div className="flex-grow p-6 bg-gray-50 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bar Chart */}
          <div className="bg-white p-6 shadow rounded-lg">
            <Bar data={barData} options={barOptions} />
          </div>

          {/* Line Chart */}
          <div className="bg-white p-6 shadow rounded-lg">
            <Line data={lineData} options={lineOptions} />
          </div>

          {/* Pie Chart */}
          {/* <div className="bg-white p-6 shadow rounded-lg md:col-span-2">
            <Pie data={pieData} options={pieOptions} />
          </div> */}

          {/* Doughnut Chart */}
          <div className="bg-white p-6 shadow rounded-lg">
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>

          {/* Scatter Plot */}
          <div className="bg-white p-6 shadow rounded-lg">
            <Scatter data={scatterData} options={scatterOptions} />
          </div>

          {/* Radar Chart */}
          <div className="bg-white p-6 shadow rounded-lg md:col-span-2">
            <Radar data={radarData} options={radarOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
