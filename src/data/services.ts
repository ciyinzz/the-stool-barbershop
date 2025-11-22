export type Service = {
  id: string;
  name: string;
  price: number;
  durationMin: number;
};

export const services: Service[] = [
  { id: "wash and haircut", name: "Wash & Haircut Eyebrow", price: 60, durationMin: 60 },
  { id: "shave", name: "Hot Towel Clean Shave", price: 35, durationMin: 40 },
  { id: "kids", name: "Kids Haircut", price: 40, durationMin: 30 },
  { id: "trim", name: "Beard Trim", price: 35, durationMin: 35 },
  { id: "Wax", name: "Nose/Ear Wax", price: 30, durationMin: 35 },
  { id: "mask", name: "Black Mask", price: 30, durationMin: 45 },
  { id: "combo", name: "Wash & Style", price: 30, durationMin: 30 },
];
