import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Shield,
  Lock,
  Zap,
  Globe,
  Smartphone,
  Server,
  Eye,
  Clock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/footer";

// Metadata for the page
export const metadata = {
  title: "NovixVPN: Military-Grade Protection & Lightning-Fast Speed",
  description:
    "Enjoy complete privacy with NovixVPN’s AES-256 encryption, kill switch, and turbocharged servers. Secure your data with ease on Android devices.",
};

export default function Features() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary to-primary/80 text-white py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
                Novix VPN Features
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Discover all the powerful features that make Novix VPN the best
                choice for your online privacy and security.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="security" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
                <TabsTrigger value="privacy">Privacy</TabsTrigger>
              </TabsList>

              <TabsContent value="security" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="md:mt-20">
                    <h2 className="text-3xl font-bold mb-4">
                      Military-Grade Protection
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      To keep your personal information safe at all times,
                      NovixVPN applies the latest technology in securing data
                      with cutting-edge protocols.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h1 className="font-bold">
                            Data Protection of AES-256-bit
                          </h1>
                          <p className="text-muted-foreground">
                            Global governments along with cyber experts rely on
                            the AES-256 algorithm which ensures protected data
                            travels the world.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h1 className="font-bold">Kill Switch</h1>
                          <p className="text-muted-foreground">
                            Cuts your internet if the VPN drops, so your data
                            never slips through the cracks
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h1 className="font-bold">DNS Leak Protection</h1>
                          <p className="text-muted-foreground">
                            Zero peeking or snooping is allowed and thus your
                            DNS is protected under lock and key.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full rounded-lg overflow-hidden max-w-xl">
                    <Image
                      src="/Military-Grade-Protection.png"
                      alt="Security Features"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="performance" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="w-full rounded-lg overflow-hidden max-w-xl">
                    <Image
                      src="/Speed-Without-Compromise.png"
                      alt="Performance Features"
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="md:mt-20">
                    <h2 className="text-3xl font-bold mb-4">
                      Speed Without Compromise
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Enjoy lightning-fast speeds with top-tier security and
                      privacy. No slowdowns, just seamless browsing.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h1 className="font-bold">Turbocharged Servers</h1>
                          <p className="text-muted-foreground">
                            Speed-boosted servers for a smooth, speedy
                            connection; no lag, just fast.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h1 className="font-bold">Unlimited Bandwidth</h1>
                          <p className="text-muted-foreground">
                            Stream, download, and browse to your heart’s
                            content. No limits, no throttling.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h1 className="font-bold">Smart Connect</h1>
                          <p className="text-muted-foreground">
                            Instantly connects you to the fastest server, no
                            manual tweaking needed. Just pure speed, right where
                            you are.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="accessibility" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="md:mt-20">
                    <h2 className="text-3xl font-bold mb-4">
                      Easy Accessibility
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Novix VPN is built for simplicity, making it easy to
                      secure your Android device with just a few taps.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Smartphone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h1 className="font-bold">
                            Android-Exclusive Access
                          </h1>
                          <p className="text-muted-foreground">
                            Enjoy a tailored, seamless experience. Novix VPN is
                            built for Android, offering optimized performance
                            just for you.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Smartphone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h1 className="font-bold">Connect Up to 5 Devices</h1>
                          <p className="text-muted-foreground">
                            Keep the whole family secure with one subscription;
                            protect up to 5 Android devices at once.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Smartphone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h1 className="font-bold">One-Click Connect</h1>
                          <p className="text-muted-foreground">
                            Effortless security. just one click and you're
                            connected, no hassle, no fuss.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full rounded-lg overflow-hidden max-w-xl">
                    <Image
                      src="/Easy-Accessibility.png"
                      alt="Accessibility Features"
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="privacy" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="rounded-lg overflow-hidden max-w-xl">
                    <Image
                      src="/Complete-Privacy.png"
                      alt="Privacy Features"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="md:mt-32">
                    <h2 className="text-3xl font-bold mb-4">
                      Complete Privacy
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Your privacy is our priority; designed to keep your online
                      activities completely private, with zero compromises.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Eye className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h1 className="font-bold">Strict No-Logs Policy</h1>
                          <p className="text-muted-foreground">
                            Your browsing history stays yours; no tracking, no
                            collecting, no sharing. Ever.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Eye className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h1 className="font-bold">Anonymous Browsing</h1>
                          <p className="text-muted-foreground">
                            Hide your IP and surf the web incognito; no one will
                            know you were there.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Eye className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h1 className="font-bold">Camouflage Mode</h1>
                          <p className="text-muted-foreground">
                            Blend in seamlessly; make your VPN traffic look just
                            like regular HTTPS, slipping past any blocks
                            unnoticed.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Ready to Experience Novix VPN?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join millions of users who trust Novix VPN for their online
                privacy and security.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started Today
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                30-day money-back guarantee. No questions asked.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
