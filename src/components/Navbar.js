import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const pathLocation = useLocation().pathname;

  return (
    <div className="relative w-full font-semibold h-10 flex justify-center items-center bg-slate-600">
      <ul className="flex gap-20 text-white">
        <li>
          <Link
            className={`${pathLocation === "/" ? "text-blue-300 font-bold border-b-2" : " "}`} // Use template literal interpolation
            to="/"
          >
            Home
          </Link>
        </li>
        <li className={`${pathLocation === "/about" ? "text-blue-400 font-bold border-b-2" : " "}`}>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link
            className={`${pathLocation === "/contact" ? "text-blue-400 font-bold border-b-2" : " "}`}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
