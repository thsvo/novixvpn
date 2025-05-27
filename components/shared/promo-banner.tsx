"use client";

import { useEffect, useState } from "react";

export default function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 49,
    seconds: 59,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        seconds -= 1;
        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
        }
        if (minutes < 0) {
          minutes = 59;
          hours -= 1;
        }

        if (hours <= 0 && minutes <= 0 && seconds <= 0) {
          clearInterval(interval);
          return { hours: 0, minutes: 0, seconds: 0 };
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const format = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="relative flex flex-col md:flex-row justify-between items-center w-full bg-primary/10 py-4 px-6 md:px-12">
      {/* Background Circles (optional) */}
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
        <div className="absolute top-[-50px] left-[-50px] w-40 h-40 rounded-full bg-primary/20 opacity-50"></div>
        <div className="absolute bottom-[-30px] left-[10%] w-16 h-16 rounded-full bg-primary/20  opacity-50"></div>
        <div className="absolute top-[30%] right-[-40px] w-72 h-72 rounded-full bg-primary/20 opacity-20"></div>
      </div>

      {/* Content */}
      <div className="z-10 text-center md:text-left space-y-1">
        <h2 className="text-2xl font-bold text-[#1A1A1A]">
          Time To Go Turbo! Save 70% Now
        </h2>
        <p className="text-[#5F6368]">
          Offer Ends In
          <span className="text-primary font-semibold px-1">
            {format(timeLeft.hours)}
          </span>
          Hours
          <span className="text-primary font-semibold px-1">
            {format(timeLeft.minutes)}
          </span>
          Minutes
          <span className="text-primary font-semibold px-1">
            {format(timeLeft.seconds)}
          </span>
          Seconds
        </p>
      </div>

      {/* Image */}
      <div className="z-10 mt-4 md:mt-0">
        <button className="w-fit rounded-lg bg-transparent border border-primary px-10 py-2 text-md font-bold text-black hover:scale-105 hover:bg-primary hover:text-white transition-all ease-in duration-200">
          Save 70%
        </button>
      </div>
    </div>
  );
}
