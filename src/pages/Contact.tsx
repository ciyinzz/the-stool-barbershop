export default function Contact() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-brand-accent">Contact</h2>

      <div className="space-y-3 text-black dark:text-white/80 text-lg">
        <p>
          📍 Address: 1ST FLOOR, 8, JALAN SS2/55, SS 2, 47300 Petaling Jaya, Selangor
        </p>
        <p>📞 Phone: +60 16-352 7396</p>
        <p>
          📸 Instagram:{" "}
          <a
            href="https://www.instagram.com/thestoolbarbershop/"
            className="text-brand-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            @thestoolbarbershop
          </a>
        </p>
      </div>
      <div className="text-sm text-black dark:text-white/70 pt-4 border-t border-black/10 dark:border-white/10">
      </div>
    </section>
  );
}
