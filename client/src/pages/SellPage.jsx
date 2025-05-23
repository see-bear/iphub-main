import React, { useState } from "react";

export default function SellPage() {
  const [assetHash, setAssetHash] = useState("");
  const [licenseType, setLicenseType] = useState("non-exclusive");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://143.110.151.0:5000/api/listings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        asset_hash: assetHash,
        license_type: licenseType,
        creator_id: "placeholder-user-001",
      }),
    });

    if (response.ok) {
      setSubmitted(true);
      setAssetHash("");
      setLicenseType("non-exclusive");
    } else {
      alert("Error submitting listing");
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">List Your IP Asset</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Asset Hash</label>
          <input
            type="text"
            value={assetHash}
            onChange={(e) => setAssetHash(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">License Type</label>
          <select
            value={licenseType}
            onChange={(e) => setLicenseType(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="non-exclusive">Non-Exclusive</option>
            <option value="exclusive">Exclusive</option>
            <option value="pay-per-use">Pay-Per-Use</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Listing
        </button>
      </form>
      {submitted && <p className="text-green-600 mt-4">Listing submitted!</p>}
    </div>
  );
}
