"use client";

import { CircleCheck, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 1,
    minutes: 59,
    seconds: 59,
  });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (
          prevTime.days === 0 &&
          prevTime.hours === 0 &&
          prevTime.minutes === 0 &&
          prevTime.seconds === 0
        ) {
          clearInterval(timer);
          return prevTime;
        }

        let newSeconds = prevTime.seconds - 1;
        let newMinutes = prevTime.minutes;
        let newHours = prevTime.hours;
        let newDays = prevTime.days;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        if (newHours < 0) {
          newHours = 23;
          newDays -= 1;
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative mx-auto max-w-md rounded-lg bg-[#0052cc] p-4 text-center shadow-lg">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-2 text-white/70 hover:text-white"
        aria-label="Close"
      >
        <X size={24} />
      </button>

      <h2 className="mb-2 text-2xl font-bold text-white">Time to go!</h2>

      <div className="mb-4 flex justify-center space-x-2 text-center">
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold text-white">
            {timeLeft.days.toString().padStart(2, "0")}
          </span>
          <span className="mt-2 text-white text-xs">Days</span>
        </div>

        <span className="text-xl font-bold text-white">:</span>

        <div className="flex flex-col items-center">
          <span className="text-xl font-bold text-white">
            {timeLeft.hours.toString().padStart(2, "0")}
          </span>
          <span className="mt-2 text-white text-xs">Hours</span>
        </div>

        <span className="text-xl font-bold text-white">:</span>

        <div className="flex flex-col items-center">
          <span className="text-xl font-bold text-white">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </span>
          <span className="mt-2 text-white text-xs">Minutes</span>
        </div>

        <span className="text-xl font-bold text-white">:</span>

        <div className="flex flex-col items-center">
          <span className="text-xl font-bold text-white">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </span>
          <span className="mt-2 text-white text-xs">Seconds</span>
        </div>
      </div>

      <div className="relative mb-2">
        <button className="w-fit rounded-full bg-[#FF7A45] px-6 py-2 text-md font-bold text-white transition-transform hover:scale-105">
          Save 70% Now!
        </button>
      </div>
      <div className="flex text-[10px] items-center justify-center gap-2 text-white">
        <CircleCheck />
        <span>30-Day Money-Back Guarantee</span>
      </div>
    </div>
  );
}
