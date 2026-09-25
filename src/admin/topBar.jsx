function TopBar({ accountClick, inputHandle }) {
  return (
    <nav className="w-full h-14 sm:h-16 md:h-20 lg:h-24 bg-[#f2ead9] px-3 sm:px-4 md:px-6 lg:px-8 py-2 flex items-center justify-end drop-shadow-sm fixed top-0 right-0">
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <input
          type="text"
          placeholder="search names"
          onChange={inputHandle}
          className="rounded-full px-3 md:px-4 py-1.5 sm:py-2 w-28 sm:w-40 md:w-56 lg:w-64 bg-white border border-zinc-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
        />
        <button
          className="rounded-full hover:bg-zinc-400 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 overflow-hidden"
          onClick={accountClick}
        >
          <img src="../public/pfp.png" className="w-full h-full object-cover" />
        </button>
      </div>
    </nav>
  );
}

export default TopBar;
