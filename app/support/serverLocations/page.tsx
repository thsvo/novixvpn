import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Mail, Globe, Shield, Star } from "lucide-react";

export default function ServerLocations() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Server Locations
          </CardTitle>
          <p className="text-center text-muted-foreground mt-2">
            Access Novix VPN's global network of high-speed servers for optimal performance and content access.
          </p>
        </CardHeader>
        <CardContent>
          {/* Understanding Novix VPN Server Network */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Understanding Novix VPN Server Network</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Global Server Infrastructure</h3>
                <ul className="list-none space-y-2">
                  {[
                    "Worldwide coverage across continents",
                    "High-speed, low-latency connections",
                    "WireGuard-optimized servers",
                    "24/7 monitoring for performance",
                    "Scalable network with regular expansion",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Server Distribution</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>North America: US and Canada</li>
                  <li>Europe: Major European countries</li>
                  <li>Asia-Pacific: Key Asian markets</li>
                  <li>Other Regions: Global coverage</li>
                  <li>Streaming Optimized: Dedicated media servers</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Accessing Server Locations */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Accessing Server Locations</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Server Selection in Novix VPN</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Locate "Current Server: Fastest Server" on main screen</li>
                  <li>Tap server area to browse locations</li>
                  <li>Select country or city</li>
                  <li>Tap "Secure Now" to connect</li>
                </ol>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">"Fastest Server" Feature</h3>
                <p>Automatically selects optimal server based on distance, load, and performance.</p>
              </div>
            </div>
          </section>

          {/* Server Categories and Purposes */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Server Categories and Purposes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "General Purpose",
                  desc: "Servers in major cities and internet hubs for everyday use.",
                  icon: <Globe className="h-6 w-6 text-blue-500" />,
                },
                {
                  title: "Streaming",
                  desc: "Optimized for Netflix, YouTube, and regional services.",
                  icon: <Star className="h-6 w-6 text-yellow-500" />,
                },
                {
                  title: "Privacy",
                  desc: "Located in privacy-friendly jurisdictions like Switzerland.",
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
              <h3 className="text-lg font-medium mb-2">Typical Server Locations</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>United States: New York, Los Angeles, Chicago</li>
                <li>United Kingdom: London, Manchester</li>
                <li>Germany: Frankfurt, Berlin</li>
                <li>Canada: Toronto, Vancouver</li>
                <li>Japan: Tokyo, Osaka</li>
              </ul>
            </div>
          </section>

          {/* Server Selection Strategies */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Server Selection Strategies</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="speed">
                <AccordionTrigger>Choosing Servers for Speed</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Choose servers close to your location</li>
                    <li>Select major cities with better infrastructure</li>
                    <li>Monitor server load (if displayed)</li>
                    <li>Test multiple servers for best performance</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="content">
                <AccordionTrigger>Choosing Servers for Content Access</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>US servers for Netflix, Hulu</li>
                    <li>UK servers for BBC iPlayer</li>
                    <li>Local servers for regional services</li>
                    <li>Test servers for specific content needs</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="privacy">
                <AccordionTrigger>Choosing Servers for Privacy</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Switzerland, Iceland for strong privacy laws</li>
                    <li>Avoid data retention countries</li>
                    <li>Select jurisdictions with minimal intelligence sharing</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Server Performance and Monitoring */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Server Performance and Monitoring</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Understanding Server Status</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Online status: Green for operational servers</li>
                  <li>Load: Lower percentage is better</li>
                  <li>Ping: Lower times for faster response</li>
                  <li>Throughput: Available bandwidth</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Real-Time Server Selection</h3>
                <p>Monitor performance, switch servers if needed, and use "Fastest Server" as a fallback.</p>
              </div>
            </div>
          </section>

          {/* Regional Server Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Regional Server Information</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="north-america">
                <AccordionTrigger>North American Servers</AccordionTrigger>
                <AccordionContent>
                  <p>US: New York, Los Angeles, Chicago; Canada: Toronto, Vancouver</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="europe">
                <AccordionTrigger>European Servers</AccordionTrigger>
                <AccordionContent>
                  <p>UK: London; Germany: Frankfurt; Netherlands: Amsterdam; Switzerland</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="asia-pacific">
                <AccordionTrigger>Asia-Pacific Servers</AccordionTrigger>
                <AccordionContent>
                  <p>Japan: Tokyo; Singapore; Australia: Sydney; Hong Kong</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Server Troubleshooting */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Server Troubleshooting</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  problem: "Specific Server Won't Connect",
                  solutions: [
                    "Try alternative server in same country",
                    "Check server status for maintenance",
                    "Switch networks",
                    "Restart app",
                    "Contact support",
                  ],
                },
                {
                  problem: "Slow Performance on Certain Servers",
                  solutions: [
                    "Select servers with lower load",
                    "Avoid peak hours",
                    "Choose closer servers",
                    "Try different cities",
                    "Use 'Fastest Server'",
                  ],
                },
                {
                  problem: "Can't Access Desired Content",
                  solutions: [
                    "Try multiple servers in target country",
                    "Clear browser cache",
                    "Use streaming-optimized servers",
                    "Contact support for dedicated IP",
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

          {/* Premium Server Features */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Premium Server Features</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Enhanced Server Access</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Priority bandwidth for premium users</li>
                  <li>Exclusive server locations</li>
                  <li>Optimized for streaming and gaming</li>
                  <li>Faster support for server issues</li>
                </ul>
                <Button className="mt-4">Start Free Trial</Button>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Server Expansion and Updates</h3>
                <p>New locations added regularly based on user demand and performance needs.</p>
              </div>
            </div>
          </section>

          {/* Getting Help with Servers */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Getting Help with Servers</h2>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <p>
                Email: <a href="mailto:Novixvpna@gmail.com" className="text-blue-600 hover:underline">Novixvpna@gmail.com</a>
              </p>
            </div>
            <p className="mt-2">Include server details, performance data, and usage context. Response within 24 hours.</p>
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">Server Requests and Feedback</h3>
              <p>Request new locations or report performance issues to improve the server network.</p>
            </div>
          </section>

          {/* Server Best Practices */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Server Best Practices</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Optimal Server Usage</h3>
                <ul className="list-none space-y-2">
                  {[
                    "Save favorite servers",
                    "Choose servers by purpose",
                    "Adjust for time of day",
                    "Rotate between servers",
                    "Test new servers regularly",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <Separator className="my-8" />
          <p className="text-center text-sm text-muted-foreground">
            Last updated: September 2025. Based on Novix VPN server network and features.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}