"use client";
import { useCountdown } from "@/utils/useCountdown"; // Adjust the path

// Convert 1h 33m 47s to total seconds
const OFFER_DURATION_SECONDS = 1 * 60 * 60 + 33 * 60 + 47;

export default function PromoBanner() {
  const { days, hours, minutes, seconds } = useCountdown(
    OFFER_DURATION_SECONDS
  );
  const format = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="bg-primary/10 p-6 flex justify-between items-center relative">
      <div>
        <h2 className="text-xl font-bold text-[#1A1A1A]">
          Time To Go Turbo! Save 70% Now
        </h2>
        <p className="text-[#5F6368]">
          Offer Ends In{" "}
          <span className="text-primary font-semibold px-1">
            {format(days)}
          </span>{" "}
          Days
          <span className="text-primary font-semibold px-1">
            {format(hours)}
          </span>{" "}
          Hours
          <span className="text-primary font-semibold px-1">
            {format(minutes)}
          </span>{" "}
          Minutes
          <span className="text-primary font-semibold px-1">
            {format(seconds)}
          </span>{" "}
          Seconds
        </p>
      </div>
      <button className="border border-primary px-6 py-2 rounded hover:bg-primary hover:text-white">
        Save 70%
      </button>
    </div>
  );
}
