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
      title: "Secure Your Internet Connection",
      content:
        "A VPN builds an encrypted tunnel from your Android device to the VPN provider’s server and the Internet. It protects your data and activities from malicious actors, making your personal information strictly secured.",
      image: "/benefits-1.png",
    },
    {
      title: "Unlocks Internet Restrictions",
      content:
        "VPNs allow you to access geographically-restricted websites, apps, and streaming platforms regardless of your real location. It maintains openness whether one is watching Netflix US in another country or unblocking censored websites. With a VPN, you set your own Internet rules.",
      image: "/benefits-2.png",
    },
    {
      title: "Keeps You Stay Private",
      content:
        "A VPN conceals your IP address and prevents trackers from tracking your online activity. No more location profiling or targeted advertisements. Browse without leaving a trail.",
      image: "/benefits-3.png",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center 0">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
          Why You Should Use a VPN
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Your online activity usually remains exposed. While browsing the
          Internet, streaming contents, or sharing files, you are always at the
          risk of malicious monitoring, privacy breach, and data theft. A
          Virtual Private Network, or briefly VPN, secures your internet
          connection, removes geo-restrictions, and keeps your activities
          completely private.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Image container */}
        <div className="flex justify-center sticky top-24 min-h-[400px]">
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
                width={400}
                height={400}
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
