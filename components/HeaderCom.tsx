"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MainNav from "./main-nav";

export default function HeaderCom() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white top-2 shadow-[0_2px_4px_rgba(0,0,0,0.06),0_0_1px_rgba(0,0,0,0.08)] lg:rounded-full px-6 md:px-10 lg:max-w-[1440px] mx-auto mt-2 border border-[#E2E2E4]"
          : "border-b"
      }`}
    >
      <div
        className={`flex h-16 items-center justify-between py-4 transition-all duration-300 ${
          isScrolled ? "container-compact mx-auto" : "container"
        }`}
      >
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              src="/novix-logo.png"
              alt="Novix VPN Logo"
              width={180}
              height={58}
              className="rounded-md"
              draggable="false"
            />
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <MainNav />
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-sm font-medium hover:underline hidden md:block"
          >
            Log in
          </Link>
          <Link href="/download">
            <Button className="rounded-full">Get Novix VPN</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
