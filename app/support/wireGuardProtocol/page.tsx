import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle2,
  Mail,
  Smartphone,
  Star,
  Shield,
  Globe,
  Lock,
} from "lucide-react";

export default function WireGuardProtocol() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            WireGuard Protocol
          </CardTitle>
          <p className="text-center text-muted-foreground mt-2">
            Experience the fastest and most secure VPN protocol with Novix VPN's
            default WireGuard implementation.
          </p>
        </CardHeader>
        <CardContent>
          {/* Understanding WireGuard */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Understanding WireGuard
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">What is WireGuard?</h3>
                <p>
                  A modern, high-performance VPN protocol designed for speed,
                  security, and simplicity.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Key WireGuard Advantages
                </h3>
                <ul className="list-none space-y-2">
                  {[
                    "3-5x faster than OpenVPN",
                    "Modern cryptography, smaller attack surface",
                    "Optimized for mobile battery life",
                    "Lightweight codebase (~4,000 lines)",
                    "Quick connections in 1-3 seconds",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Why Novix VPN Uses WireGuard
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Performance: Aligns with "Fast, Secure & Private" promise
                  </li>
                  <li>Android Optimization: Excellent mobile performance</li>
                  <li>Future-Proof: Latest VPN technology standard</li>
                  <li>
                    User Experience: Faster connections, better battery life
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* WireGuard in Novix VPN */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              WireGuard in Novix VPN
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Default Protocol Selection
                </h3>
                <p>
                  WireGuard is automatically selected for all connections,
                  requiring no user configuration.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Technical Specifications
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Encryption:</strong> ChaCha20, Poly1305
                    authentication
                  </li>
                  <li>
                    <strong>Key Exchange:</strong> Curve25519
                  </li>
                  <li>
                    <strong>Hashing:</strong> BLAKE2s
                  </li>
                  <li>
                    <strong>Performance:</strong> 1-3s connection, low latency,
                    high throughput
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* WireGuard Benefits for Users */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              WireGuard Benefits for Users
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Speed",
                  desc: "Fast connections, high throughput, low latency for streaming and gaming.",
                  icon: <Globe className="h-6 w-6 text-blue-500" />,
                },
                {
                  title: "Security",
                  desc: "Modern cryptography, quantum-resistant, perfect forward secrecy.",
                  icon: <Shield className="h-6 w-6 text-green-500" />,
                },
                {
                  title: "Battery Efficiency",
                  desc: "Optimized for mobile, minimal CPU and battery usage.",
                  icon: <Smartphone className="h-6 w-6 text-yellow-500" />,
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="p-4 flex flex-col items-center text-center"
                >
                  {item.icon}
                  <h3 className="text-lg font-medium mt-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* WireGuard vs Other Protocols */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              WireGuard vs Other Protocols
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="p-2">Feature</th>
                    <th className="p-2">WireGuard</th>
                    <th className="p-2">OpenVPN</th>
                    <th className="p-2">IKEv2</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Speed",
                      wireguard: "3-5x faster",
                      openvpn: "Standard",
                      ikev2: "Good",
                    },
                    {
                      feature: "Connection Time",
                      wireguard: "1-3s",
                      openvpn: "5-10s",
                      ikev2: "Good",
                    },
                    {
                      feature: "Battery Usage",
                      wireguard: "Very low",
                      openvpn: "Moderate",
                      ikev2: "Moderate",
                    },
                    {
                      feature: "Code Size",
                      wireguard: "~4,000 lines",
                      openvpn: "100,000+ lines",
                      ikev2: "Complex",
                    },
                    {
                      feature: "Security",
                      wireguard: "Modern crypto",
                      openvpn: "Proven but older",
                      ikev2: "Good",
                    },
                  ].map((row, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2">{row.feature}</td>
                      <td className="p-2">{row.wireguard}</td>
                      <td className="p-2">{row.openvpn}</td>
                      <td className="p-2">{row.ikev2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Using WireGuard in Novix VPN */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Using WireGuard in Novix VPN
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Automatic Operation
                </h3>
                <p>
                  WireGuard is the default protocol, activated by tapping
                  "Secure Now" with no additional setup.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Monitoring Performance
                </h3>
                <ul className="list-none space-y-2">
                  {[
                    "Check connection speed (1-3s)",
                    "Monitor throughput for streaming/downloads",
                    "Test stability over time",
                    "Compare battery usage",
                    "Evaluate app responsiveness",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Advanced WireGuard Features */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Advanced WireGuard Features
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="connectivity">
                <AccordionTrigger>Connection Management</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Automatic reconnection for drops</li>
                    <li>Seamless network roaming (Wi-Fi to mobile)</li>
                    <li>Persistent connections during sleep</li>
                    <li>Firewall and NAT compatibility</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="security">
                <AccordionTrigger>Security Features</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Automatic key rotation</li>
                    <li>Perfect forward secrecy</li>
                    <li>Full tunnel encryption</li>
                    <li>DNS leak prevention</li>
                    <li>IPv6 support</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* WireGuard Troubleshooting */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              WireGuard Troubleshooting
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  problem: "Slower Than Expected Performance",
                  solutions: [
                    "Try different servers",
                    "Test Wi-Fi vs mobile data",
                    "Close heavy apps",
                    "Restart device",
                    "Compare speeds without VPN",
                  ],
                },
                {
                  problem: "Connection Drops or Instability",
                  solutions: [
                    "Disable battery optimization",
                    "Use stable networks",
                    "Enable auto-reconnect",
                    "Reset network settings",
                    "Update app",
                  ],
                },
                {
                  problem: "Network Compatibility Issues",
                  solutions: [
                    "Test multiple servers",
                    "Switch networks",
                    "Contact support",
                    "Use mobile data",
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

          {/* Optimizing WireGuard Performance */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Optimizing WireGuard Performance
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Best Practices</h3>
                <ul className="list-none space-y-2">
                  {[
                    "Use 'Fastest Server' or nearby servers",
                    "Ensure strong network signal",
                    "Avoid peak hours",
                    "Close bandwidth-heavy apps",
                    "Keep app and system updated",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Advanced Configuration
                </h3>
                <p>
                  Monitor connection quality, rotate servers, and adapt usage
                  patterns for optimal performance.
                </p>
              </div>
            </div>
          </section>

          {/* Getting Help with WireGuard */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Getting Help with WireGuard
            </h2>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <p>
                Email:{" "}
                <a
                  href="mailto:Novixvpna@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  Novixvpna@gmail.com
                </a>
              </p>
            </div>
            <p className="mt-2">
              Include performance data, network details, and troubleshooting
              steps. Response within 24 hours.
            </p>
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">
                Premium WireGuard Features
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Optimized premium servers</li>
                <li>Priority routing</li>
                <li>Advanced monitoring tools</li>
                <li>Faster support</li>
              </ul>
              <Button className="mt-4">Start Free Trial</Button>
            </div>
          </section>

          {/* Future of WireGuard */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Future of WireGuard</h2>
            <p>
              Ongoing updates improve speed, security, and mobile integration
              for Novix VPN users.
            </p>
          </section>

          <Separator className="my-8" />
          <p className="text-center text-sm text-muted-foreground">
            Last updated: September 2025. Based on current WireGuard
            implementation and Novix VPN features.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
