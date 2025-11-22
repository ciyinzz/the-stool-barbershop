import bg from "../assets/bg.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className="bg-black/60 p-8 rounded-xl max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-brand-accent">Sharp cuts. Smooth vibes.</h1>
        <p className="mt-4 text-white/80 text-lg">Classic grooming with a modern touch. Book your session and skip the wait.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Link to="/booking" className="bg-brand-accent text-black font-semibold px-6 py-3 rounded hover:opacity-90">Book Now</Link>
          <Link to="/services" className="border border-white/20 text-white px-6 py-3 rounded hover:bg-white/10">View Services</Link>
        </div>
      </div>
    </section>
  );
}
