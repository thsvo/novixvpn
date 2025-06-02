import { useEffect, useState } from "react";

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function useCountdown(): Countdown {
  // 5 hours 33 minutes in seconds
  const OFFER_DURATION = 5 * 60 * 60 + 33 * 60;

  const getInitialTargetDate = () => {
    return new Date(Date.now() + OFFER_DURATION * 1000);
  };

  const [targetDate, setTargetDate] = useState<Date>(getInitialTargetDate);

  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - Date.now();
    
    if (difference <= 0) {
      // Reset timer to 5 hours 33 minutes when it reaches zero
      setTargetDate(getInitialTargetDate());
      return { days: 0, hours: 5, minutes: 33, seconds: 0 };
    }

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days: 0, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState<Countdown>(calculateTimeLeft());

  useEffect(() => {
    // Set new target date on mount (new visit)
    setTargetDate(getInitialTargetDate());
    
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Run only on mount

  return timeLeft;
}