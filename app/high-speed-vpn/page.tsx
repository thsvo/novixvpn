import {
  Shield,
  Zap,
  Globe,
  Server,
  Activity,
  Youtube,
  Download,
  Gamepad2,
  ArrowLeft,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HighSpeedVPNPage() {
  return (
    <div className=" px-4 ">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
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
          </div>
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <div className="max-w-4xl mx-auto py-16">
        {/* Hero Section */}
        <div className="mb-12  ">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Novix VPN: Designed for You, Built for Speed
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            With VPNs, speed is not merely a benefit; it is really rather
            crucial. A bad connection spoils the experience, whether you are
            streaming your favourite series, gaming without latency, or loading
            a website fast. In that regard, Novix VPN is unique. Designed with
            performance in mind, especially for Android users, Novix offers
            high-speed browsing without compromising privacy or comfort.
          </p>
        </div>

        {/* Speedy Features Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Speedy Features of Novix VPN
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Shield className="h-8 w-8 text-primary dark:text-gray-100" />
                <div>
                  <CardTitle>WireGuard Protocol for Next Generation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Fundamentally, WireGuard is contemporary, lightweight, and
                  built for speed. Novix VPN's speed is unlike older VPN
                  protocols like OpenVPN; WireGuard permits your data to go
                  through with the least latency by providing stronger security
                  and cleaner coding. From a practical standpoint? Even over
                  great distances, a quick connection and fewer interruptions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Server className="h-8 w-8 text-primary dark:text-gray-100" />
                <div>
                  <CardTitle>Network of Best Servers</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Novix VPN links you to a global network of strategically
                  located servers, both free and premium. Depending on location
                  and performance, the software picks the optimal server for
                  you; no human guessing or switching is necessary. The item?
                  Quicker speeds every time you log on.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Activity className="h-8 w-8 text-primary dark:text-gray-100" />
                <div>
                  <CardTitle>Speed Test Built-In</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Unsure of which server to choose? Novix simplifies things.
                  Check real-time performance of many servers using the in-app
                  speed test and select the one that most meets your
                  requirements. It's great for everyone who wishes to stream,
                  download, or play without delays.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Zap className="h-8 w-8 text-primary dark:text-gray-100" />
                <div>
                  <CardTitle>
                    Particularly Designed for Android Devices
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Unlike big VPN applications that slow down your phone, Novix
                  is quick and simple. Promising quick performance, low battery
                  use, and seamless multitasking even with your VPN running in
                  the background, it was built only for Android.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What's Possible Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            All That Speed: What Is Possible?
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center   p-4">
              <div className="mb-3 p-3 rounded-full bg-blue-100 text-primary dark:bg-gray-800">
                <Download className="h-6 w-6 " />
              </div>
              <h3 className="font-semibold mb-2">Download Files </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Transfer backups or big files without delay.
              </p>
            </div>

            <div className="flex flex-col items-center   p-4">
              <div className="mb-3 p-3 rounded-full bg-blue-100 text-primary dark:bg-gray-800">
                <Gamepad2 className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Play Online Games</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Using low ping to avoid lag.
              </p>
            </div>

            <div className="flex flex-col items-center   p-4">
              <div className="mb-3 p-3 rounded-full bg-blue-100 text-primary dark:bg-gray-800">
                <Youtube className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">View in HD or 4K</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Wave farewell to fuzzy streaming and buffering.
              </p>
            </div>

            <div className="flex flex-col items-center   p-4">
              <div className="mb-3 p-3 rounded-full bg-blue-100 text-primary dark:bg-gray-800">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Effortless Browsing</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Fast-loading websites, ideal video calls, and smooth social
                media access.
              </p>
            </div>
          </div>
        </div>

        {/* Extra Features Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Extra Features</h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 p-1 rounded-full bg-gray-100 dark:bg-gray-800">
                <Shield className="h-4 w-4 text-primary" />
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Should the VPN fail, it will maintain your connection safely and
                not slow you down.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 p-1 rounded-full bg-gray-100 dark:bg-gray-800">
                <Shield className="h-4 w-4 text-primary" />
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Under Flexible Plans, no commitment pressure; weekly, monthly,
                and annual choices.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 p-1 rounded-full bg-gray-100 dark:bg-gray-800">
                <Shield className="h-4 w-4 text-primary" />
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Annual memberships offer extra days and unique benefits.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 p-1 rounded-full bg-gray-100 dark:bg-gray-800">
                <Youtube className="h-4 w-4 text-primary" />
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                In-app YouTube lessons make it easy for even beginners to set
                up.
              </p>
            </div>
          </div>
        </div>

        {/* What Makes Novix Unique Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            What Makes Novix VPN Unique?
          </h2>

          <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A lot of VPNs claim to be fast. Novix shows that it works. It's
              made for people who want speed without giving up security. It uses
              advanced protocols, fast server routeing, and a focus on Android
              performance. Novix fits your lifestyle, whether you just browse
              the web occasionally or use it a lot.
            </p>
          </div>
        </div>

        {/* Conclusion Section */}
        <div className=" ">
          <h2 className="text-3xl font-bold mb-6">Finally</h2>

          <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              If slow VPNs that offer a lot but don't deliver are wearing you
              out, it's time to switch. Novix VPN is what a current VPN should
              be like: fast, easy, and safe. Right now, give it a try to see how
              fast privacy might change things.
            </p>

            <Link href="/download">
              <button className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                Try Novix VPN Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
