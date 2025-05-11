import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import HeaderCom from "@/components/HeaderCom";
import AndroidVPNInfo from "@/components/android-vpn-info";
import VPNFeaturesGrid from "@/components/vpn-features-grid";
import VPNSetupGuide from "@/components/vpn-setup-guide";
import VPNPromoBanner from "@/components/vpn-promo-banner";

export default function VPNDownloadPage() {
  return (
    <>
      <HeaderCom />
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">
              Enjoy The True Freedom of The Internet with
              <span className="text-blue-500 font-bold"> Novix VPN</span>
            </h1>

            <ul className="space-y-4 list-disc pl-5">
              <li className="text-gray-700">
                Protect your Android device, encrypt your data, and browse
                online with complete privacy.
              </li>
              <li className="text-gray-700">
                Effortlessly block intrusive trackers and protect yourself from
                malicious websites.
              </li>
              <li>Keep your connection safe even during unexpected drops.</li>
              <li>
                Enjoy ultra-fast VPN speeds optimized for buffer-free streaming,
                smooth browsing, and unrestricted access.
              </li>
              <li>
                Download our easy-to-use Android VPN app now and take control of
                your online privacy, security, and freedom.
              </li>
              <p></p>
            </ul>

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
            {/* <div className="relative bg-sky-200 rounded-full w-[400px] h-[400px] flex items-center justify-center">
              <div className="relative w-[220px] h-[400px]">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl border-8 border-black w-[200px] h-[380px] overflow-hidden flex flex-col items-center">
                  <div className="bg-gray-100 w-full h-[40px]"></div>
                  <div className="flex-1 flex items-center justify-center p-4">
                    <Image
                      src="/placeholder.svg?height=180&width=180"
                      alt="QR Code"
                      width={180}
                      height={180}
                      className="mx-auto"
                    />
                  </div>
                  <div className="bg-white w-full p-4 text-center">
                    <div className="text-xs text-gray-500">Android</div>
                    <div className="font-medium">NovixVpn mobile app</div>
                    <div className="text-xs text-gray-500 mt-1">
                      Scan the QR code to download the NordVPN mobile app.
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <Image src="/qr.png" alt="QR Code" width={550} height={500} />
          </div>
        </div>
        {/* What does a VPN component */}
        <AndroidVPNInfo />
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
