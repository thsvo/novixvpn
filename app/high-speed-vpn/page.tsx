import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Check,
  ShieldCheck,
  TabletSmartphone,
  Gauge,
  ServerCrash,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";

export default function HighSpeedVPN() {
  return (
    <div className="flex min-h-screen flex-col">
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

      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary to-primary/80 text-white py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
                Lightning-Fast VPN
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Experience the internet at full speed with our high-performance
                VPN network.
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Try Our High-Speed VPN
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Novix VPN: Designed for You, Built for Speed
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  With VPNs, speed is not merely a benefit; it is really rather
                  crucial. A bad connection spoils the experience, whether you
                  are streaming your favourite series, gaming without latency,
                  or loading a website fast. In that regard, Novix VPN is
                  unique. Designed with performance in mind, especially for
                  Android users, Novix offers high-speed browsing without
                  compromising privacy or comfort.
                </p>
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="High-Speed VPN"
                  width={500}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Speedy Feeling of Novix VPN
              </h2>
              <p className="text-xl text-muted-foreground">
                Our high-speed VPN is optimized for all your online needs.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    WireGuard Protocol for Next Generation
                  </h3>
                  <p className="text-muted-foreground">
                    Fundamentally, WireGuard is contemporary, lightweight, and
                    built for speed. Novix VPN's speed is unlike older VPN
                    protocols like OpenVPN; WireGuard permits your data to go
                    through with the least latency by providing stronger
                    security and cleaner coding. From a practical standpoint?
                    Even over great distances, a quick connection and fewer
                    interruptions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <ServerCrash className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Network of Best Servers
                  </h3>
                  <p className="text-muted-foreground">
                    Novix VPN links you to a global network of strategically
                    located servers, both free and premium. Depending on
                    location and performance, the software picks the optimal
                    server for you; no human guessing or switching is necessary.
                    The item? Quicker speeds every time you log on.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <Gauge className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Speed Test Built-In
                  </h3>
                  <p className="text-muted-foreground">
                    Unsure of which server to choose? Novix simplifies things.
                    Check real-time performance of many servers using the in-app
                    speed test and select the one that most meets your
                    requirements. It's great for everyone who wishes to stream,
                    download, or play without delays.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <TabletSmartphone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Particularly Designed for Android Devices
                  </h3>
                  <p className="text-muted-foreground">
                    Unlike big VPN applications that slow down your phone, Novix
                    is quick and simple. Promising quick performance, low
                    battery use, and seamless multitasking even with your VPN
                    running in the background, it was built only for Android.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=" py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Speed Test"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  All That Speed: What Is Possible?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    View in HD or 4K: Wave farewell to fuzzy streaming and
                    buffering.
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    Play online games using low ping to avoid lag.
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    Download files promptly: Transfer backups or big files
                    without delay.
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    Effortless Browsing: Fast-loading websites, ideal video
                    calls, and smooth social media access.
                  </li>
                </ul>
                <div className="mt-6 space-y-4">
                  <h1 className="text-xl font-bold p">Extra Features</h1>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      Should the VPN fail, it will maintain your connection
                      safely and not slow you down.
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      Under Flexible Plans, no commitment pressure; weekly,
                      monthly, and annual choices.
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      Annual memberships offer extra days and unique benefits.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                What Makes Novix VPN Unique?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                A lot of VPNs claim to be fast. Novix shows that it works. It's
                made for people who want speed without giving up security. It
                uses advanced protocols, fast server routeing, and a focus on
                Android performance. Novix fits your lifestyle, whether you just
                browse the web occasionally or use it a lot.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Novix VPN Now
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                Right now, give it a try to see how fast privacy might change
                things.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
