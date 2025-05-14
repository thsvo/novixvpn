"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Youtube, Linkedin, ChevronDown, ChevronUp } from "lucide-react";
import { FaTiktok, FaThreads } from "react-icons/fa6";

export default function Footer() {
  // State for expandable sections
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  // Render different content based on device type
  const renderSectionContent = (section: string, title: string, content: React.ReactNode) => {
    const isExpanded = expandedSection === section;
    
    // Mobile version - with accordion
    if (isMobile) {
      return (
        <div className="border-b border-gray-700">
          <button 
            className="w-full py-4 flex items-center justify-between text-white"
            onClick={() => toggleSection(section)}
          >
            <h3 className="text-xl font-medium">{title}</h3>
            {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
          
          {isExpanded && content}
        </div>
      );
    }
    
    // Desktop version - always expanded
    return (
      <div className="mb-8">
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        {content}
      </div>
    );
  };

  return (
    <footer className="min-w-screen bg-[#0b0c1a] py-8">
      <div className="container px-4">
        {/* App download section */}
        <div className="flex flex-col items-center justify-center gap-3 mb-8">
          {/* App store link commented out */}
          <Link href="https://play.google.com/store" className="w-full max-w-[250px]">
            <Image
              src="/playstore-light.png"
              width={250}
              height={75}
              alt="Get it on Google Play"
              className="w-full"
            />
          </Link>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-700 my-6"></div>

        {/* Main content - responsive layout */}
        <div className={isMobile ? "" : "grid grid-cols-1 md:grid-cols-5 gap-8"}>
          {/* Novix VPN Section */}
          {renderSectionContent(
            'novix', 
            'Novix VPN', 
            <ul className="space-y-4 pb-4">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/#download" className="text-gray-400 hover:text-white">
                  Download
                </Link>
              </li>
              <li>
                <Link href="/money-back-guarantee" className="text-gray-400 hover:text-white">
                  Money-back guarantee
                </Link>
              </li>
              <li>
                <Link href="/why-novix-vpn" className="text-gray-400 hover:text-white">
                  Why Novix VPN?
                </Link>
              </li>
              <li>
                <Link href="/no-user-tracking" className="text-gray-400 hover:text-white">
                  No User Tracking
                </Link>
              </li>
              <li>
                <Link href="/high-speed-vpn" className="text-gray-400 hover:text-white">
                  High Speed VPN
                </Link>
              </li>
            </ul>
          )}

          {/* Engage Section */}
          {renderSectionContent(
            'engage', 
            'Engage',
            <div className="pb-4 space-y-4">
              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://www.facebook.com/NovixVPN"
                  target="_blank"
                  className="text-gray-400 hover:text-white ring-1 ring-gray-600 rounded-full p-2.5 transition"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="https://x.com/NovixVpn"
                  target="_blank"
                  className="text-gray-400 hover:text-white ring-1 ring-gray-600 rounded-full p-2.5 transition"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="https://www.instagram.com/novixvpn/?next=%2F&hl=en"
                  target="_blank"
                  className="text-gray-400 hover:text-white ring-1 ring-gray-600 rounded-full p-2.5 transition"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="https://www.youtube.com/@NOVIXVPN"
                  target="_blank"
                  className="text-gray-400 hover:text-white ring-1 ring-gray-600 rounded-full p-2.5 transition"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/novix-vpn/?viewAsMember=true"
                  target="_blank"
                  className="text-gray-400 hover:text-white ring-1 ring-gray-600 rounded-full p-2.5 transition"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="https://www.tiktok.com/@novixvpn"
                  target="_blank"
                  className="text-gray-400 hover:text-white ring-1 ring-gray-600 rounded-full p-2.5 transition"
                >
                  <FaTiktok className="h-5 w-5" />
                  <span className="sr-only">TikTok</span>
                </Link>
                <Link
                  href="https://www.threads.net/@novixvpn"
                  target="_blank"
                  className="text-gray-400 hover:text-white ring-1 ring-gray-600 rounded-full p-2.5 transition"
                >
                  <FaThreads className="h-5 w-5" />
                  <span className="sr-only">Threads</span>
                </Link>
              </div>
            </div>
          )}

          {/* Help Section */}
          {renderSectionContent(
            'help', 
            'Help',
            <ul className="space-y-4 pb-4">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-400 hover:text-white">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          )}

          {/* Discover Section */}
          {renderSectionContent(
            'discover', 
            'Discover',
            <ul className="space-y-4 pb-4">
              <li>
                <Link href="/ip-checker" className="text-gray-400 hover:text-white">
                  IP Checker
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-400 hover:text-white">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/what-is-vpn" className="text-gray-400 hover:text-white">
                  What is VPN?
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-400 hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/vpn-servers" className="text-gray-400 hover:text-white">
                  VPN Servers
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-gray-400 hover:text-white">
                  Reviews
                </Link>
              </li>
            </ul>
          )}

          {/* Available VPN Apps Section */}
          {renderSectionContent(
            'apps', 
            'Available VPN apps',
            <ul className="space-y-4 pb-4">
              <li>
                <Link href="/apps/android" className="text-gray-400 hover:text-white">
                  Android
                </Link>
              </li>
              <li>
                <Link href="/apps/ios" className="text-gray-400 hover:text-white">
                  iOS
                </Link>
              </li>
              <li>
                <Link href="/apps/windows" className="text-gray-400 hover:text-white">
                  Windows
                </Link>
              </li>
              <li>
                <Link href="/apps/mac" className="text-gray-400 hover:text-white">
                  macOS
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Mobile-only divider and language selector */}
        {isMobile && (
          <>
            <div className="h-px bg-gray-700 my-6"></div>
            <div className="flex items-center gap-2 py-3">
              <div className="p-2 rounded-full border border-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <span className="text-white text-lg">English</span>
              <ChevronDown size={20} className="text-white" />
            </div>
          </>
        )}

        {/* Copyright */}
        <div className="mt-6 pt-4 text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Novix Security. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
