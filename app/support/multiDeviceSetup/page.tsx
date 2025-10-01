import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Mail, Smartphone, Star, Shield, Globe, Lock } from "lucide-react";

export default function MultiDeviceSetup() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Multi-Device Setup Guide
          </CardTitle>
          <p className="text-center text-muted-foreground mt-2">
            Protect up to 5 devices with one Novix VPN account using the same login credentials.
          </p>
        </CardHeader>
        <CardContent>
          {/* Understanding Multi-Device Protection */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Understanding Multi-Device Protection</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Device Limit Overview</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Free Account:</strong> 1 device connection</li>
                  <li><strong>Premium Account:</strong> Up to 5 devices simultaneously</li>
                  <li><strong>Device Types:</strong> Android smartphones, tablets, TV boxes, Chromebooks</li>
                  <li><strong>Same Login:</strong> Use identical email and password</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">What Counts as a Device</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Android smartphones</li>
                  <li>Android tablets</li>
                  <li>Android TV boxes</li>
                  <li>Chromebooks with Android app support</li>
                  <li>Android-based smart devices</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Setting Up Additional Devices */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Setting Up Additional Devices</h2>
            <ol className="list-decimal pl-5 space-y-4">
              <li>
                <strong>Download Novix VPN</strong>
                <p>Install the app from Google Play Store on the new device (blue arrow logo).</p>
              </li>
              <li>
                <strong>Login with Existing Account</strong>
                <p>Tap "Already have an account? Login", enter your email and password, then tap "Login".</p>
              </li>
              <li>
                <strong>Account Access Confirmation</strong>
                <p>Your coin balance, referral progress, and premium status will sync across devices.</p>
              </li>
            </ol>
          </section>

          {/* Managing Multiple Devices */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Managing Multiple Devices</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Shared Account Elements</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Coin Balance: Same across all devices (e.g., 12,345 coins)</li>
                  <li>Referral Progress: Consistent on all devices</li>
                  <li>Premium Status: Applies account-wide</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Device-Independent Elements</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Connection Status: Unique per device</li>
                  <li>Server Selection: Individual per device</li>
                  <li>App Settings: Device-specific preferences</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Monitoring Your Devices</h3>
                <p>Check coin balance and referral progress to confirm account sharing across devices.</p>
              </div>
            </div>
          </section>

          {/* Device-Specific Connections */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Device-Specific Connections</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Independent Connection Control</h3>
                <p>Each device can connect to different servers with its own connection status.</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Phone: US server, "CONNECTED"</li>
                  <li>Tablet: UK server, "CONNECTED"</li>
                  <li>Android TV: "NOT CONNECTED"</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Server Selection Per Device</h3>
                <p>Tap "Fastest Server" on each device to choose specific locations independently.</p>
              </div>
            </div>
          </section>

          {/* Account Settings Across Devices */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Account Settings Across Devices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Shared Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Account credentials</li>
                    <li>Coin balance</li>
                    <li>Referral progress</li>
                    <li>Premium status</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Device-Specific Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>VPN permissions</li>
                    <li>Notifications</li>
                    <li>Auto-connect</li>
                    <li>Server favorites</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Premium Features Across Devices */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Premium Features Across Devices</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Premium Trial Management</h3>
                <p>Activating a trial on one device applies premium access to all devices.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Subscription Benefits</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>5-device simultaneous connections</li>
                  <li>All premium servers</li>
                  <li>Priority support</li>
                  <li>Advanced features</li>
                </ul>
                <Button className="mt-4">Start Free Trial</Button>
              </div>
            </div>
          </section>

          {/* Referral Program Across Devices */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Referral Program Across Devices</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Referral Access</h3>
                <p>Access the Refer tab on any device to view progress and share referral links.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Referral Rewards</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Invite 3 friends: Unlock 7 days free VPN</li>
                  <li>Share with 30 friends: Get 1 week free + 2000 points</li>
                </ul>
                <Button className="mt-4">Refer & Get FREE VPN</Button>
              </div>
            </div>
          </section>

          {/* Device-Specific Configurations */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Device-Specific Configurations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  title: "Smartphone",
                  desc: "Optimize for mobile data, enable auto-connect and kill switch.",
                  icon: <Smartphone className="h-6 w-6" />,
                },
                {
                  title: "Tablet",
                  desc: "Focus on Wi-Fi and streaming, adjust for shared use.",
                  icon: <Globe className="h-6 w-6" />,
                },
                {
                  title: "Android TV",
                  desc: "Use remote to navigate, select streaming servers.",
                  icon: <Shield className="h-6 w-6" />,
                },
              ].map((item, index) => (
                <Card key={index} className="p-4 flex flex-col items-center text-center">
                  {item.icon}
                  <h3 className="text-lg font-medium mt-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Troubleshooting Multi-Device Issues */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Troubleshooting Multi-Device Issues</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  problem: "Can't login on new device",
                  solution: "Verify credentials, tap 'Login' instead of creating a new account, check internet.",
                },
                {
                  problem: "Different coin balance on devices",
                  solution: "Force close app, log out/in, clear cache, or contact support.",
                },
                {
                  problem: "VPN permission denied",
                  solution: "Enable VPN permission in Settings > Apps > Novix VPN > Permissions.",
                },
                {
                  problem: "Can't connect more devices",
                  solution: "Free accounts: 1 device; Premium: up to 5. Disconnect unused devices.",
                },
              ].map((item, index) => (
                <AccordionItem key={index} value={`trouble-${index}`}>
                  <AccordionTrigger>{item.problem}</AccordionTrigger>
                  <AccordionContent>{item.solution}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Contact Support */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <p>
                Email: <a href="mailto:Novixvpna@gmail.com" className="text-blue-600 hover:underline">Novixvpna@gmail.com</a>
              </p>
            </div>
            <p className="mt-2">Include device models, error messages, and account details. Response within 24 hours.</p>
          </section>

          {/* Device Management Best Practices */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Device Management Best Practices</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Family Account Sharing</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Share credentials only with trusted family</li>
                  <li>Monitor coin balance for unusual activity</li>
                  <li>Use device lock screens for security</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Device Organization</h3>
                <ul className="list-none space-y-2">
                  {[
                    "Track installed devices",
                    "Test connections",
                    "Set server preferences",
                    "Keep app updated",
                    "Remove from unused devices",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Maximizing Multi-Device Benefits */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Maximizing Multi-Device Benefits</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Optimal Usage Patterns</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Phone: Daily privacy protection</li>
                  <li>Tablet: Streaming and media</li>
                  <li>Android TV: Geo-restricted content</li>
                  <li>Work Device: Business security</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Advanced Strategies</h3>
                <p>Use different servers for streaming, privacy, or work/personal needs.</p>
              </div>
            </div>
          </section>

          {/* Getting Support */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Getting Support</h2>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <p>
                Email: <a href="mailto:Novixvpna@gmail.com" className="text-blue-600 hover:underline">Novixvpna@gmail.com</a>
              </p>
            </div>
            <p className="mt-2">Response time: Usually within 24 hours</p>
          </section>

          <Separator className="my-8" />
          <p className="text-center text-sm text-muted-foreground">
            Last updated: September 2025. Multi-device functionality based on current app interface.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}