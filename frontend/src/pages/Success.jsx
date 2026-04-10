import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export default function Success() {
  const [searchParams] = useSearchParams();
  const eventId = searchParams.get("eventId");

  const [event, setEvent] = useState(null);
useEffect(() => {
  if (!eventId) return;

  loadEvent();
  saveRegistration(); // ✅ THIS MUST RUN
}, [eventId]);

  async function loadEvent() {
    const res = await axios.get(`/api/events/${eventId}`);
    setEvent(res.data.event);
  }

  async function saveRegistration() {
  try {
    const token = localStorage.getItem("token");

    console.log("TOKEN:", token);
    console.log("EVENT ID:", eventId);

    if (!token) {
      alert("User not logged in");
      return;
    }

    const res = await axios.post(
      `/api/registrations/${eventId}/register`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("REGISTER SUCCESS:", res.data);

  } catch (err) {
    console.log("REGISTER ERROR:", err.response?.data || err.message);
  }
}
  if (!event) return <div className="p-6">Loading ticket...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96 text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          ✅ Payment Successful
        </h1>

        <div className="border p-4 rounded-lg">
          <h2 className="text-lg font-semibold">{event.title}</h2>
          <p className="text-green-600 font-bold">₹ {event.price}</p>

          <p className="mt-2">
            📅 {new Date(event.date).toLocaleString()}
          </p>

          <p>📍 {event.location}</p>

          <p className="mt-3 text-sm text-gray-500">
            🎟️ Ticket Confirmed
          </p>
        </div>
      </div>
    </div>
  );
}