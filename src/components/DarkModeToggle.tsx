export default function DarkModeToggle() {
  const toggle = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button onClick={toggle} className="text-black dark:text-white hover:opacity-80">
      Toggle Theme
    </button>
  );
}
