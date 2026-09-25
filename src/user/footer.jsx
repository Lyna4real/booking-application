import { Facebook, Instagram, Linkedin } from "@thesvg/react";

export default function Footer() {
  return (
    <footer
      className="w-full bg-[#f2ead9] px-4 sm:px-6 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6 mt-10"
      id="footer"
    >
      <ul className="flex flex-col gap-2 text-sm text-gray-800 w-full md:w-auto items-center md:items-start">
        <li>
          <a
            className="flex items-center gap-2 cursor-pointer hover:text-gray-500"
            href="./demo.html"
          >
            <Facebook className="h-6 w-6 shrink-0" />
            Facebook
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-2 cursor-pointer hover:text-gray-500"
            href="./demo.html"
          >
            <Instagram className="h-6 w-6 shrink-0" />
            Instagram
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-2 cursor-pointer hover:text-gray-500"
            href="./demo.html"
          >
            <Linkedin className="h-6 w-6 shrink-0" />
            LinkedIn
          </a>
        </li>
      </ul>

      <div className="flex flex-col items-center text-center gap-1">
        <img
          src="./logo.png"
          alt=""
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15"
        />
        <p className="text-sm font-bold text-gray-900">DR. SARAH JENKINS</p>
        <p className="text-xs text-teal-700 tracking-widest">RHEUMATOLOGY</p>
        <p className="text-xs italic text-gray-600">Private cabinet</p>
      </div>

      <ul className="flex flex-col gap-2 text-sm text-gray-800 w-full md:w-auto items-center md:items-end">
        <li>
          <a className="cursor-pointer hover:text-gray-500" href="./demo.html">
            FAQ
          </a>
        </li>
        <li>
          <a className="cursor-pointer hover:text-gray-500" href="./demo.html">
            Working hours
          </a>
        </li>
        <li>
          <a className="cursor-pointer hover:text-gray-500" href="./demo.html">
            Pricings
          </a>
        </li>
      </ul>
    </footer>
  );
}
