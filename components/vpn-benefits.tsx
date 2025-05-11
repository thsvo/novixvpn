"use client";

import Image from "next/image";
import { Shield, Globe } from "lucide-react";
import { useState } from "react";

export default function VpnBenefits() {
  const [openItem, setOpenItem] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenItem(openItem === index ? -1 : index);
  };

  const accordionItems = [
    {
      title: "Protects your internet connection",
      content:
        "A VPN adds an extra layer of protection to your daily browsing. By encrypting your internet traffic, a VPN helps you shield your online activity from hackers, especially when you're using public Wi-Fi. Whether you're working remotely or browsing on the go, a VPN makes your connection safer — it's virtually impossible to unencrypt internet traffic that's traveling through a VPN tunnel.",
    },
    {
      title: "Unblocks your internet access",
      content:
        "A VPN allows you to bypass geographical restrictions and access content that might be blocked in your region. Whether you're traveling abroad or want to access region-specific services, a VPN helps you maintain access to your favorite websites, streaming platforms, and online services from anywhere in the world.",
    },
    {
      title: "Helps boost your online privacy",
      content:
        "Privacy is increasingly important in today's digital world. A VPN masks your IP address and encrypts your internet connection, making it difficult for advertisers, ISPs, and other third parties to track your online activities. This added layer of privacy protection helps you maintain control over your personal information and browsing habits.",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
          Why you should use a VPN
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          A VPN makes you safer on public Wi-Fi, helps you securely access your
          content while you travel, and helps boost your privacy online. Plus,
          with our 30-day money-back guarantee and affordable monthly, annual,
          and bi-annual plans, it's easy to try it out and see the difference
          for yourself — no commitment needed.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="flex justify-center sticky top-24">
          <Image
            src="/placeholder.svg?height=400&width=300"
            alt="US Map with VPN connection points"
            width={300}
            height={400}
            className="object-contain"
          />
        </div>

        <div className="space-y-4">
          {accordionItems.map((item, index) => (
            <div
              key={index}
              className={`border-l-4 ${
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
