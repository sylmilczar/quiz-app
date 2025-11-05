export const ScrollDownButton = () => {
  const handleScroll = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: window.innerHeight,
    });
  };

  return (
    <button
      aria-label="Scroll down"
      className="bg-tertiary-600/20 hover:bg-tertiary-600/40 fixed right-4 bottom-10 z-50 flex items-center justify-center rounded-sm p-3 text-slate-200 shadow-md transition-all duration-300 hover:text-yellow-400 sm:right-8"
      onClick={handleScroll}
    >
      <svg
        className="size-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
};
