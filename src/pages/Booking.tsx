import { useState } from "react";
import { services } from "../data/services";

export default function Booking() {
  const [serviceId, setServiceId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const selectedService = services.find(s => s.id === serviceId);
  const isWednesday = new Date(date).getDay() === 3;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceId || !date || !time) return alert("Please fill all fields.");
    const booking = { serviceId, date, time };
    localStorage.setItem("booking", JSON.stringify(booking));
    setConfirmed(true);
  };

  return (
    <section className="max-w-xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-brand-accent">Book Your Session</h2>

      {confirmed ? (
        <div className="bg-green-900 p-4 rounded text-white dark:text-white">
          ✅ Booking confirmed for <strong>{selectedService?.name}</strong> on <strong>{date}</strong> at <strong>{time}</strong>.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Service</label>
            <select value={serviceId} onChange={e => setServiceId(e.target.value)} className="w-full p-2 rounded bg-white text-black dark:bg-brand-800 dark:text-white">
              <option value="" className="text-black dark:text-white">Select a service</option>
              {services.map(s => (
                <option key={s.id} value={s.id} className="text-black dark:text-white">
                  {s.name} — RM {s.price}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Date</label>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full p-2 rounded bg-white text-black dark:bg-brand-800 dark:text-white" />
            {isWednesday && <p className="text-red-500 mt-1">⚠️ We're closed on Wednesdays.</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Time</label>
            <select value={time} onChange={e => setTime(e.target.value)} className="w-full p-2 rounded bg-white text-black dark:bg-brand-800 dark:text-white">
              <option value="" className="text-black dark:text-white">Select a time</option>
              {["11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"].map(t => (
                <option key={t} value={t} className="text-black dark:text-white">{t}</option>
              ))}
            </select>
          </div>

          <button type="submit" className="bg-brand-accent text-black font-semibold px-6 py-3 rounded hover:opacity-90">
            Confirm Booking
          </button>
        </form>
      )}
    </section>
  );
}
