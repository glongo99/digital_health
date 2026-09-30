"use client";

import { useEffect, useState } from "react";
import { getVitals } from "@/src/services/api";

export default function PatientDashboard() {
  const [vitals, setVitals] = useState<any>(null);

  useEffect(() => {
    async function loadData() {
      const data = await getVitals();
      setVitals(data);
    }

    loadData();

    const interval = setInterval(loadData, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold mb-8">
        Patient Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <h2 className="text-gray-500">Heart Rate</h2>

          <p className="text-5xl font-bold mt-4">
            {vitals?.heart_rate || "--"}
          </p>

          <p className="text-gray-400 mt-2">bpm</p>
        </div>
      </div>
    </main>
  );
}