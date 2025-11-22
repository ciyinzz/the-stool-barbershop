/**** src/data/hours.ts ****/
export type Hours = { open: string; close: string; closed?: boolean };

export const getHoursForDate = (date: Date): Hours => {
  const day = date.getDay(); // 0=Sun, 1=Mon, ... 3=Wed
  if (day === 3) return { open: "00:00", close: "00:00", closed: true }; // Closed Wednesday
  if (day === 0) return { open: "11:00", close: "19:00" }; // Sunday
  return { open: "11:00", close: "20:00" }; // Mon-Sat
};
