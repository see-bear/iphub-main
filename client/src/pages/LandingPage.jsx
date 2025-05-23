import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-gray-100 flex flex-col justify-center items-center">
        <h2 className="text-xl mb-4">Sell</h2>
        <button onClick={() => navigate("/sell")} className="p-4 bg-blue-600 text-white rounded-lg">Sell</button>
      </div>
      <div className="flex flex-col justify-center items-center w-40">
        <img src="/bowl-halo.png" alt="Logo" className="w-20 h-20" />
      </div>
      <div className="flex-1 bg-gray-200 flex flex-col justify-center items-center">
        <h2 className="text-xl mb-4">Browse</h2>
        <button onClick={() => navigate("/browse")} className="p-4 bg-green-600 text-white rounded-lg">Browse</button>
      </div>
    </div>
  );
}
