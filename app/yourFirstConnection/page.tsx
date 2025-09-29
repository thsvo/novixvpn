import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Mail, Smartphone, Star, Shield, Globe, Lock } from "lucide-react";

export default function YourFirstConnection() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Your First Connection to Novix VPN
          </CardTitle>
          <p className="text-center text-muted-foreground mt-2">
            Connect instantly with one tap. Get protected in seconds with Novix VPN.
          </p>
        </CardHeader>
        <CardContent>
          {/* Understanding the Main Interface */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Understanding the Main Interface</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Main Connection Screen Layout</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Top Status Bar:</strong> Coin balance (e.g., 12,345 coins)</li>
                  <li><strong>Action Buttons:</strong> "Start Free Trial" and "Refer & Get FREE VPN"</li>
                  <li><strong>Central Connection Area:</strong> "Secure Now" button with power icon</li>
                  <li><strong>Connection Status:</strong> "NOT CONNECTED" in red</li>
                  <li><strong>World Map Background:</strong> Subtle global network visualization</li>
                  <li><strong>Server Information:</strong> "Current Server: Fastest Server"</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Bottom Navigation Overview</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { icon: <Globe className="h-6 w-6" />, title: "Advanced Tab", desc: "Connection tools and diagnostics" },
                    { icon: <Smartphone className="h-6 w-6" />, title: "Home Tab", desc: "Main connection interface" },
                    { icon: <Star className="h-6 w-6" />, title: "Refer Tab", desc: "Referral rewards and coins" },
                    { icon: <Shield className="h-6 w-6" />, title: "Settings Tab", desc: "Account and app configuration" },
                  ].map((item, index) => (
                    <Card key={index} className="p-4 flex flex-col items-center text-center">
                      {item.icon}
                      <h3 className="text-lg font-medium mt-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Making Your First Connection */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Making Your First Connection</h2>
            <ol className="list-decimal pl-5 space-y-4">
              <li>
                <strong>Prepare for Connection</strong>
                <p>Ensure you're on the Home tab and have internet connectivity.</p>
              </li>
              <li>
                <strong>Initiate Connection</strong>
                <p>Tap the "Secure Now" button with the blue power icon.</p>
              </li>
              <li>
                <strong>Grant VPN Permission</strong>
                <p>Tap "OK" or "Allow" in the Android system dialog (first time only).</p>
              </li>
              <li>
                <strong>Connection Established</strong>
                <p>Status changes to "CONNECTED" in green within 3-5 seconds.</p>
              </li>
            </ol>
          </section>

          {/* Server Selection Options */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Server Selection Options</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Default "Fastest Server"</h3>
                <p>Automatically selects the optimal server for speed and stability.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Manual Server Selection</h3>
                <p>Tap "Fastest Server" to choose specific countries or cities.</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li><strong>Streaming:</strong> Select servers in content's home country</li>
                  <li><strong>Speed:</strong> Choose nearby servers</li>
                  <li><strong>Privacy:</strong> Use servers in privacy-friendly countries</li>
                  <li><strong>Gaming:</strong> Prioritize low-latency servers</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Connection Status Indicators */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Connection Status Indicators</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  title: "Disconnected",
                  desc: '"NOT CONNECTED" in red, no protection active',
                  icon: <Lock className="h-6 w-6 text-red-500" />,
                },
                {
                  title: "Connecting",
                  desc: '"CONNECTING..." with loading animation, 3-5 seconds',
                  icon: <Globe className="h-6 w-6 text-blue-500" />,
                },
                {
                  title: "Connected",
                  desc: '"CONNECTED" in green, full protection active',
                  icon: <Shield className="h-6 w-6 text-green-500" />,
                },
              ].map((item, index) => (
                <Card key={index} className="p-4 flex flex-col items-center text-center">
                  {item.icon}
                  <h3 className="text-lg font-medium mt-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">Connection Information</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>New IP Address: Masked public IP</li>
                <li>Server Location: Connected country/city</li>
                <li>Connection Duration: Time connected</li>
                <li>Protocol Used: WireGuard (default)</li>
                <li>Security Status: Encryption confirmation</li>
              </ul>
            </div>
          </section>

          {/* Maximizing Your Free Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Maximizing Your Free Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Free Account</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Limited server selection</li>
                    <li>Standard speeds</li>
                    <li>Ad-supported</li>
                    <li>Basic features</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Premium Trial</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>All global servers</li>
                    <li>Maximum speeds</li>
                    <li>Ad-free experience</li>
                    <li>Advanced security</li>
                  </ul>
                  <Button className="mt-4">Start Free Trial</Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Referral System Integration */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Referral System Integration</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Earning Coins</h3>
                <p>Tap "Refer & Get FREE VPN" or go to Refer tab to track progress.</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Invite 3 friends: Unlock 7 days free VPN</li>
                  <li>Share with 30 friends: Get 1 week free + 2000 points</li>
                </ul>
              </div>
              <Button className="mt-4">Refer & Get FREE VPN</Button>
            </div>
          </section>

          {/* Connection Verification */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Connection Verification</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Check Your Status</h3>
                <ul className="list-none space-y-2">
                  {[
                    'Status: Green "CONNECTED"',
                    "Server location confirmed",
                    "Connection timer active",
                    "Security indicators visible",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">External Verification</h3>
                <p>Visit whatismyipaddress.com to confirm your new IP and server location.</p>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Troubleshooting First Connection</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  problem: "VPN Permission Denied",
                  solution: "Go to Settings > Apps > Novix VPN > Permissions and enable VPN access.",
                },
                {
                  problem: "Connection Fails Immediately",
                  solution: "Check internet, try Wi-Fi, restart app, or select another server.",
                },
                {
                  problem: '"Secure Now" Button Not Responding',
                  solution: "Check for updates, clear cache, or restart the app.",
                },
                {
                  problem: "Connected but No Internet",
                  solution: "Disconnect/reconnect, try different server, or switch network.",
                },
              ].map((item, index) => (
                <AccordionItem key={index} value={`trouble-${index}`}>
                  <AccordionTrigger>{item.problem}</AccordionTrigger>
                  <AccordionContent>{item.solution}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Advanced Connection Features */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Advanced Connection Features</h2>
            <p>Access the Advanced tab for:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Connection speed testing</li>
              <li>Protocol selection</li>
              <li>DNS configuration</li>
              <li>Kill switch settings</li>
              <li>Connection logs</li>
            </ul>
          </section>

          {/* Optimizing Your First Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Optimizing Your First Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Performance Tips</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Use "Fastest Server" for best performance</li>
                  <li>Connect via Wi-Fi for stability</li>
                  <li>Close bandwidth-heavy apps</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Battery Optimization</h3>
                <p>Disable battery optimization in Settings > Apps > Novix VPN > Battery.</p>
              </div>
            </div>
          </section>

          {/* Understanding the Coin System */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Understanding the Coin System</h2>
            <p>Earn coins through daily connections, referrals, and activities to unlock free VPN time.</p>
          </section>

          {/* Settings Integration */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Settings Integration</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Auto-Connect:</strong> Connect on app launch</li>
              <li><strong>Kill Switch:</strong> Block internet if VPN drops</li>
              <li><strong>Notifications:</strong> Alerts for connection changes</li>
              <li><strong>Server Favorites:</strong> Save preferred servers</li>
            </ul>
          </section>

          {/* What Happens When Connected */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What Happens When Connected</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Security Improvements</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>End-to-end encryption</li>
                  <li>IP address masking</li>
                  <li>ISP cannot see browsing activity</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Managing Changes</h3>
                <p>Use servers in your home country for banking or streaming-specific servers.</p>
              </div>
            </div>
          </section>

          {/* Building Good VPN Habits */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Building Good VPN Habits</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Stay Connected For</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Public Wi-Fi</li>
                  <li>General browsing</li>
                  <li>Shopping or sensitive activities</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Monitor Connection</h3>
                <p>Regularly check green "CONNECTED" status and server location.</p>
              </div>
            </div>
          </section>

          {/* Getting Help */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Getting Help</h2>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <p>
                Email: <a href="mailto:Novixvpna@gmail.com" className="text-blue-600 hover:underline">Novixvpna@gmail.com</a>
              </p>
            </div>
            <p className="mt-2">Response time: Usually within 24 hours</p>
          </section>

          {/* Success Indicators */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Success Indicators</h2>
            <ul className="list-none space-y-2">
              {[
                'Green "CONNECTED" status',
                "Correct server location",
                "Active connection timer",
                "No error messages",
                "IP address changed",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Next Steps */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Next Steps After First Connection</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Immediate Actions</h3>
                <ul className="list-none space-y-2">
                  {[
                    "Test different servers",
                    "Explore referral program",
                    "Configure auto-connect",
                    "Try premium trial",
                    "Invite friends",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Weekly & Monthly Goals</h3>
                <p>Connect daily, try new servers, and build your referral network.</p>
              </div>
            </div>
          </section>

          <Separator className="my-8" />
          <p className="text-center text-sm text-muted-foreground">
            Last updated: September 2025. Interface may vary with app updates.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}