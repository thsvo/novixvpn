"use client";

import { useCountdown } from "@/utils/useCountdown";

function format(n: number) {
  return n.toString().padStart(2, "0");
}

const TimeBox = ({ value, label }: { value: number; label: string }) => {
  return (
    <div className="flex flex-col items-center mx-1">
      <div className="bg-gray-700 text-white w-12 h-16 rounded-sm flex items-center justify-center text-2xl font-bold shadow-md">
        {format(value)}
      </div>
      <span className="mt-1 text-xs text-gray-600">{label}</span>
    </div>
  );
};

export default function Timer() {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center space-x-1">
        <TimeBox value={days} label="Days" />
        <span className="text-2xl text-gray-700 font-bold">:</span>
        <TimeBox value={hours} label="Hours" />
        <span className="text-2xl text-gray-700 font-bold">:</span>
        <TimeBox value={minutes} label="Minutes" />
        <span className="text-2xl text-gray-700 font-bold">:</span>
        <TimeBox value={seconds} label="Seconds" />
      </div>
    </div>
  );
}
