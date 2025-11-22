import { services } from "../data/services";

export default function Admin() {
  const booking = JSON.parse(localStorage.getItem("booking") || "null");

  if (!booking) {
    return <p className="text-white/70">No bookings found.</p>;
  }

  const service = services.find(s => s.id === booking.serviceId);

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-brand-accent">Admin Panel</h2>
      <div className="bg-white/5 p-4 rounded">
        <p><strong>Service:</strong> {service?.name}</p>
        <p><strong>Date:</strong> {booking.date}</p>
        <p><strong>Time:</strong> {booking.time}</p>
      </div>
    </section>
  );
}
