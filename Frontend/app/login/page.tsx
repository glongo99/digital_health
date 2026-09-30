"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [role, setRole] = useState("patient");

  function handleLogin() {
    // MOCK LOGIN

    if (role === "doctor") {
      router.push("/dashboard/doctor");
    } else {
      router.push("/dashboard/patient");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-sm border">
        <h1 className="text-3xl font-bold text-center">
          Login
        </h1>

        <div className="mt-8 space-y-4">
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

          <button
            onClick={handleLogin}
            className="w-full bg-black text-white py-3 rounded-xl hover:opacity-90 transition"
          >
            Enter Platform
          </button>
        </div>
      </div>
    </main>
  );
}