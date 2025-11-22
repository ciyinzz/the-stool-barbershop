/**** src/components/BookingForm.tsx ****/
import { useEffect, useMemo, useState } from "react";
import { services, Service } from "../data/services";
import { Booking, generateSlots, isSlotTaken, saveBooking } from "../utils/booking";
import { getHoursForDate } from "../data/hours";

const todayISO = () => new Date().toISOString().split("T")[0];

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceId, setServiceId] = useState<Service["id"]>(services[0].id);
  const [dateISO, setDateISO] = useState(todayISO());
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [confirmMsg, setConfirmMsg] = useState("");

  const selectedService = useMemo(
    () => services.find(s => s.id === serviceId)!,
    [serviceId]
  );

  const hours = useMemo(() => getHoursForDate(new Date(dateISO)), [dateISO]);
  const slots = useMemo(() => generateSlots(new Date(dateISO), selectedService), [dateISO, selectedService]);

  useEffect(() => {
    setTime("");
  }, [dateISO, serviceId]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !serviceId || !dateISO || !time) return;
    if (hours.closed) {
      alert("Closed on Wednesdays. Please choose another day.");
      return;
    }
    if (isSlotTaken(dateISO, time)) {
      alert("This time is already booked. Please select another slot.");
      return;
    }
    const booking: Booking = {
      id: crypto.randomUUID(),
      name,
      phone,
      serviceId,
      dateISO,
      time,
      notes
    };
    saveBooking(booking);
    setConfirmMsg(`Booking confirmed for ${name} on ${dateISO} at ${time}.`);
    setName(""); setPhone(""); setNotes(""); setTime("");
  };

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input className="w-full rounded bg-brand-800 border border-white/10 px-3 py-2"
                 value={name} onChange={e => setName(e.target.value)} placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm mb-1">Phone</label>
          <input className="w-full rounded bg-brand-800 border border-white/10 px-3 py-2"
                 value={phone} onChange={e => setPhone(e.target.value)} placeholder="e.g. 012-3456789" />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm mb-1">Service</label>
          <select className="w-full rounded bg-brand-800 border border-white/10 px-3 py-2"
                  value={serviceId} onChange={e => setServiceId(e.target.value)}>
            {services.map(s => (
              <option key={s.id} value={s.id}>{s.name} — RM {s.price}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Date</label>
          <input type="date" className="w-full rounded bg-brand-800 border border-white/10 px-3 py-2"
                 value={dateISO} onChange={e => setDateISO(e.target.value)} min={todayISO()} />
          {hours.closed && <p className="mt-1 text-xs text-red-400">Closed on Wednesdays</p>}
        </div>

        <div>
          <label className="block text-sm mb-1">Time</label>
          <select className="w-full rounded bg-brand-800 border border-white/10 px-3 py-2"
                  value={time} onChange={e => setTime(e.target.value)} disabled={hours.closed || slots.length === 0}>
            <option value="" disabled>Select a slot</option>
            {slots
              .filter(t => !isSlotTaken(dateISO, t))
              .map(t => <option key={t} value={t}>{t}</option>)
            }
          </select>
          {!hours.closed && slots.length === 0 && (
            <p className="mt-1 text-xs text-red-400">No slots available. Try another date.</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm mb-1">Notes (optional)</label>
        <textarea className="w-full rounded bg-brand-800 border border-white/10 px-3 py-2"
                  value={notes} onChange={e => setNotes(e.target.value)} placeholder="Anything we should know?" />
      </div>

      <button type="submit" className="rounded bg-brand-accent px-5 py-2 font-semibold text-black hover:opacity-90">
        Confirm booking
      </button>

      {confirmMsg && (
        <div className="mt-3 rounded border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm">
          {confirmMsg}
        </div>
      )}
    </form>
  );
}
