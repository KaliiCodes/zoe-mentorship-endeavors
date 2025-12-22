"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Full-width Image */}
      <div className="w-full h-96 relative">
        <Image
          src="/images/contactus.jpg"
          alt="Contact Zoe Mentorship"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Intro Text */}
      <div className="text-center mt-6 px-4 max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 font-semibold">
          Contact us
        </p>
      </div>

      {/* Form and Info Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col lg:flex-row gap-12">
          
          {/* Left: Contact Form */}
          <div className="lg:w-1/2">
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg text-center">
                Thank you! Your message has been sent.
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="bg-purple-50 p-8 rounded-lg shadow space-y-6"
            >
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-purple-700 font-bold py-3 rounded-lg hover:bg-yellow-300 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Header + Contact Info */}
          <div className="lg:w-1/2 flex flex-col justify-center bg-purple-50 p-8 rounded-lg shadow space-y-6">
            <h2 className="text-3xl font-bold text-purple-700">Get in Touch</h2>
            <p className="text-gray-700 text-lg">
              We’d love to hear from you. Reach out via phone or email:
            </p>
            <div className="space-y-3 text-gray-700 text-lg">
              <p>📞 Phone: <a href="tel:+254700000000" className="text-purple-700 font-semibold">+254741232944</a></p>
              <p>✉ Email: <a href="mailto:info@zoementorship.org" className="text-purple-700 font-semibold">info@zoementorship.org</a></p>
              <p>📍 Location: Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="mt-8 w-full h-96">
        <iframe
          title="Zoe Mentorship Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1993.0000000000001!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f115000000001%3A0x123456789abcdef!2sNairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
          width="100%"
          height="100%"
          className="border-0"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="mb-12"></div>
    </main>
  );
}
