"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Refer() {
  return (
    <section className="bg-blue-50">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-16">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Share with friends, unlock rewards
          </h2>
          <ul className="space-y-2 text-gray-700 text-sm md:text-base">
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              Extra days of premium added instantly after every referral
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              Friends enjoy up to 3 complimentary days of secure browsing
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              Unlimited invites — the more you share, the more you earn
            </li>
          </ul>
          <div className="pt-4">
            <Link href="/login">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">
                Refer a Friend
              </Button>
            </Link>
          </div>
          <p className="text-xs text-gray-500 flex items-center gap-1">
            <span>ⓘ</span> One account works across all novix VPN apps
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center relative">
          {/* Decorative circle */}
          <div className="absolute top-0 right-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-600 flex items-center justify-center translate-x-6 -translate-y-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v6h6M20 20v-6h-6M4 14v6h6M20 10V4h-6"
              />
            </svg>
          </div>
          {/* Placeholder image - replace with your own */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-white shadow-md">
            <Image
              src="/sarah-chen.jpg" // place your own friendly image in /public/images
              alt="Friends using VPN together"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
