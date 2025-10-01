import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Mail, Smartphone, Shield, Globe, Lock } from "lucide-react";

export default function KillSwitchSetup() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Kill Switch Setup
          </CardTitle>
          <p className="text-center text-muted-foreground mt-2">
            Protect your privacy with Novix VPN's Kill Switch feature, ensuring no data leaks during connection drops.
          </p>
        </CardHeader>
        <CardContent>
          {/* Understanding Kill Switch Protection */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Understanding Kill Switch Protection</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">What is a Kill Switch?</h3>
                <p>A security feature that blocks internet access if the VPN connection drops, preventing data and IP leaks.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">How Kill Switch Works</h3>
                <ul className="list-none space-y-2">
                  {[
                    "Monitors VPN connection status",
                    "Detects connection drops instantly",
                    "Blocks all internet traffic",
                    "Prevents data leaks during reconnection",
                    "Restores access when VPN reconnects",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Why You Need Kill Switch</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>IP Address Protection: Hides real IP during drops</li>
                  <li>DNS Leak Prevention: Stops DNS bypass</li>
                  <li>Data Security: Protects sensitive information</li>
                  <li>Automatic: Works without user intervention</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Kill Switch in Novix VPN */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Kill Switch in Novix VPN</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Built-in Protection Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Free on all plans, auto-activates on drops</li>
                  <li>System-level protection for all traffic</li>
                  <li>Blocks DNS queries and IPv4/IPv6 traffic</li>
                  <li>Seamless background operation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Visual Indicators</h3>
                <p>Blue notification or "Network Unavailable" when activated; auto-restores on reconnection.</p>
              </div>
            </div>
          </section>

          {/* Enabling Kill Switch */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Enabling Kill Switch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Accessing Kill Switch Settings</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Tap Settings (⚙️) in bottom navigation</li>
                  <li>Go to Advanced or Security settings</li>
                  <li>Find Kill Switch in privacy/connection section</li>
                </ol>
                <p className="mt-2">Note: May be enabled by default; check current status.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Configuration Options</h3>
                <ul className="list-none space-y-2">
                  {[
                    "Toggle kill switch on/off",
                    "Enable auto-reconnect",
                    "Set notifications for activation",
                    "Whitelist apps (if available)",
                    "Allow manual override",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* How Kill Switch Protects You */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How Kill Switch Protects You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Without Kill Switch</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Real IP exposed</li>
                    <li>ISP sees activity</li>
                    <li>DNS leaks to ISP</li>
                    <li>Data traceable</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>With Kill Switch</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>All traffic blocked</li>
                    <li>No data leakage</li>
                    <li>Privacy maintained</li>
                    <li>Auto-reconnection</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Testing Your Kill Switch */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Testing Your Kill Switch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Manual Kill Switch Testing</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Connect VPN, verify "CONNECTED"</li>
                  <li>Visit whatismyipaddress.com, note VPN IP</li>
                  <li>Force close Novix VPN app</li>
                  <li>Try browsing; internet should be blocked</li>
                  <li>Reconnect VPN; internet should restore</li>
                </ol>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Interpreting Test Results</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Success:</strong> No internet access when disconnected</li>
                  <li><strong>Failure:</strong> Internet works, real IP exposed</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Kill Switch Troubleshooting */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Kill Switch Troubleshooting</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  problem: "Kill Switch Not Activating",
                  solutions: [
                    "Verify kill switch is enabled",
                    "Check VPN permissions",
                    "Reinstall app",
                    "Contact support",
                  ],
                },
                {
                  problem: "Internet Blocked When Connected",
                  solutions: [
                    "Disconnect/reconnect VPN",
                    "Change server",
                    "Restart app",
                    "Toggle airplane mode",
                    "Restart device",
                  ],
                },
                {
                  problem: "Blocking Wanted Traffic",
                  solutions: [
                    "Check app whitelist feature",
                    "Temporarily disable kill switch",
                    "Use stable network",
                    "Monitor connection",
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

          {/* Advanced Kill Switch Configuration */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Advanced Kill Switch Configuration</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Optimization for Different Uses</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Browsing:</strong> Full protection, no exceptions</li>
                  <li><strong>Work:</strong> Consider critical app whitelisting</li>
                  <li><strong>Streaming:</strong> Use stable servers, auto-reconnect</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">System Integration</h3>
                <p>Works at system VPN level, minimal battery impact, protects all apps.</p>
              </div>
            </div>
          </section>

          {/* Kill Switch Best Practices */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Kill Switch Best Practices</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Usage Recommendations</h3>
                <ul className="list-none space-y-2">
                  {[
                    "Keep kill switch always enabled",
                    "Test monthly",
                    "Use stable networks",
                    "Monitor connection status",
                    "Update app regularly",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Network Environment Considerations</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Home:</strong> Ensure router stability</li>
                  <li><strong>Public Wi-Fi:</strong> Critical for untrusted networks</li>
                  <li><strong>Mobile:</strong> Monitor signal strength</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Monitoring Kill Switch Activity */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Monitoring Kill Switch Activity</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Regular Monitoring</h3>
                <p>Check connection status, disconnection frequency, and recovery time.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Logging and Documentation</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Record disconnection times</li>
                  <li>Confirm kill switch activation</li>
                  <li>Note network conditions</li>
                  <li>Track recovery success</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Getting Help with Kill Switch */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Getting Help with Kill Switch</h2>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <p>
                Email: <a href="mailto:Novixvpna@gmail.com" className="text-blue-600 hover:underline">Novixvpna@gmail.com</a>
              </p>
            </div>
            <p className="mt-2">Include test results, device info, and disconnection patterns. Response within 24 hours.</p>
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">Premium Kill Switch Benefits</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>More stable servers</li>
                <li>Advanced configuration options</li>
                <li>Priority support</li>
                <li>Enhanced monitoring tools</li>
              </ul>
              <Button className="mt-4">Start Free Trial</Button>
            </div>
          </section>

          <Separator className="my-8" />
          <p className="text-center text-sm text-muted-foreground">
            Last updated: September 2025. Based on Novix VPN kill switch features.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}