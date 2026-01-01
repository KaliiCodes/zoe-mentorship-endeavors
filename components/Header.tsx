import React from "react";
import { Mail, Clock, Phone } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full flex">
      <div className="bg-white flex items-center gap-3 px-6 py-3 shadow shrink-0">
        <Image src="/images/zoe-logo.jpg" alt="Zoe Logo" width={150} height={50} />
        
      </div>

      <div className="bg-purple-700 text-white flex items-center gap-12 px-8 py-3 flex-1 shadow">

        <div className="flex flex-col items-center">
          <span className="text-xs uppercase text-black">Send Email</span>
          <div className="flex items-center gap-1">
            <Mail className="text-yellow-400" size={48} />
            <span>info@zoementorship.org</span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-xs uppercase text-black">Working Hours</span>
          <div className="flex items-center gap-1">
            <Clock className="text-yellow-400" size={48} />
            <span>Mon-Fri: 9AM - 5PM</span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-xs uppercase text-black">Call Us</span>
          <div className="flex items-center gap-1">
            <Phone className="text-yellow-400" size={48} />
            <span>+254741232944</span>
          </div>
        </div>

        <a
  href="#"
  className="ml-auto bg-yellow-400 text-black font-bold py-3 px-8 text-lg rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 min-w-35"
>
  Donate Now
</a>
      </div>
    </div>
    
  );
};

export default Header;
