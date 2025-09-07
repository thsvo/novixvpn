"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Affiliate() {
  return (
    <section className="bg-blue-50">
      <div className=" mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-16">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Partner With novix VPN – Earn as You Grow
          </h1>
          <p className="text-gray-700 text-base md:text-lg">
            Become an affiliate and turn your audience into income. Promote our
            premium VPN solutions while helping users enjoy secure, private, and
            unrestricted internet access.
          </p>
          <ul className="space-y-2 text-gray-700 text-sm md:text-base">
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              Earn a share of every subscription purchased via your unique link
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              Empower users with true online freedom & encrypted browsing
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              Unlock tiered bonuses & exclusive rewards — the bigger your reach,
              the bigger your payouts
            </li>
          </ul>

          <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
            {/* Join Affiliate Program */}
            <Link href="/login" passHref>
              <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full">
                Join Affiliate Program
              </Button>
            </Link>

            {/* Affiliate Login */}
            <Link href="/login" passHref>
              <Button
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-50 px-6 py-2 rounded-full"
              >
                Affiliate Login
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Image / Illustration */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-200 flex items-center justify-center">
            <span className="text-4xl font-bold text-white bg-blue-600 px-8 py-8 rounded-full shadow-md">
              VPN
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
