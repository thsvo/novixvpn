"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MainNav from "./main-nav";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function HeaderCom() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileNavOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      className={`w-full sticky top-0 z-50  transition-all duration-300 ${
        isScrolled
          ? "container bg-white top-2 shadow-[0_2px_4px_rgba(0,0,0,0.06),0_0_1px_rgba(0,0,0,0.08)] rounded-full px-4 sm:px-6 md:px-10  mx-auto mt-2 border border-[#E2E2E4]"
          : "border-b  bg-white px-20"
      } ${mobileNavOpen ? "rounded-none" : ""}`}
    >
      <div className="flex h-16 items-center justify-between py-4 relative">
        {/* Logo */}
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

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <MainNav />
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileNavOpen((prev) => !prev)}
        >
          {mobileNavOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Right section */}
        <div className="hidden md:flex items-center gap-4">
          {/* Product dropdown */}
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-2 bg-white px-4 py-2 text-sm font-medium text-black"
              id="dropdown-products"
              aria-haspopup="true"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Products
              {dropdownOpen ? <ChevronUp /> : <ChevronDown />}
            </button>

            {dropdownOpen && (
              <div
                className="absolute left-0 top-12 z-50 mt-2 w-72 origin-top-right rounded-md bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="dropdown-products"
              >
                <div className="hover:bg-gray-100 p-2 rounded-md ">
                  <Image
                    src="/novix-logo.png"
                    height={0}
                    width={150}
                    alt=""
                    className="-ml-[1.5rem]"
                  />
                  <div className="text-sm -mt-[1.2rem]">
                    Online Safety and Information Privacy
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Get Novix Button */}
          <Link href="/download">
            <Button className="rounded-full">Get Novix VPN</Button>
          </Link>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {mobileNavOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 border-t bg-white">
          <MainNav />
          <div className="mt-4">
            {/* Mobile Product Dropdown */}
            <div className="mb-4">
              <button
                className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-black border rounded-md"
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                Products
                {dropdownOpen ? <ChevronUp /> : <ChevronDown />}
              </button>

              {dropdownOpen && (
                <div className="mt-2 w-full rounded-md bg-white p-2 shadow ring-1 ring-black ring-opacity-5">
                  <div className="hover:bg-gray-100 p-2 rounded-md ">
                    <Image
                      src="/novix-logo.png"
                      height={0}
                      width={150}
                      alt=""
                      className="-ml-[1.5rem]"
                    />
                    <div className="text-sm -mt-[1.2rem]">
                      Online Safety and Information Privacy
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/download">
              <Button className="w-full rounded-full">Get Novix VPN</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
