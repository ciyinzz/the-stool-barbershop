import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <section className="space-y-6 text-black dark:text-white">
      <h2 className="text-3xl font-bold text-brand-accent">Our Services</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(s => (
          <ServiceCard key={s.id} s={s} />
        ))}
      </div>
    </section>
  );
}
