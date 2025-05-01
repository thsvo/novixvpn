import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import { FaTiktok, FaThreads } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-2">
            <div className="flex items-start -mt-6">
              <Image
                src="/novix-logo.png"
                alt="Novix VPN Logo"
                width={180}
                height={58}
                className="rounded-md"
                draggable="false"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Protecting your online privacy and security since 2015.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/NovixVPN"
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://x.com/NovixVpn"
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.instagram.com/novixvpn/?next=%2F&hl=en"
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.youtube.com/@NOVIXVPN"
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/novix-vpn/?viewAsMember=true"
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.tiktok.com/@novixvpn"
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
              >
                <FaTiktok className="h-5 w-5" />
                <span className="sr-only">TikTok</span>
              </Link>
              <Link
                href="https://www.threads.net/@novixvpn"
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
              >
                <FaThreads className="h-5 w-5" />
                <span className="sr-only">Threads</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-4">Novix VPN</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/#download"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Download
                </Link>
              </li>
              <li>
                <Link
                  href="/money-back-guarantee"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Money-back guarantee
                </Link>
              </li>
              <li>
                <Link
                  href="/why-novix-vpn"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Why Novix VPN?
                </Link>
              </li>
              <li>
                <Link
                  href="/no-user-tracking"
                  className="text-muted-foreground hover:text-foreground"
                >
                  No User Tracking
                </Link>
              </li>
              <li>
                <Link
                  href="/high-speed-vpn"
                  className="text-muted-foreground hover:text-foreground"
                >
                  High Speed VPN
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/ip-checker"
                  className="text-muted-foreground hover:text-foreground"
                >
                  IP Checker
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/what-is-vpn"
                  className="text-muted-foreground hover:text-foreground"
                >
                  What is VPN?
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/vpn-servers"
                  className="text-muted-foreground hover:text-foreground"
                >
                  VPN Servers
                </Link>
              </li>
              <li>
                <Link
                  href="/#testimonials"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground hover:text-foreground"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Novix VPN. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="hover:underline">
              Cookie Policy
            </Link>
          </div>
          <div className="mt-4">
            <p>
              Support:{" "}
              <a
                href="mailto:novixvpna@gmail.com"
                className="text-primary hover:underline"
              >
                novixvpna@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
