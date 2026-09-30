import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header className="flex items-center justify-between px-10 py-6 border-b bg-white">
        <h1 className="text-2xl font-bold text-gray-900">
          Digital Health
        </h1>

        <div className="flex gap-4">
          <Link
            href="/login"
            className="px-5 py-2 rounded-xl border hover:bg-gray-100 transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="px-5 py-2 rounded-xl bg-black text-white hover:opacity-90 transition"
          >
            Register
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1 flex items-center justify-center px-10">
        <div className="max-w-4xl text-center">
          <h2 className="text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            Remote Patient
            <br />
            Monitoring Platform
          </h2>

          <p className="mt-8 text-xl text-gray-600">
            FHIR-ready digital health platform for patients and clinicians.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/login"
              className="px-8 py-4 rounded-2xl bg-black text-white text-lg hover:opacity-90 transition"
            >
              Start Monitoring
            </Link>

            <Link
              href="/register"
              className="px-8 py-4 rounded-2xl border text-lg hover:bg-gray-100 transition"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}