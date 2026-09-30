"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [role, setRole] = useState("patient");

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-3xl shadow-sm border">
        <h1 className="text-3xl font-bold text-center">
          Create Account
        </h1>

        <div className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Full name"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl px-4 py-3"
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border rounded-xl px-4 py-3"
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>

          <button className="w-full bg-black text-white py-3 rounded-xl hover:opacity-90 transition">
            Register
          </button>
        </div>
      </div>
    </main>
  );
}