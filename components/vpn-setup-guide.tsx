import Link from "next/link";
import { Download } from "lucide-react";

export default function VPNSetupGuide() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          How to set up a VPN app on an Android phone or tablet
        </h2>

        <div className="inline-flex border-b border-gray-200 mb-8">
          <button className="px-6 py-3 text-blue-600 border-b-2 border-blue-600 font-medium">
            Android VPN app
          </button>
        </div>

        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          You can set up a VPN on an Android phone in a few simple steps by
          following this guide on{" "}
          <Link href="#" className="text-blue-600 hover:underline">
            setting up a VPN for Android
          </Link>
          . You can also download the app from the Google Play Store or by
          clicking the "Download APK VPN" button. We also have a tutorial on how
          to set up a{" "}
          <Link href="#" className="text-blue-600 hover:underline">
            VPN on Android TV
          </Link>
          .
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            NovixVPN website
          </h3>
          <p className="text-gray-600 mb-6">
            To use the NovixVPN version that blocks ads, download the VPN APK
            below. Make sure you've enabled downloads from unknown sources
            beforehand.
          </p>
          <Link
            href="#"
            className="inline-flex items-center text-blue-600 font-medium hover:underline"
          >
            <Download className="w-5 h-5 mr-2" />
            Download APK VPN
          </Link>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Google Play Store
          </h3>
          <p className="text-gray-600 mb-6">
            After you download and install the NovixVPN app, log in and follow
            the steps on the screen to set it up. While this version offers a
            7-day free trial for first-time users, it doesn't block ads due to
            the Google Play Store's policies.
          </p>
          <Link
            href="#"
            className="inline-flex items-center text-blue-600 font-medium hover:underline"
          >
            Download from Google Play
          </Link>
        </div>
      </div>
    </section>
  );
}
