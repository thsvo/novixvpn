"use client";

import { CircleCheck, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useCountdown } from "@/utils/useCountdown"; // adjust path as needed

const targetDate = new Date("2025-05-30T23:59:59");

export default function CountdownTimer() {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);
  const [isVisible, setIsVisible] = useState(true);
  const [onHoverVisible, setOnHoverVisible] = useState(false);

  // Slide-up after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setOnHoverVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const format = (n: number) => n.toString().padStart(2, "0");

  return (
    <div
      onMouseEnter={() => setOnHoverVisible(false)}
      onMouseLeave={() => setOnHoverVisible(true)}
      className={`relative mx-auto max-w-md rounded-tr-lg bg-[#0052cc] p-4 text-center shadow-lg transition-all duration-500 ease-in-out ${
        onHoverVisible ? "-mb-24" : ""
      }`}
    >
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-2 text-white/70 hover:text-white"
        aria-label="Close"
      >
        <X size={24} />
      </button>

      <h2 className="mb-2 text-2xl font-bold text-white">Time to go!</h2>

      <div className="mb-4 flex justify-center space-x-2 text-center">
        {[
          { label: "Days", value: format(days) },
          { label: "Hours", value: format(hours) },
          { label: "Minutes", value: format(minutes) },
          { label: "Seconds", value: format(seconds) },
        ].map(({ label, value }, i) => (
          <div key={label} className="flex items-center space-x-1">
            {i > 0 && <span className="text-xl font-bold text-white">:</span>}
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold text-white">{value}</span>
              <span className="mt-2 text-xs text-white">{label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="relative mb-2">
        <button className="w-fit rounded-full bg-[#FF7A45] px-6 py-2 text-md font-bold text-white transition-transform hover:scale-105">
          Save 70% Now!
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 text-[10px] text-white">
        <CircleCheck size={12} />
        <span>30-Day Money-Back Guarantee</span>
      </div>
    </div>
  );
}
