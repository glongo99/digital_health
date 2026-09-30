const API_URL = "http://127.0.0.1:8000";

export async function getVitals() {
  const res = await fetch(`${API_URL}/vitals`);

  if (!res.ok) {
    throw new Error("Error fetching vitals");
  }

  return res.json();
}