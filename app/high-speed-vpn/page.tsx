import {
  Shield,
  Globe,
  Server,
  Activity,
  Lock,
  FileCheck,
  EyeOff,
  CheckCircle2,
  Clock,
  Wifi,
  Database,
  Mail,
  CreditCard,
  User,
  ArrowLeft,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Novix VPN: No Logs, No Tracking, Maximum Privacy Protection",
  description:
    "Experience complete privacy with Novix VPN. No logs, no user tracking, secure SSL/TLS encryption, and advanced WireGuard protocol for ultimate protection.",
};

export default function HighSpeedVPNPage() {
  return (
    <div className="w-full bg-white">
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
      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="lg:w-1/2 space-y-6">
              <div className="text-blue-500 bg-blue-200 p-4 inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 font-medium text-sm mb-2">
                MAXIMUM PRIVACY PROTECTION
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                No Logs, No Tracking, Complete Privacy
              </h1>
              <p className="text-lg text-gray-600">
                Experience complete privacy with Novix VPN. No logs, no user
                tracking, secure SSL/TLS encryption, and advanced WireGuard
                protocol for ultimate protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/download"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                >
                  Get Novix VPN
                </Link>
                <Link
                  href="#features"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative w-full h-[400px]">
                <div className="absolute inset-0 bg-secondary rounded-lg overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-10 bg-primary-100 rounded-t-lg flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                      <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                      <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    </div>
                  </div>
                  <div className="pt-12 p-6 flex items-center justify-center">
                    <div className="relative w-[300px] h-[300px]">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-100 rounded-full opacity-50"></div>
                      <div className="absolute top-1/4 right-0 w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center">
                        <EyeOff className="w-8 h-8 text-primary" />
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary-500 rounded-lg shadow-lg flex items-center justify-center">
                        <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center">
                          <div className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center">
                            <Shield className="w-12 h-12 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center">
                        <Lock className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Features Section */}
      <section id="features" className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Complete Privacy Protection
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Novix VPN, we prioritize your privacy and security above all
              else. Our comprehensive protection features ensure your online
              activities remain private and secure.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <EyeOff className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>No User Tracking, No Logs</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Your online activities are not tracked or monitored because of
                  our no-tracking policy. Your privacy is protected, and you
                  have complete anonymity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Lock className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Secure Connection via SSL and TLS</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  No third party can intercept your personal information or data
                  because of our VPN using the SSL, TLS protocols. These
                  high-security measures ensure your data is confidential and
                  unreadable.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>WireGuard Protocol</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The very modern VPN protocol, WireGuard, enables you to enjoy
                  high connection speeds without sacrificing your privacy. Since
                  WireGuard is programmed to limit the data that can be stored,
                  the chances of your activity being traced or recorded back to
                  you are less than zero.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Server className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>
                    Protection Against OSWAP Vulnerabilities
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  These risk management measures safeguard your information from
                  being exposed or hacked. Your information cannot be taken
                  advantage of, giving active security to your online activity
                  from being exposed to vulnerabilities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <FileCheck className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Regular Security Assessments</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We perform regular security assessments to identify and
                  resolve potential vulnerabilities, ensuring our privacy and
                  security measures are always up-to-date and effective.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Minimal Information Collection Section */}
      <section className="w-full py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Minimal Information Collection
              </h2>
              <p className="text-lg text-gray-600">
                We only collect information that's strictly necessary for your
                account to function
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h3 className="text-xl font-bold mb-4">
                  Basic Account Information
                </h3>
                <p className="text-gray-600 mb-4">
                  To give you the best possible service, we only collect the
                  minimum information necessary for your experience:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-full bg-primary-100">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-gray-600">
                      <span className="font-medium">Email address:</span> Only
                      used for account management and informing you about
                      important news.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-full bg-primary-100">
                      <CreditCard className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-gray-600">
                      <span className="font-medium">Payment details:</span>{" "}
                      Processed securely by trusted partners, so you can have an
                      uninterrupted, secure transaction experience without
                      worry.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8">
                <h3 className="text-xl font-bold mb-4">
                  Anonymous Usage Insights
                </h3>
                <p className="text-gray-600 mb-4">
                  We gather anonymized data to enhance your experience while
                  preserving your privacy:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-full bg-primary-100">
                      <Activity className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-gray-600">
                      <span className="font-medium">Server load data:</span>{" "}
                      Enables us to optimize performance and offer seamless
                      connections, so you always receive a fast and stable
                      service.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-full bg-primary-100">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-gray-600">
                      <span className="font-medium">
                        Connection success rates:
                      </span>{" "}
                      Provides us with valuable insights into overall service
                      quality, so we can continually get better, but never
                      monitor individual users.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-600 italic">
                Don't worry, everything we gather is unable to be used to trace
                or identify your online activity. We never log IP addresses,
                browser history, or any information about what you do online.
                Your privacy is never compromised, ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* No User Tracking Policy Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">No User Tracking Policy</h2>
            <p className="text-lg text-gray-600 mb-8">
              At Novix VPN, we prioritize your privacy and security above all
              else
            </p>

            <div className="bg-primary-50 rounded-xl px-8 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-primary-700">
                Nothing Tracked. Nothing Stored. Nothing Shared.
              </h3>
            </div>

            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            >
              Browse Privately Now
            </Link>
          </div>
        </div>
      </section>

      {/* Why No-Logs VPN Section */}
      <section className="w-full py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Why Choosing a No-Logs VPN Is a Non-Negotiable
              </h2>
              <p className="text-lg text-gray-600">
                Understanding Why Only a True No-Logs VPN Can Safeguard Your
                Privacy
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 w-full">
              <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary-100 w-16 h-16 flex items-center justify-center">
                  <EyeOff className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">
                  Invisible to Watchful Eyes
                </h3>
                <p className="text-gray-600">
                  When your VPN keeps no logs, there's nothing to expose, no
                  records to trace, no activity to reveal. Governments, ISPs, or
                  anyone else can knock, but there's simply nothing to give.
                  Your privacy stays yours, untouchable and unseen.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary-100 w-16 h-16 flex items-center justify-center">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">
                  Anonymity That Leaves No Shadow
                </h3>
                <p className="text-gray-600">
                  A true no-logs VPN doesn't just protect your data, it erases
                  the very idea that you were ever there. No names, no
                  timestamps, no trace. Not even the VPN knows who you are, and
                  that's exactly how it should be.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary-100 w-16 h-16 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">No Logs, No Leaks</h3>
                <p className="text-gray-600">
                  In a world where breaches are inevitable, a no-logs policy
                  means there's nothing to steal. No stored data means hackers
                  walk away empty-handed, because your information was never
                  there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Privacy is Non-Negotiable Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Your Privacy is Non-Negotiable
              </h2>
              <p className="text-lg text-gray-600">
                We don't monitor your browsing, connection time, or travel
                location. Just genuine, uncompromised privacy; no logs, no
                records, no fine print.
              </p>
              <p className="text-lg text-gray-600 mt-2 font-bold">
                We don't watch, record, or remember a thing. What you do is
                yours; always.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary-100">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Your Browsing History</h3>
                </div>
                <p className="text-gray-600">
                  We don't track the websites you visit or your online
                  activities, ensuring your privacy remains intact.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary-100">
                    <Wifi className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Your IP Address</h3>
                </div>
                <p className="text-gray-600">
                  Your real IP address is never stored or tracked, protecting
                  your anonymity every step of the way.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary-100">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">
                    Your Connection Timestamps
                  </h3>
                </div>
                <p className="text-gray-600">
                  We don't record when you connect or disconnect, guaranteeing
                  your browsing habits stay private.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary-100">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Your Bandwidth Usage</h3>
                </div>
                <p className="text-gray-600">
                  We don't monitor or store your data usage, so you can browse
                  without concern for how much data you're consuming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Experience True Privacy Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of users who trust Novix VPN for complete online
              privacy and security.
            </p>
            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              Get Novix VPN Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
