import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import HeaderCom from "@/components/HeaderCom";

export default function VPNDownloadPage() {
  return (
    <>
      <HeaderCom />
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">
              Download a VPN app for Android
            </h1>

            <ul className="space-y-4 list-disc pl-5">
              <li className="text-gray-700">
                Get a user-friendly VPN app for Android devices (9.0 or later).
              </li>
              <li className="text-gray-700">
                Improve your phone&apos;s online security and privacy on Wi-Fi
                and mobile networks.
              </li>
              <li className="text-gray-700">
                Enjoy an ultra-fast connection and block malicious sites on your
                phone.
              </li>
              <li className="text-gray-700">
                Get the{" "}
                <Link href="#" className="text-blue-600 hover:underline">
                  APK version
                </Link>{" "}
                for extra protection agains malware, trackers, and ads.
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="#"
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-full text-center"
              >
                Buy NovixVPN
              </Link>
              <Link
                href="#"
                className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-full text-center"
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
            <div className="relative bg-sky-200 rounded-full w-[400px] h-[400px] flex items-center justify-center">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
