import { useEffect, useState } from "react";

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function useCountdown(): Countdown {
  const OFFER_DURATION =  4 * 60 * 60 + 44 * 60 + 24; // in seconds
  const STORAGE_KEY = "offer_target_date";

  const getStoredOrNewTargetDate = () => {
    const storedDate = localStorage.getItem(STORAGE_KEY);
    if (storedDate) {
      return new Date(storedDate);
    } else {
      const newTargetDate = new Date(Date.now() + OFFER_DURATION * 1000);
      localStorage.setItem(STORAGE_KEY, newTargetDate.toISOString());
      return newTargetDate;
    }
  };

  const [targetDate] = useState(getStoredOrNewTargetDate);

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days: 0, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState<Countdown>(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}
