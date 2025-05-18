import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import HeaderCom from "@/components/HeaderCom";
import AndroidVPNInfo from "@/components/android-vpn-info";
import VPNFeaturesGrid from "@/components/vpn-features-grid";
import VPNSetupGuide from "@/components/vpn-setup-guide";
import VPNPromoBanner from "@/components/vpn-promo-banner";
import VpnComparison from "@/components/vpn-comparison";

// Metadata for the page
export const metadata = {
  title: "Download NovixVPN – Fast & Secure VPN for Android.",
  description:
    "Protect your Android with NovixVPN. Enjoy private browsing, fast streaming, and top-tier security. Download now for total online freedom and safety.",
};

export default function VPNDownloadPage() {
  return (
    <>
      <HeaderCom />
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-800 capitalize">
              Download a modern, smart VPN app for your phone
              {/* <span className="text-blue-500 font-bold"> Novix VPN</span> */}
            </h1>

            <ul className="space-y-4 list-disc pl-5">
              <li className="text-gray-700">
                Browse online with total privacy, secure your data, and
                <a
                  href="https://www.novixvpn.com/"
                  target="_blank"
                  className="text-primary px-1 underline"
                >
                  protect your Android device.
                </a>
              </li>
              <li className="text-gray-700">
                Easily stop annoying trackers and shield yourself from hostile
                websites.
              </li>
              <li>
                Maintain your online safety even during unexpected drops in
                server connection.
              </li>
              <li>
                Experience ultra-fast speed tailored for buffer-free streaming
                and seamless browsing.
              </li>
            </ul>
            <p className="text-muted-foreground">
              Download our simple Android VPN app right now to have control over
              your online privacy, security, and freedom.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="#"
                className="bg-primary text-white font-medium hover:bg-transparent hover:text-black  py-3 px-6 rounded-full text-center border border-gray-300 hover:border transition-colors ease-in-out "
              >
                Buy NovixVPN
              </Link>
              <Link
                href="#"
                className="border border-gray-300 hover:bg-primary text-gray-700 hover:text-white font-medium py-3 px-6 rounded-full text-center transition-colors ease-in-out "
              >
                Get from Google Play
              </Link>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="h-4 w-4" />
              <span className="text-sm">30-day money-back guarantee</span>
            </div>
          </div>

          <div className="flex justify-center">
            <Image src="/qr.png" alt="QR Code" width={550} height={500} />
          </div>
        </div>
        {/* What does a VPN component */}
        <AndroidVPNInfo />
        {/* vpn comparison component */}
        <VpnComparison />
        {/* Android VPN features component */}
        <VPNFeaturesGrid />
        {/* set up a VPN app component */}
        <VPNSetupGuide />
        {/* VPN PromoBanner component */}
        <VPNPromoBanner />
      </div>
    </>
  );
}
