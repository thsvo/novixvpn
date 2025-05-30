"use client";
import Image from "next/image";
import { useCountdown } from "@/utils/useCountdown";

export default function PromoBanner() {
  const { days, hours, minutes, seconds } = useCountdown();
  const format = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="w-full relative">
      <Image
        src="/image/Pricing-banner.png"
        alt="Promo Banner"
        layout="responsive"
        width={1200} // Adjust based on image dimensions
        height={400} // Adjust based on image dimensions
        className="object-cover hidden xs:hidden sm:block"
      />
      <div className="absolute inset-0"></div>
      <div className="absolute inset-0 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left bg-black xs:bg-gray-800/70 sm:bg-transparent p-4 xs:p-6 rounded-lg">
          <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-white">
            Time to Go Novix — Get 70% Off Today!
          </h2>
          <p className="text-xs xs:text-sm sm:text-base text-white mt-2">
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
      </div>
    </div>
  );
}
