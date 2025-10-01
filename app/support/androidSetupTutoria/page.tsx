import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Mail, Smartphone, Star, Shield, Globe, Lock } from "lucide-react";

export default function AndroidSetupTutorial() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Android Setup Tutorial
          </CardTitle>
          <p className="text-center text-muted-foreground mt-2">
            Complete guide to setting up Novix VPN on your Android device in just a few steps.
          </p>
        </CardHeader>
        <CardContent>
          {/* Pre-Setup Requirements */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Pre-Setup Requirements</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">System Compatibility Check</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Android Version:</strong> Minimum Android 5.0, recommended 7.0+</li>
                  <li><strong>Supported Versions:</strong> Android 8.0 to 14</li>
                  <li><strong>Architecture:</strong> ARM, ARM64, x86 devices</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Device Requirements</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>RAM: Minimum 1GB, 2GB+ recommended</li>
                  <li>Storage: At least 50MB free space</li>
                  <li>Internet: Active Wi-Fi or mobile data</li>
                  <li>Google Services: Google Play Store access</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Before You Begin</h3>
                <ul className="list-none space-y-2">
                  {[
                    "Ensure internet connectivity",
                    "Maintain 20%+ battery",
                    "Free up storage space",
                    "Update Google Play Store",
                    "Prepare email address",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Step 1: Download and Installation */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Step 1: Download and Installation</h2>
            <ol className="list-decimal pl-5 space-y-4">
              <li>
                <strong>Open Google Play Store</strong>
                <p>Tap the Play Store icon and ensure you're signed in.</p>
              </li>
              <li>
                <strong>Search for Novix VPN</strong>
                <p>Type "Novix VPN" in the search bar.</p>
              </li>
              <li>
                <strong>Identify the Correct App</strong>
                <p>Look for the blue arrow logo, verify developer as Novix VPN.</p>
              </li>
              <li>
                <strong>Install the Application</strong>
                <p>Tap "Install", review permissions, and accept to download (30-60 seconds).</p>
              </li>
              <li>
                <strong>Launch the App</strong>
                <p>Tap "Open" or find the app icon in your app drawer.</p>
              </li>
            </ol>
          </section>

          {/* Step 2: Initial App Launch */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Step 2: Initial App Launch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">App Startup Sequence</h3>
                <p>Expect a starry splash screen followed by the "Create your account" interface.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Welcome Screen Elements</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Header: "Create your account"</li>
                  <li>Subtitle: "Join Novix VPN in 3 simple steps"</li>
                  <li>Progress Bar: Shows Email step</li>
                  <li>Step Icons: Email, Verification, Password</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Step 3: Account Creation Process */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Step 3: Account Creation Process</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="email">
                <AccordionTrigger>Email Registration</AccordionTrigger>
                <AccordionContent>
                  <p>Enter a valid email address and optional referral code, then tap "Continue" or "Continue With Google".</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="verification">
                <AccordionTrigger>Email Verification</AccordionTrigger>
                <AccordionContent>
                  <p>Enter the 6-digit code sent to your email. Check spam/junk if not received.</p>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>Wait 2-5 minutes for delivery</li>
                    <li>Use "Resend Code" if needed</li>
                    <li>Verify email address accuracy</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="password">
                <AccordionTrigger>Password Creation</AccordionTrigger>
                <AccordionContent>
                  <p>Create a strong password (8+ characters, mixed case, numbers, symbols).</p>
                  <p>Check "I agree to Terms of Service" and tap "Create Account".</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Step 4: Initial App Configuration */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Step 4: Initial App Configuration</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Granting VPN Permissions</h3>
                <p>Tap "OK" in the Android VPN permission dialog. Grant manually if denied.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Main Interface</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Coin Balance: e.g., "12,345"</li>
                  <li>Action Buttons: "Start Free Trial", "Refer & Get FREE VPN"</li>
                  <li>"Secure Now" Button: Central power icon</li>
                  <li>Status: "NOT CONNECTED" in red</li>
                  <li>Server: "Fastest Server" with globe icon</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Step 5: Making Your First Connection */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Step 5: Making Your First Connection</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Connection Process</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Confirm "NOT CONNECTED" status</li>
                  <li>Tap "Secure Now" button</li>
                  <li>Wait 3-5 seconds for connection</li>
                  <li>Verify green "CONNECTED" status</li>
                </ol>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Server Selection</h3>
                <p>Tap "Fastest Server" to choose specific locations. Use nearby servers for speed or specific countries for content.</p>
              </div>
            </div>
          </section>

          {/* Step 6: Exploring App Features */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Step 6: Exploring App Features</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Settings Configuration</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Auto-Connect: Enable on app start</li>
                  <li>Notifications: Set connection alerts</li>
                  <li>Battery Optimization: Allow background activity</li>
                  <li>Kill Switch: Block internet if VPN drops</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Referral System Setup</h3>
                <p>Tap "Refer & Get FREE VPN" to share links and earn coins for free VPN time.</p>
                <Button className="mt-4">Refer & Get FREE VPN</Button>
              </div>
            </div>
          </section>

          {/* Android Version-Specific Setup */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Android Version-Specific Setup</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  title: "Android 10-14",
                  desc: "Enhanced permissions, disable battery optimization, exclude from data saver.",
                  icon: <Smartphone className="h-6 w-6" />,
                },
                {
                  title: "Android 8-9",
                  desc: "Allow background activity, configure notifications, optimize location services.",
                  icon: <Globe className="h-6 w-6" />,
                },
                {
                  title: "Android 6-7",
                  desc: "Manually grant permissions, whitelist from Doze mode.",
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

          {/* Device-Specific Configurations */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Device-Specific Configurations</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="samsung">
                <AccordionTrigger>Samsung Devices</AccordionTrigger>
                <AccordionContent>
                  <p>Exclude from Smart Manager, avoid Game Launcher, add to Edge Panels.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="xiaomi">
                <AccordionTrigger>Xiaomi/MIUI Devices</AccordionTrigger>
                <AccordionContent>
                  <p>Enable autostart, exclude from battery saver, allow notifications.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="oneplus">
                <AccordionTrigger>OnePlus/OxygenOS</AccordionTrigger>
                <AccordionContent>
                  <p>Allow auto-launch, exclude from gaming mode, optimize battery settings.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="huawei">
                <AccordionTrigger>Huawei/EMUI Devices</AccordionTrigger>
                <AccordionContent>
                  <p>Add to protected apps, enable manual launch, ignore battery optimizations.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Troubleshooting Common Setup Issues */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Troubleshooting Common Setup Issues</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  problem: '"App not installed" error',
                  solution: "Ensure 100MB free space, clear Play Store cache, restart device.",
                },
                {
                  problem: "Can't find app in Play Store",
                  solution: "Search 'Novix VPN', update Play Store, or download APK from official site.",
                },
                {
                  problem: "Email verification not received",
                  solution: "Check spam, wait 2-5 minutes, resend code, or try another email.",
                },
                {
                  problem: "Password strength issues",
                  solution: "Use 8+ characters, mix case, numbers, symbols, avoid common words.",
                },
                {
                  problem: "VPN permission denied",
                  solution: "Manually enable in Settings > Apps > Novix VPN > Permissions.",
                },
                {
                  problem: "Connection fails repeatedly",
                  solution: "Check internet, try different servers, switch network, update app.",
                },
              ].map((item, index) => (
                <AccordionItem key={index} value={`trouble-${index}`}>
                  <AccordionTrigger>{item.problem}</AccordionTrigger>
                  <AccordionContent>{item.solution}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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

          {/* Post-Setup Optimization */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Post-Setup Optimization</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Performance Tuning</h3>
                <ul className="list-none space-y-2">
                  {[
                    "Enable auto-connect",
                    "Save favorite servers",
                    "Configure notifications",
                    "Optimize battery settings",
                    "Enable auto-updates",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Security Enhancement</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Enable kill switch</li>
                  <li>Use VPN DNS servers</li>
                  <li>Auto-connect on public Wi-Fi</li>
                  <li>Keep app updated</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Usage Habits</h3>
                <p>Connect daily, test servers, share referrals, and try the premium trial.</p>
              </div>
            </div>
          </section>

          <Separator className="my-8" />
          <p className="text-center text-sm text-muted-foreground">
            Last updated: September 2025. Based on current Android versions and Novix VPN interface.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}