function Navibar({ accountClick }) {
  return (
    <nav className="w-full bg-[#f2ead9] px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between fixed top-0 drop-shadow-sm z-50">
      <div className="w-32 sm:w-40 h-10 sm:h-12 flex items-center justify-center px-2">
        <img src="./logo.png" alt="" className="w-10 h-10 sm:w-15 sm:h-15" />
      </div>

      <ul className="hidden md:flex items-center gap-4 lg:gap-6 text-sm font-medium text-gray-800">
        <li>
          <a className="cursor-pointer hover:text-gray-500" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="cursor-pointer hover:text-gray-500" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="cursor-pointer hover:text-gray-500" href="#services">
            Services
          </a>
        </li>
        <li>
          <a className="cursor-pointer hover:text-gray-500" href="#contact">
            Contact us
          </a>
        </li>
      </ul>

      <div className="flex items-center gap-2 sm:gap-4">
        <button className="hidden sm:inline-block text-xs lg:text-sm font-medium text-gray-900 hover:bg-sky-200 hover:rounded-md px-2 py-1">
          <a href="#book">Book an appointment</a>
        </button>
        <button
          className="rounded-full hover:bg-zinc-400 w-10 h-10 sm:w-12 sm:h-12 text-xs"
          onClick={accountClick}
        >
          User
        </button>
      </div>
    </nav>
  );
}

export default Navibar;
