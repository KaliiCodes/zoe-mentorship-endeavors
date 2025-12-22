"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/images/zoeh1.jpg",
    description: "Empowering individuals and communities through transformative mentorship and coaching.",
  },
  {
    src:"/images/zoeh1.jpg",
    description: "Unlocking potential and inspiring leadership for meaningful impact.",
  },
  {
    src: "/images/zoeh2.jpg",
    description: "Guiding individuals to thrive in all spheres of life.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length); 
        setFade(true); 
      }, 500); 
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">

      <div className="absolute inset-0">
        <Image
          key={index}
          src={slides[index].src}
          alt="Zoe Slideshow"
          fill
          className="object-cover transition-all duration-1000 opacity-90"
        />
      </div>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">

        <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 drop-shadow-xl">
          Zoe Mentorship Endeavors
        </h1>

        <p className="text-xl lg:text-2xl font-medium text-yellow-300 mb-4">
          Admirable Transformation
        </p>

        <p
          className={`text-lg lg:text-xl text-white max-w-2xl transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {slides[index].description}
        </p>
      </div>
    </div>
  );
}
