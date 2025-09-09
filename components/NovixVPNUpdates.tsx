"use client";

import Image from "next/image";

export default function NovixVPNUpdates() {
  return (
    <section className="w-full px-6 py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Illustration / Image */}
        <div className="flex justify-center">
          <Image
            src="/Easy-Accessibility.webp" // replace with your custom illustration
            alt="NovixVPN Updates"
            width={400}
            height={400}
            className="w-72 md:w-96 h-auto"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Discover What’s New in{" "}
            <span className="text-blue-600">NovixVPN</span>
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
            NovixVPN is always improving to give you the best online privacy and
            security. Stay updated with our latest features, performance
            upgrades, and enhancements built to keep you safe and connected
            anywhere in the world.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-full shadow hover:bg-blue-700 transition">
            View Updates
          </button>
        </div>
      </div>
    </section>
  );
}
