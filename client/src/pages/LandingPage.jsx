import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-6xl grid grid-cols-3 gap-8 items-center py-12">
        {/* Left: Start Selling */}
        <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Start Selling</h2>
          <button
            onClick={() => navigate("/sell")}
            className="w-40 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow font-semibold text-lg transition"
          >
            Sell Now
          </button>
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center items-center">
          <img
            src="/bowl-halo.png"
            alt="IP Hub Logo"
            className="w-40 h-40 object-contain"
          />
        </div>

        {/* Right: Browse Items */}
        <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Browse Items</h2>
          <button
            onClick={() => navigate("/browse")}
            className="w-40 h-12 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow font-semibold text-lg transition"
          >
            Browse Now
          </button>
        </div>
      </div>
    </div>
  );
}
