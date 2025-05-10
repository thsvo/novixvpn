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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <IpBanner />

      {/* Header/Navigation */}
      <HeaderCom />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_650px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-6">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Guard What’s Yours. Ghost Everything Else.
                  </h1>
                  <ul>
                    <li className="flex justify-start items-center gap-2  ">
                      <Check className="text-[#2460D1]" />
                      Route traffic through two secure servers
                    </li>
                    <li className="flex justify-start items-center gap-2  ">
                      <Check className="text-[#2460D1]" />
                      Blazing-fast servers, no throttling
                    </li>
                    <li className="flex justify-start items-center gap-2  ">
                      <Check className="text-[#2460D1]" />
                      Five devices, One Account, because your Privacy Shouldn’t
                      play musical Chairs
                    </li>
                    <li className="flex justify-start items-center gap-2  ">
                      <Check className="text-[#2460D1]" />
                      Strict No-Logs
                    </li>
                  </ul>
                  {/* promotion section */}
                  <Link href="#">
                    <HeroPromotionCom />
                  </Link>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Bonus VIP Days →
                  </Button>
                  <Link href="#pricing">
                    <Button size="lg" variant="outline">
                      View Plans
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Join Millions of Happy Novix VPN Users</span>
                </div>
                <div className="flex items-center gap-4">
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
                <div className="w-full flex justify-start mt-5">
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
        {/* Features Section */}
        <section id="features" className="bg-background py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                One VPN. 360° Protection. Zero Hassle
              </h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                No setup nightmare. No tech skills required, just install, tap
                and enjoy your privacy.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-none">
                <CardContent className="flex flex-col items-center text-center pt-6">
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
                <video
                  src="/utils.mp4"
                  width={600}
                  height={600}
                  className="relative z-10 mx-auto w-full rounded-md bg-transparent object-cover shadow-md md:w-3/4"
                  autoPlay
                  loop
                  muted
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>
        {/* Comparison Section */}
        <section id="comparison" className="bg-background py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why Choose Novix VPN?
              </h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                See how we compare to other leading VPN providers
              </p>
            </div>
            <ComparisonTable />
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
        <div className="mb-24">
          <WhatIsVpn />
        </div>
        {/* FAQ Section */}
        <FAQComponent />
      </main>
      <Footer />
    </div>
  );
}
