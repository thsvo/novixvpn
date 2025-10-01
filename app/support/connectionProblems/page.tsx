import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Mail, Smartphone, Shield, Globe, Lock } from "lucide-react";

export default function ConnectionProblems() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Connection Problems
          </CardTitle>
          <p className="text-center text-muted-foreground mt-2">
            Troubleshoot and fix common Novix VPN connection issues with this guide.
          </p>
        </CardHeader>
        <CardContent>
          {/* Understanding Connection Status */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Understanding Connection Status</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Visual Status Indicators</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    {
                      title: "NOT CONNECTED",
                      desc: "No VPN protection, red text",
                      icon: <Lock className="h-6 w-6 text-red-500" />,
                    },
                    {
                      title: "CONNECTING...",
                      desc: "Establishing tunnel, loading state",
                      icon: <Globe className="h-6 w-6 text-blue-500" />,
                    },
                    {
                      title: "CONNECTED",
                      desc: "Full VPN protection, green text",
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
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Normal vs Problem Connections</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Normal:</strong> Connects in 3-5 seconds, green "CONNECTED", internet works</li>
                  <li><strong>Problem Indicators:</strong> Long connection time, stuck on "CONNECTING...", no internet</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Basic Connection Troubleshooting */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Basic Connection Troubleshooting</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Quick Fixes</h3>
                <ul className="list-none space-y-2">
                  {[
                    "Force close and reopen app",
                    "Toggle connection off/on",
                    "Restart app",
                    "Verify internet without VPN",
                    "Try different server",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Basic Diagnostics</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Test internet without VPN</li>
                  <li>Try 2-3 server locations</li>
                  <li>Switch between Wi-Fi and mobile data</li>
                  <li>Check VPN permission</li>
                  <li>Verify app is updated</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Specific Connection Problems */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Specific Connection Problems</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  problem: '"Secure Now" Button Not Working',
                  solutions: [
                    "Wait 5-10 seconds for app to load",
                    "Force close and reopen app",
                    "Restart device",
                    "Clear cache: Settings > Apps > Novix VPN > Storage",
                    "Reinstall app from Play Store",
                  ],
                },
                {
                  problem: 'Connection Stuck on "CONNECTING..."',
                  solutions: [
                    "Wait 30-60 seconds for slow networks",
                    "Cancel and retry connection",
                    "Change server location",
                    "Switch network (Wi-Fi/mobile data)",
                    "Restart app",
                  ],
                },
                {
                  problem: "Connection Fails Immediately",
                  solutions: [
                    "Ensure VPN permission granted",
                    "Try different servers",
                    "Restart app",
                    "Disable firewall/antivirus",
                    "Switch network",
                  ],
                },
                {
                  problem: "Connected But No Internet",
                  solutions: [
                    "Disconnect/reconnect VPN",
                    "Change server",
                    "Restart device for DNS refresh",
                    "Close conflicting apps",
                    "Toggle airplane mode",
                  ],
                },
                {
                  problem: "Frequent Disconnections",
                  solutions: [
                    "Disable battery optimization",
                    "Allow background activity",
                    "Enable auto-start",
                    "Check kill switch settings",
                    "Use stable server",
                  ],
                },
              ].map((item, index) => (
                <AccordionItem key={index} value={`problem-${index}`}>
                  <AccordionTrigger>{item.problem}</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      {item.solutions.map((solution, i) => (
                        <li key={i}>{solution}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Advanced Troubleshooting */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Advanced Troubleshooting</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Network-Related Issues</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Corporate/School:</strong> Try mobile data, contact network admin</li>
                  <li><strong>ISP Issues:</strong> Switch servers, use mobile data, contact ISP</li>
                  <li><strong>Public Wi-Fi:</strong> Complete Wi-Fi login, then connect VPN</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Device-Specific Issues</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Old Android versions: Upgrade if below 5.0</li>
                  <li>Manufacturer skins: Adjust Samsung/Xiaomi/Huawei settings</li>
                  <li>Low RAM/storage: Close apps, free space</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Conflicting Applications</h3>
                <p>Disable other VPNs, antivirus, or ad blockers temporarily to test.</p>
              </div>
            </div>
          </section>

          {/* Server-Specific Issues */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Server-Specific Issues</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">"Fastest Server" Issues</h3>
                <p>Manually select closer servers if auto-selection is slow or overcrowded.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Specific Server Problems</h3>
                <p>Try multiple servers in the same region if one is down or slow.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Optimizing Server Choice</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Speed:</strong> Choose nearby servers, avoid high load</li>
                  <li><strong>Reliability:</strong> Use established locations (US, UK, Canada)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Connection Optimization */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Connection Optimization</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Improving Connection Speed</h3>
                <ul className="list-none space-y-2">
                  {[
                    "Choose closest servers",
                    "Use Wi-Fi over mobile data",
                    "Close heavy apps",
                    "Avoid peak hours",
                    "Restart device",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Stability Improvements</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Optimize battery settings</li>
                  <li>Disable network switching</li>
                  <li>Enable auto-reconnect</li>
                  <li>Configure kill switch</li>
                </ul>
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
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">Self-Diagnosis Tools</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Advanced Tab: Check connection logs and speed test</li>
                <li>IP Check: Visit whatismyipaddress.com</li>
                <li>Speed Test: Use fast.com or speedtest.net</li>
                <li>DNS Test: Check dnsleaktest.com</li>
              </ul>
            </div>
          </section>

          {/* Emergency Connection Solutions */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Emergency Connection Solutions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Nuclear Options</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Clear app data: Settings > Apps > Novix VPN > Storage > Clear Data</li>
                  <li>Reset network: Settings > System > Reset > Network Settings</li>
                  <li>Factory reset (last resort)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Temporary Workarounds</h3>
                <p>Use different networks, manual servers, or browser privacy features.</p>
              </div>
            </div>
          </section>

          {/* Prevention and Maintenance */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Prevention and Maintenance</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Preventing Connection Problems</h3>
                <ul className="list-none space-y-2">
                  {[
                    "Keep app updated",
                    "Install Android updates",
                    "Maintain free storage",
                    "Monitor battery health",
                    "Use stable networks",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Monitoring Connection Health</h3>
                <p>Check status daily, monitor speed/stability, and track error patterns.</p>
              </div>
            </div>
          </section>

          <Separator className="my-8" />
          <p className="text-center text-sm text-muted-foreground">
            Last updated: September 2025. Based on common Android VPN issues and Novix VPN interface.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}