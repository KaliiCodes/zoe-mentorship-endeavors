"use client";

import Accordion from "@/components/Accordion";
import CoreValues from "@/app/sections/CoreValues/CoreValues";
import Image from "next/image";

export default function AboutPage() {

  
  const accordionItems = [
    {
      title: "Tagline",
      content: <p className="text-gray-700 font-semibold">Admirable Transformation</p>,
    },
    {
      title: "Our Vision",
      content: (
        <p className="text-gray-700">
          To be a leading mentorship and coaching organization that empowers individuals to discover their purpose, maximize their potential, and thrive in all spheres of life.
        </p>
      ),
    },
    {
      title: "Our Mission",
      content: (
        <p className="text-gray-700">
          To provide transformative mentorship and personal development programs that inspire growth, enhance leadership, and equip individuals with life skills for impact and excellence.
        </p>
      ),
    },
    {
      title: "Core Values",
  content: <><CoreValues /></>    },
  ];

  return (
    <main className="container mx-auto px-4 py-16 space-y-12">
      <div className="relative w-full h-96 md:h-125 mb-12">
        <Image
          src="/images/about.jpg"
          alt="About Zoe Mentorship"
          fill
          className="object-cover rounded-lg shadow-lg"
        />
      </div>

     <div className="max-w-3xl mx-auto text-left space-y-4 mb-12">
  <h1 className="text-4xl font-bold text-yellow-500">
    About Zoe Mentorship
  </h1>

  <p className="text-purple-400 text-lg leading-relaxed">
    Empowering individuals and communities through transformative mentorship and coaching. 
    Our programs are designed to help you discover your purpose, maximize your potential, 
    and thrive in all spheres of life.
  </p>
</div>


      <Accordion items={accordionItems} />
    </main>
  );
}
