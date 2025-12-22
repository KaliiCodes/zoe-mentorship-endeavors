"use client";

import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";


export default function SubHeader() {
  return (
    <div className="w-full bg-purple-700 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-2">

    <nav className="flex items-center space-x-30 text-sm font-medium">
  <Link href="/" className="hover:text-yellow-300">Home</Link>
  <Link href="/about" className="hover:text-yellow-300">About</Link>
  <Link href="/programs" className="hover:text-yellow-300">Programs</Link>
  <Link href="/activities" className="hover:text-yellow-300">Activities</Link>
  <Link href="/contact" className="hover:text-yellow-300">Contact</Link>

</nav>


        <div className="flex items-center space-x-10 text-xl">
          <a href="#" className="hover:text-yellow-300"><i className="fa-brands fa-facebook"></i></a>
          <a href="#" className="hover:text-yellow-300"><i className="fa-brands fa-tiktok"></i></a>
          <a href="#" className="hover:text-yellow-300"><i className="fa-brands fa-instagram"></i></a>
          <a href="#" className="hover:text-yellow-300"><i className="fa-brands fa-linkedin"></i></a>
          <a href="#" className="hover:text-yellow-300"><i className="fa-brands fa-youtube"></i></a>
          <a href="#" className="hover:text-yellow-300"><i className="fa-brands fa-x-twitter"></i></a>
        </div>

      </div>
    </div>
  );
}
