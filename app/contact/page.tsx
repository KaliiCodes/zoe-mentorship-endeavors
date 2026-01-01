"use client";

import { useState } from "react";
import Image from "next/image";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);

   if (!result.success) {
  const flattened = result.error.flatten();
  const firstFieldError = Object.values(flattened.fieldErrors).find(
    (arr) => arr && arr.length > 0
  )?.[0];

  toast.error(firstFieldError ?? "Invalid input");
  return;
}

    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@zoementorship.org",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254 741 232 944",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      <div className="relative w-full h-100">
        <Image
          src="/images/contactus.jpg"
          alt="Contact Zoe Mentorship"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-2">Contact Us</h1>
            <p className="text-lg max-w-2xl">
              We’d love to hear from you. Reach out and let’s start a conversation.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12">
          <div className="shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6 text-purple-700">Write a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
  type="text"
  placeholder="Your Name"
  value={formData.name}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, name: e.target.value })
  }
  className="
    w-full
    p-3
    border
    rounded
    text-black
   placeholder-gray-400
    bg-white
    focus:outline-none
    focus:ring-2
    "
  />



              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-3 border rounded text-black focus:outline-none focus:ring-2"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                value={formData.message}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full p-3 border rounded text-black focus:outline-none focus:ring-2"
              />

              <button
                type="submit"
                className="w-full bg-yellow-400 text-purple-800 p-3 rounded hover:bg-yellow-300 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="shadow-md rounded-lg p-6 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <info.icon className="text-purple-700" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">{info.label}</h3>
                  <p className="text-gray-600">{info.value}</p>
                </div>
              </div>
            ))}

            <div className="bg-purple-700 text-white rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">Office Hours</h3>
              <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
              <p>Saturday: 10:00 AM – 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-100">
        <iframe
          title="Zoe Mentorship Location"
          src="https://www.google.com/maps?q=Nairobi,Kenya&output=embed"
          width="100%"
          height="100%"
          className="border-0"
          loading="lazy"
        />
      </div>
    </main>
  );
}
