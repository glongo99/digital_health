export default function DoctorDashboard() {
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold mb-8">
        Doctor Dashboard
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Patient Notes */}
        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">
            Clinical Notes
          </h2>

          <textarea
            placeholder="Insert clinical observations..."
            className="w-full h-48 border rounded-2xl p-4 resize-none"
          />

          <button className="mt-4 px-6 py-3 bg-black text-white rounded-xl">
            Save Notes
          </button>
        </div>

        {/* Prescription area */}
        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">
            Therapy Plan
          </h2>

          <textarea
            placeholder="Insert therapy indications..."
            className="w-full h-48 border rounded-2xl p-4 resize-none"
          />

          <button className="mt-4 px-6 py-3 bg-black text-white rounded-xl">
            Save Therapy
          </button>
        </div>
      </div>
    </main>
  );
}