import { Service } from "../data/services";

export default function ServiceCard({ s }: { s: Service }) {
  return (
    <div className="rounded-lg border border-black/10 dark:border-white/10 p-5 bg-white dark:bg-brand-800 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">{s.name}</h3>
        <span className="text-brand-accent font-bold">RM {s.price}</span>
      </div>
      <p className="mt-2 text-sm text-black/70 dark:text-white/70">
        Estimated {s.durationMin} min
      </p>
    </div>
  );
}
