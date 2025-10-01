"use client";

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

export default function SpeedOptimization() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Speed Optimization
          </CardTitle>
          <p className="text-center text-muted-foreground mt-2">
            Maximize your Novix VPN speed for streaming, gaming, and browsing.
          </p>
        </CardHeader>
        <CardContent>
          {/* Understanding VPN Speed Impact */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Understanding VPN Speed Impact
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Why VPNs Affect Speed
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Encryption Overhead: Data processing for security</li>
                  <li>Server Distance: Longer travel time to far servers</li>
                  <li>Server Load: Crowded servers reduce speed</li>
                  <li>Routing: Data takes different paths via VPN</li>
                  <li>Protocol Efficiency: Varies by VPN protocol</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Expected Speed Impact
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Excellent: 5-15% reduction</li>
                  <li>Good: 15-30% reduction</li>
                  <li>Acceptable: 30-50% reduction</li>
                  <li>Poor: 50%+ reduction (needs optimization)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Novix VPN Speed Advantages
                </h3>
                <ul className="list-none space-y-2">
                  {[
                    "WireGuard Protocol: Fastest VPN protocol",
                    '"Fastest Server" Selection: Auto-optimizes',
                    "Global Server Network: Multiple options",
                    "Speed Test Integration: Built-in testing",
                    "Load Balancing: Distributes users",
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

          {/* Speed Testing and Baseline */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Speed Testing and Baseline
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Measuring Your Current Speed
                </h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    <strong>Without VPN:</strong> Disconnect VPN, test on
                    fast.com or speedtest.net
                  </li>
                  <li>
                    <strong>With VPN:</strong> Connect, use same test, compare
                    results
                  </li>
                  <li>
                    <strong>Built-in Testing:</strong> Use Advanced tab's speed
                    test tool
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Understanding Speed Test Results
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Download:</strong> &gt;50 Mbps for 4K, &gt;25 Mbps
                    for HD
                  </li>
                  <li>
                    <strong>Upload:</strong> &gt;10 Mbps for video calls
                  </li>
                  <li>
                    <strong>Ping:</strong> &lt;50ms for gaming, &lt;100ms for
                    general use
                  </li>
                  <li>
                    <strong>Jitter:</strong> Consistent connection quality
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Server Selection Optimization */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Server Selection Optimization
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Using "Fastest Server" Effectively
                </h3>
                <p>
                  Best for general browsing, auto-selects based on distance and
                  load.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Manual Server Selection
                </h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Tap "Fastest Server" area</li>
                  <li>Browse countries/cities</li>
                  <li>Prioritize nearby servers</li>
                  <li>Test major city servers</li>
                </ol>
                <p className="mt-2">
                  Look for low load, low ping, and major city infrastructure.
                </p>
              </div>
            </div>
          </section>

          {/* Connection Optimization Settings */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Connection Optimization Settings
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  App-Level Optimizations
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Use WireGuard protocol</li>
                  <li>Enable auto-connect</li>
                  <li>Adjust kill switch for speed</li>
                  <li>Use VPN DNS servers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Device-Level Optimizations
                </h3>
                <ul className="list-none space-y-2">
                  {[
                    "Close background apps",
                    "Pause app updates",
                    "Stop streaming apps",
                    "Pause cloud syncing",
                    "Delay system updates",
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
                  Network Interface Optimizations
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Use 5GHz Wi-Fi</li>
                  <li>Move closer to router</li>
                  <li>Test 4G/5G vs Wi-Fi</li>
                  <li>Avoid peak hours</li>
                  <li>Restart router</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Usage-Specific Speed Optimization */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Usage-Specific Speed Optimization
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="streaming">
                <AccordionTrigger>Streaming Optimization</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Choose servers in content's home country (e.g., US for
                    Netflix).
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>Ensure 25+ Mbps for 4K, 5+ Mbps for HD</li>
                    <li>Lower stream quality if buffering</li>
                    <li>Avoid peak hours</li>
                    <li>Use single device for streaming</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="gaming">
                <AccordionTrigger>Gaming Optimization</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Prioritize low ping (&lt;50ms) and servers near game
                    servers.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>Use stable servers</li>
                    <li>Test major city servers</li>
                    <li>Avoid peak hours</li>
                    <li>Use wired connection if possible</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="browsing">
                <AccordionTrigger>Browsing and General Use</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Use "Fastest Server", optimize DNS, and reduce browser
                    bandwidth.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Network-Specific Optimizations */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Network-Specific Optimizations
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Wi-Fi Network Optimization
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Place router centrally</li>
                  <li>Use 5GHz band</li>
                  <li>Prioritize VPN in QoS settings</li>
                  <li>Limit other devices' bandwidth</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Mobile Data Optimization
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Ensure strong signal</li>
                  <li>Use 5G/4G LTE</li>
                  <li>Check APN settings</li>
                  <li>Restrict background data</li>
                  <li>Download offline content</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Advanced Speed Techniques */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Advanced Speed Techniques
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Protocol and Technical Optimizations
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Use WireGuard protocol</li>
                  <li>Adjust MTU settings (if available)</li>
                  <li>Use VPN DNS or Google/Cloudflare DNS</li>
                  <li>Disable IPv6 if causing issues</li>
                  <li>Clear DNS cache</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Connection Management
                </h3>
                <ul className="list-none space-y-2">
                  {[
                    "Enable auto-connect",
                    "Configure auto-reconnect",
                    "Maintain persistent connections",
                    "Rotate servers regularly",
                    "Monitor server load",
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

          {/* Troubleshooting Speed Issues */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Troubleshooting Speed Issues
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Diagnosing Speed Problems
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Sudden Drop: Server overload or congestion</li>
                  <li>Consistently Slow: Poor server or network</li>
                  <li>Variable Speed: Network instability</li>
                  <li>App-Specific: Certain services slower with VPN</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Speed Improvement Strategies
                </h3>
                <ul className="list-none space-y-2">
                  {[
                    "Switch servers",
                    "Restart app",
                    "Change network",
                    "Close heavy apps",
                    "Restart router",
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

          {/* Monitoring and Maintenance */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Monitoring and Maintenance
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Performance Monitoring
                </h3>
                <p>
                  Run weekly speed tests, track server performance, and note
                  usage patterns.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Ongoing Optimization
                </h3>
                <ul className="list-none space-y-2">
                  {[
                    "Keep app updated",
                    "Test new servers",
                    "Review settings",
                    "Assess network",
                    "Adjust usage patterns",
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

          {/* Getting Help with Speed Issues */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Getting Help with Speed Issues
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
              Include speed test results, server locations, and troubleshooting
              steps. Response within 24 hours.
            </p>
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">
                Premium Speed Features
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Access premium servers</li>
                <li>Priority support</li>
                <li>Advanced optimization tools</li>
                <li>Dedicated bandwidth</li>
              </ul>
              <Button className="mt-4">Start Free Trial</Button>
            </div>
          </section>

          <Separator className="my-8" />
          <p className="text-center text-sm text-muted-foreground">
            Last updated: September 2025. Based on current network conditions
            and Novix VPN features.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
