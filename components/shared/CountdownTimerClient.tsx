"use client";

import { useEffect, useState } from "react";
import CountdownTimer from "./countdown-timer";

export default function CountdownTimerClient() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 z-50 transition-transform duration-500 transform ${
        visible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <CountdownTimer />
    </div>
  );
}
