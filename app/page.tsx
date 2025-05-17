import Link from "next/link";
import Image from "next/image";
import { Shield, Zap, Check, Download, Star } from "lucide-react";
import { FaAndroid } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import IpBanner from "@/components/ip-banner";
import ComparisonTable from "@/components/comparison-table";
import PricingCards from "@/components/pricing-cards";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";
import HeroPromotionCom from "@/components/HeroPromotionCom";
import HeaderCom from "@/components/HeaderCom";
import WhatIsVpn from "@/components/what-is-vpn";
import FAQComponent from "@/components/faq-component";
import VpnBenefits from "@/components/vpn-benefits";
import Head from "next/head";

export const metadata = {
  title: "Novix VPN – Protect 5 Devices with One Tap | Fast & Easy VPN ",
  description:
    "Secure up to 5 devices with one account. Novix VPN gives you fast, one-tap privacy with no setup stress. Stay safe on any network, anytime.One account five devices, Protect Everyone you Care About Effortlessly ",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <IpBanner />

      {/* Header/Navigation */}
      <HeaderCom />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background mt-10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_650px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-6">
                  <div className="text-center md:text-left">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none ">
                      Guard What’s Yours. Ghost the Rest.
                    </h1>
                    <p className="text-muted-foreground md:ml-2 py-2">
                      <strong>Novix VPN</strong> gives you the privacy you
                      deserve without the trade-offs.
                    </p>
                  </div>
                  <ul className="text-center md:text-left">
                    <li>
                      <div className="flex items-center gap-2 font-bold justify-center md:justify-start">
                        <Check className="text-primary" />
                        Double Encrypted Routing
                      </div>
                      <span className="text-muted-foreground md:ml-8 text-sm">
                        Your traffic moves through two secure servers, not one.
                        Because one wall isn’t enough.
                      </span>
                    </li>
                    <li>
                      <div className="flex items-center gap-2 font-bold justify-center md:justify-start">
                        <Check className="text-primary" />
                        Blazing-Fast Performance
                      </div>
                      <span className="text-muted-foreground md:ml-8 text-sm">
                        No throttling. No slowdowns. Just smooth, uninterrupted
                        browsing and streaming.
                      </span>
                    </li>
                    <li>
                      <div className="flex items-center gap-2 font-bold justify-center md:justify-start">
                        <Check className="text-primary" />
                        One Account, Five Devices
                      </div>
                      <span className="text-muted-foreground md:ml-8 text-sm">
                        Your protection travels with you across devices,
                        seamlessly.
                      </span>
                    </li>
                    <li>
                      <div className="flex items-center gap-2 font-bold justify-center md:justify-start">
                        <Check className="text-primary" />
                        Zero Logs. Zero Tracking.
                      </div>
                      <span className="text-muted-foreground md:ml-8 text-sm">
                        We don’t monitor. We don’t store. We don’t compromise.
                      </span>
                    </li>
                  </ul>
                  {/* promotion section */}
                  <Link href="#pricing">
                    <HeroPromotionCom />
                  </Link>
                </div>
                <div className="flex flex-col justify-center md:justify-start gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Claim Extra Bonus →
                  </Button>
                  <Link href="#pricing">
                    <Button size="lg" variant="outline">
                      View Plans
                    </Button>
                  </Link>
                </div>
                <div className="flex items-start md:items-center  gap-1 text-sm text-muted-foreground">
                  <Check className="h-5 w-5 text-primary" />
                  <span>
                    Join millions who trust Novix to keep their online life
                    truly private.
                  </span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <div className="flex">
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-primary text-primary"
                        />
                      ))}
                  </div>
                  <span className="text-sm font-medium">
                    25,798 reviews on Trustpilot
                  </span>
                </div>
                {/* download links */}
                <div className="w-full flex justify-center md:justify-start mt-5">
                  <Link
                    href="https://play.google.com/store"
                    className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="playstore-dark.png"
                      width={200}
                      height={150}
                      alt="playstore"
                    />
                  </Link>
                </div>
              </div>
              <div className="">
                <Image
                  src="/home-page.png"
                  width={800}
                  height={800}
                  alt="playstore"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="relative bg-[#FAFAFA] overflow-hidden bg-background mt-5">
          <VpnBenefits />
        </section>
        {/* Features Section */}
        <section id="features" className="bg-background  md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                One VPN. 360° Protection. Zero Hassle
              </h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                No setup nightmare. No tech skills required,  just install, tap,
                and enjoy your privacy.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
              <Card className="border-none shadow-none">
                <CardContent className="flex flex-col items-center text-center md:pt-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-4">
                    <Download className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Download Now</h3>
                  <p className="text-muted-foreground">
                    Android Only. Smooth and simple, just how it should be.
                  </p>
                  <Button variant="link" asChild className="mt-4">
                    <Link href="/features">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-none shadow-none">
                <CardContent className="flex flex-col items-center text-center pt-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-4">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">One-Tap Connect</h3>
                  <p className="text-muted-foreground">
                    Instant encryption, without the manual fiddling, just tap
                    and forget.
                  </p>
                  <Button variant="link" asChild className="mt-4">
                    <Link href="/high-speed-vpn">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-none shadow-none">
                <CardContent className="flex flex-col items-center text-center pt-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Stay Private & Secure
                  </h3>
                  <p className="text-muted-foreground">
                    auto-connect 24/7.Privacy shouldn’t be a choice it's a given
                  </p>
                  <Button variant="link" asChild className="mt-4">
                    <Link href="/no-user-tracking">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* Multi-device Section */}
        <section className="bg-muted/50 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">
                        One-click Setup. Protected in seconds:
                      </h3>
                      <p className="text-muted-foreground">
                        Tap it once and you are safe. Simple, quick and no
                        nonsense.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">
                        Switch between devices without missing a beat:
                      </h3>
                      <p className="text-muted-foreground">
                        Your Privacy is alway On, whether you are on your phone,
                        tablet or anything else. No interruptions.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">
                        Secure Upto 5 devices with one connection:
                      </h3>
                      <p className="text-muted-foreground">
                        One account, 5 devices. Keep the whole crew safe, zero
                        fuss.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="/utils.png"
                  width={600}
                  height={600}
                  className="relative z-10 mx-auto w-full rounded-md bg-transparent object-cover shadow-md md:w-3/4"
                  alt="Novix VPN on various devices"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Comparison Section */}
        <section id="comparison" className="bg-background  md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-start mb-12">
              <Head>
                <title>
                  VPN Comparison: Novix VPN vs NordVPN vs Surfshark vs ProtonVPN
                </title>
                <meta
                  name="description"
                  content="Compare Novix VPN, NordVPN, Surfshark, and ProtonVPN. Explore features like WireGuard, flexible pricing, kill switch protection, and real-time speed tests."
                />
                <meta property="og:title" content="Open Graph Title" />
              </Head>
              <h2 className="text-2xl font-bold tracking-tighter  md:text-5xl text-center">
                VPN Comparison: Novix VPN vs. NordVPN, Surfshark, ProtonVPN, and
                ExpressVPN
              </h2>
              <p className="mt-4 text-muted-foreground md:text-md text-center">
                Selecting the appropriate VPN service depends on several
                factors, including several characteristics that fit your
                particular requirements. Here is a comparison of several leading
                VPN providers, including Novix VPN, NordVPN, Surfshark,
                ProtonVPN, and ExpressVPN. Every VPN has its own set of
                particular characteristics meant to improve your browsing
                experience, security, and privacy.
              </p>
              <h3 className="text-lg text-muted-foreground w-full font-bold text-start">
                Comparison of Features:
              </h3>
            </div>
            <ComparisonTable />
          </div>
          <div className="mt-16 md:mt-20 container">
            <h1 className="text-2xl font-bold tracking-tighter md:text-5xl text-center">
              What VPN is Best for You?
            </h1>
            <div className="py-5 md:py-8">
              <p className="mt-4 text-muted-foreground md:text-md text-center">
                Every VPN service has its own advantages; hence, the ideal
                choice relies on which characteristics are most important to
                you. Novix VPN distinguishes itself by providing customized
                Android compatibility, a reasonable price, and real-time speed
                tests. NordVPN and Surfshark, on the other hand, both shine with
                strong security measures such as WireGuard and large server
                lists.
              </p>
              <p className="mt-4 text-muted-foreground md:text-md text-center">
                Novix VPN provides a more complete annual service for those who
                value things like instructional video configurations or unique
                VIP access. For people who appreciate simple, user-friendly VPNs
                with a wide server range but don't need particular extra
                features like WireGuard or real-time speed checks, ExpressVPN
                might be perfect.
              </p>
              <p className="mt-4 text-muted-foreground md:text-md text-center">
                Ultimately, your choice will rely on your particular needs,
                whether they be financial freedom, platform compatibility, or
                sophisticated security features.
              </p>
            </div>
          </div>
        </section>
        {/* Download Section */}
        <section
          id="download"
          className="bg-primary text-primary-foreground py-12 md:py-24"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Download Novix VPN Now
              </h2>
              <p className="mt-4 max-w-[700px] md:text-xl">
                Available on all your favorite platforms
              </p>
            </div>
            <div className="flex justify-center items-center gap-2 max-w-3xl mx-auto">
              <div className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="rounded-full bg-white/10 p-4">
                  <FaAndroid className="h-8 w-8 " />
                </div>
              </div>
              <Link
                href="https://play.google.com/store"
                className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Image
                  src="playstore-light.png"
                  width={250}
                  height={150}
                  alt="playstore"
                />
              </Link>
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <section id="pricing" className="bg-muted/50 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Straight Forward Pricing
              </h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Pick the plan that fits you. No tricks, No Surprises
              </p>
            </div>
            <PricingCards />
          </div>
        </section>
        {/* Testimonials Section */}
        <section id="testimonials" className="bg-background py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Our Users are saying
              </h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Join the crowd who's already switched to smarter privacy
              </p>
            </div>
            <Testimonials />
          </div>
        </section>
        {/* what is vpn section */}
        <div className="md:mb-24">
          <WhatIsVpn />
        </div>
        {/* FAQ Section */}
        <FAQComponent />
      </main>
      <Footer />
    </div>
  );
}
