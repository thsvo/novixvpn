import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Mail, Smartphone, Star, Globe, Shield } from "lucide-react";

export default function DownloadAndInstall() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Download & Install Novix VPN
          </CardTitle>
          <p className="text-center text-muted-foreground mt-2">
            Get up and running with Novix VPN in under 2 minutes. No technical knowledge required.
          </p>
        </CardHeader>
        <CardContent>
          {/* System Requirements */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">System Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Android Requirements</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Operating System: Android 5.0 (API level 21) and above</li>
                  <li>RAM: Minimum 1GB recommended</li>
                  <li>Storage: 50MB free space</li>
                  <li>Internet: Active internet connection required</li>
                  <li>Permissions: VPN permission required</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Supported Android Versions</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Android 14, 13, 12, 11, 10</li>
                  <li>Android Pie (9.0)</li>
                  <li>Android Oreo (8.x)</li>
                  <li>Android Nougat (7.x)</li>
                  <li>Android Marshmallow (6.x)</li>
                  <li>Android Lollipop (5.x)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Installation Guide */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Step-by-Step Installation Guide</h2>
            <Tabs defaultValue="playstore" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="playstore">Google Play Store</TabsTrigger>
                <TabsTrigger value="apk">Direct APK Download</TabsTrigger>
              </TabsList>
              <TabsContent value="playstore">
                <ol className="list-decimal pl-5 space-y-4">
                  <li>
                    <strong>Open Google Play Store</strong>
                    <p>Tap the Google Play Store icon and ensure internet connectivity.</p>
                  </li>
                  <li>
                    <strong>Search for Novix VPN</strong>
                    <p>Type "Novix VPN" in the search bar and look for the app with the blue arrow logo.</p>
                  </li>
                  <li>
                    <strong>Install the App</strong>
                    <p>Tap "Install", review permissions, and accept to download (30-60 seconds).</p>
                  </li>
                  <li>
                    <strong>Open Novix VPN</strong>
                    <p>Tap "Open" from Play Store or find the app in your app drawer.</p>
                  </li>
                </ol>
              </TabsContent>
              <TabsContent value="apk">
                <ol className="list-decimal pl-5 space-y-4">
                  <li>
                    <strong>Enable Unknown Sources</strong>
                    <p>Go to Settings > Security and enable "Unknown Sources".</p>
                  </li>
                  <li>
                    <strong>Download APK</strong>
                    <p>Visit www.novixvpn.com, tap "Download APK", and confirm download.</p>
                  </li>
                  <li>
                    <strong>Install APK</strong>
                    <p>Open the downloaded NovixVPN.apk file and tap "Install".</p>
                  </li>
                  <li>
                    <strong>Disable Unknown Sources</strong>
                    <p>Return to Settings > Security and disable "Unknown Sources" for safety.</p>
                  </li>
                </ol>
              </TabsContent>
            </Tabs>
          </section>

          {/* First Launch & Account Setup */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">First Launch & Account Setup</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="new-user">
                <AccordionTrigger>New User Registration</AccordionTrigger>
                <AccordionContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Launch the app and see the "Create your account" screen.</li>
                    <li>Enter your email address and optional referral code.</li>
                    <li>Tap "Continue" or use "Continue With Google".</li>
                    <li>Enter the 6-digit verification code sent to your email.</li>
                    <li>Create a strong password and accept Terms of Service.</li>
                    <li>Tap "Create Account".</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="existing-user">
                <AccordionTrigger>Existing User Login</AccordionTrigger>
                <AccordionContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Tap "Already have an account? Login".</li>
                    <li>Enter your email and password.</li>
                    <li>Tap "Login" or use "Forgot Password?" if needed.</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Initial App Configuration */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Initial App Configuration</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Grant VPN Permission</h3>
                <p>Allow the app to create secure connections by tapping "OK" in the system dialog.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">First Time Setup</h3>
                <p>Tap the "Secure Now" button to connect to the default "Fastest Server".</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Main Interface</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Top Bar:</strong> Coin balance, trial/refer buttons</li>
                  <li><strong>Main Connect Button:</strong> Large circular power icon</li>
                  <li><strong>Connection Status:</strong> Red "NOT CONNECTED" when off</li>
                  <li><strong>Current Server:</strong> Shows selected or "Fastest Server"</li>
                  <li><strong>Bottom Navigation:</strong> Home, Refer, Settings tabs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Navigation & Core Features */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Navigation & Core Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: <Smartphone className="h-6 w-6" />, title: "Home Tab", desc: "Main connection interface and server selection" },
                { icon: <Globe className="h-6 w-6" />, title: "Connection Tab", desc: "Advanced settings and connection history" },
                { icon: <Star className="h-6 w-6" />, title: "Refer Tab", desc: "Referral program and coin earnings" },
                { icon: <Shield className="h-6 w-6" />, title: "Settings Tab", desc: "Account management and support options" },
              ].map((item, index) => (
                <Card key={index} className="p-4 flex flex-col items-center text-center">
                  {item.icon}
                  <h3 className="text-lg font-medium mt-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Contact Support */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">In-App Support</h3>
                <p>Go to Settings > Contact Support, fill in your details, and submit your issue.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Direct Email</h3>
                <p>
                  Email: <a href="mailto:support@novixvpn.com" className="text-blue-600 hover:underline">support@novixvpn.com</a>
                </p>
                <p>Include your account email and device information.</p>
              </div>
            </div>
          </section>

          {/* Referral & Rewards */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Referral & Rewards System</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Coin System</h3>
                <p>Earn coins through referrals and use them for free VPN time.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Invite 3 friends: Unlock 7 days free VPN</li>
                  <li>Share with 30 friends: Get 1 month free</li>
                </ul>
              </div>
              <Button className="mt-4">Refer & Get FREE VPN</Button>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Troubleshooting Installation Issues</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { problem: "App not installed", solution: "Clear Google Play Store cache in Settings > Apps." },
                { problem: "Download stuck or failed", solution: "Check internet and ensure 100MB free space." },
                { problem: "Package appears to be corrupt", solution: "Re-download APK from official website." },
                { problem: "VPN permission denied", solution: "Manually enable VPN in Settings > VPN." },
                { problem: "App crashes on startup", solution: "Restart device or reinstall the app." },
                { problem: "Can't complete email verification", solution: "Check spam folder or resend code." },
              ].map((item, index) => (
                <AccordionItem key={index} value={`trouble-${index}`}>
                  <AccordionTrigger>{item.problem}</AccordionTrigger>
                  <AccordionContent>{item.solution}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Account Types */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Account Types & Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Free Account</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Basic VPN protection</li>
                    <li>Limited server selection</li>
                    <li>Standard connection speeds</li>
                    <li>Basic customer support</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Premium Account</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Access to all global servers</li>
                    <li>Unlimited bandwidth</li>
                    <li>Priority customer support</li>
                    <li>Multi-device protection (up to 5)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Security & Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Security & Privacy Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Military-grade encryption</li>
              <li>Kill switch protection</li>
              <li>DNS leak protection</li>
              <li>No-logs policy</li>
            </ul>
          </section>

          {/* Getting Started Checklist */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Getting Started Checklist</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Immediate Actions</h3>
                <ul className="list-none space-y-2">
                  {["Complete email verification", "Grant VPN permissions", "Test first connection", "Explore server locations", "Set up referral sharing"].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Recommended Settings</h3>
                <ul className="list-none space-y-2">
                  {["Enable auto-connect", "Configure kill switch", "Set favorite servers", "Enable notifications", "Review privacy settings"].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Advanced Tips */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Advanced Tips</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">For Best Speeds</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Use "Fastest Server" for automatic optimization</li>
                  <li>Choose servers closest to your location</li>
                  <li>Connect via Wi-Fi when possible</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">For Streaming</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Select servers in the streaming service's country</li>
                  <li>Use premium subscription for better performance</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Getting Support */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Getting Support</h2>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <p>Email: <a href="mailto:Novixvpna@gmail.com" className="text-blue-600 hover:underline">Novixvpna@gmail.com</a></p>
            </div>
            <p className="mt-2">Response time: Usually within 24 hours</p>
          </section>

          <Separator className="my-8" />
          <p className="text-center text-sm text-muted-foreground">
            Last updated: September 2025. Screenshots and interface may vary slightly based on app version and Android device.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}