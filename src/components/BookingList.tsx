/**** src/components/BookingList.tsx ****/
import { useEffect, useState } from "react";
import { loadBookings } from "../utils/booking";
import { services } from "../data/services";

export default function BookingList() {
  const [list, setList] = useState(loadBookings());

  useEffect(() => {
    const onStorage = () => setList(loadBookings());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const getServiceName = (id: string) => services.find(s => s.id === id)?.name ?? id;

  return (
    <div className="space-y-3">
      {list.length === 0 && <p className="text-white/70">No bookings yet.</p>}
      {list.map(b => (
        <div key={b.id} className="rounded border border-white/10 p-3">
          <div className="flex justify-between">
            <p className="font-semibold">{b.name} — {getServiceName(b.serviceId)}</p>
            <p className="text-brand-accent font-bold">{b.dateISO} {b.time}</p>
          </div>
          <p className="text-sm text-white/70">Phone: {b.phone}</p>
          {b.notes && <p className="text-sm text-white/70 mt-1">Notes: {b.notes}</p>}
        </div>
      ))}
    </div>
  );
}
