/**** src/utils/booking.ts ****/
import { getHoursForDate } from "../data/hours";
import { Service } from "../data/services";

export type Booking = {
  id: string;
  name: string;
  phone: string;
  serviceId: string;
  dateISO: string; // date portion
  time: string; // "HH:MM"
  notes?: string;
};

export const timeToMinutes = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

export const minutesToTime = (min: number) => {
  const h = Math.floor(min / 60).toString().padStart(2, "0");
  const m = (min % 60).toString().padStart(2, "0");
  return `${h}:${m}`;
};

export const generateSlots = (date: Date, service: Service, intervalMin = 15): string[] => {
  const hours = getHoursForDate(date);
  if (hours.closed) return [];
  const start = timeToMinutes(hours.open);
  const end = timeToMinutes(hours.close);
  const slots: string[] = [];
  for (let t = start; t + service.durationMin <= end; t += intervalMin) {
    slots.push(minutesToTime(t));
  }
  return slots;
};

export const storageKey = "tsb_bookings_v1";

export const loadBookings = (): Booking[] => {
  const raw = localStorage.getItem(storageKey);
  return raw ? JSON.parse(raw) : [];
};

export const saveBooking = (booking: Booking) => {
  const list = loadBookings();
  list.push(booking);
  localStorage.setItem(storageKey, JSON.stringify(list));
};

export const isSlotTaken = (dateISO: string, time: string) => {
  const list = loadBookings();
  return list.some(b => b.dateISO === dateISO && b.time === time);
};
