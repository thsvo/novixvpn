"use client";

import Image from "next/image";
import { useState } from "react";

export default function VpnBenefits() {
  const [openItem, setOpenItem] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenItem(openItem === index ? -1 : index);
  };

  const accordionItems = [
    {
      title: "Hide your IP address",
      content:
        "Connect to ghost everything. A VPN connects your device to its server and assigns a new IP address for your device replacing the original one. This means a VPN hides your online activity and location, making it harder to track you.",
      image: "/benefits-1.png",
    },
    {
      title: "Guard your device",
      content:
        "Ensure advanced security for your device and data, and use your phone confidently. A VPN channels your internet connection through a secured tunnel and shields your device from cyber-threats.",
      image: "/benefits-2.png",
    },
    {
      title: "Safely access contents",
      content:
        "Fly to wherever you wish to go — virtually. A VPN enables you to choose from a world-wide network of servers and decide your virtual location. This enables you to access region-specific contents from anywhere. Enjoy your online freedom.",
      image: "/benefits-3.png",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center 0">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
          The Benefits of Using a VPN
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Usually, your internet behavior stays exposed. You are always at the
          danger of hostile monitoring, privacy violation, and data theft while
          using the Internet, streaming material, or file sharing. A Virtual
          Private Network, or simply VPN, protects your internet connection,
          removes geo-restrictions, and keeps your activities totally private.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Image container */}
        <div className="flex justify-center sticky top-24 min-h-[500px]">
          {accordionItems.map((item, index) => (
            <div
              key={index}
              className={`absolute transition-opacity duration-500 ${
                openItem === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={item.image}
                alt={`Illustration for ${item.title}`}
                width={600}
                height={600}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Accordion container */}
        <div className="flex flex-col justify-center h-full space-y-4">
          {accordionItems.map((item, index) => (
            <div
              key={index}
              className={`border-l-2 ${
                openItem === index ? "border-blue-500" : "border-[#B1B1B4]"
              }`}
            >
              <div
                className="pl-4 py-2 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-xl font-semibold text-gray-700">
                  {item.title}
                </h3>
              </div>

              <div
                className={`pl-4 text-gray-600 overflow-hidden transition-all duration-300 ease-in-out ${
                  openItem === index
                    ? "max-h-96 opacity-100 py-4"
                    : "max-h-0 opacity-0 py-0"
                }`}
              >
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
