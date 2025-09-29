import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Lock,
  User,
} from "lucide-react";

export default function CreateYourAccount() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Create Your Novix VPN Account
          </CardTitle>
          <p className="text-center text-muted-foreground mt-2">
            Get started in 3 simple steps. Create your account in under 2
            minutes for secure, private browsing.
          </p>
        </CardHeader>
        <CardContent>
          {/* Account Creation Flow */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Account Creation Flow
            </h2>
            <ol className="list-decimal pl-5 space-y-4">
              <li>
                <strong>Launch Novix VPN</strong>
                <p>
                  Open the app (blue arrow logo on starry background) to see the
                  "Create your account" screen.
                </p>
              </li>
              <li>
                <strong>Enter Email Address</strong>
                <p>
                  Use a valid email (e.g., name@example.com). Optionally enter a
                  referral code for bonus coins.
                </p>
              </li>
              <li>
                <strong>Choose Sign-Up Method</strong>
                <p>
                  Tap "Continue" for email signup or "Continue With Google".
                  Existing users tap "Login".
                </p>
              </li>
            </ol>
          </section>

          {/* Email Verification Process */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Email Verification Process
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Verify Your Email</h3>
                <p>
                  Enter the 6-digit code sent to your email. Check spam/junk if
                  not received.
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Wait 2-3 minutes for email delivery</li>
                  <li>Tap "Resend Code" if needed</li>
                  <li>Verify email address was entered correctly</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Enter Verification Code
                </h3>
                <p>
                  Input the 6-digit code from the Novix VPN email into the six
                  boxes provided.
                </p>
              </div>
            </div>
          </section>

          {/* Password Creation */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Password Creation</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Create a Strong Password
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Minimum 8 characters</li>
                  <li>Mix of uppercase and lowercase letters</li>
                  <li>Include numbers and special characters</li>
                  <li>Avoid personal information or reused passwords</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Complete Account Creation
                </h3>
                <p>
                  Agree to Terms of Service and tap "Create Account" to finish
                  setup.
                </p>
              </div>
            </div>
          </section>

          {/* Alternative Sign-Up Methods */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Alternative Sign-Up Methods
            </h2>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Google Account Registration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Tap "Continue With Google", select your account, and grant
                  permissions for faster signup.
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>No email verification required</li>
                  <li>Secure authentication via Google</li>
                  <li>Easy account recovery</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Account Dashboard & Features */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Understanding Your New Account
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: <Smartphone className="h-6 w-6" />,
                  title: "Home Tab",
                  desc: "Main connection interface",
                },
                {
                  icon: <Star className="h-6 w-6" />,
                  title: "Refer Tab",
                  desc: "Earn coins through referrals",
                },
                {
                  icon: <Shield className="h-6 w-6" />,
                  title: "Settings Tab",
                  desc: "Manage account and preferences",
                },
                {
                  icon: <Lock className="h-6 w-6" />,
                  title: "Advanced Tab",
                  desc: "Connection settings and tools",
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

          {/* Coin & Rewards System */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Coin & Rewards System
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Understanding Coins
                </h3>
                <p>
                  Earn coins through referrals and activities to exchange for
                  free VPN time.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Referral Program</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Invite 3 friends: Unlock 7 days free VPN</li>
                  <li>
                    Share with 30 friends: Get 1 week free and 2000 points
                  </li>
                </ul>
                <Button className="mt-4">Refer & Get FREE VPN</Button>
              </div>
            </div>
          </section>

          {/* Account Settings & Management */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Account Settings & Management
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="settings">
                <AccordionTrigger>Accessing Settings</AccordionTrigger>
                <AccordionContent>
                  <p>Tap the Settings tab (gear icon) to manage:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Change password or email</li>
                    <li>View subscription status</li>
                    <li>Claim extra bonuses</li>
                    <li>Access FAQ and tutorials</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Subscription Options */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Subscription Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Free Account</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Basic VPN protection</li>
                    <li>Limited server access</li>
                    <li>Standard speeds</li>
                    <li>Ad-supported</li>
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
                    <li>Priority speeds</li>
                    <li>Premium support</li>
                    <li>Start trial from main screen</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Login Process */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Login Process for Returning Users
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Login Steps</h3>
                <p>
                  Enter your email and password, then tap "Login" to access your
                  account.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Password Recovery</h3>
                <p>
                  Tap "Forgot Password?", enter your email, and follow the reset
                  instructions.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Support */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
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
            <p className="mt-2">Response time: Usually within 24 hours</p>
          </section>

          {/* Troubleshooting */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Troubleshooting Account Creation
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  problem: "Email verification code not received",
                  solution:
                    "Check spam/junk, wait 2-3 minutes, or tap 'Resend Code'.",
                },
                {
                  problem: "Email already exists",
                  solution:
                    "Use 'Login' or 'Forgot Password?' to access your account.",
                },
                {
                  problem: "Google sign-in not working",
                  solution:
                    "Check Google account, internet, or clear Play Services cache.",
                },
                {
                  problem: "Weak password error",
                  solution:
                    "Use 8+ characters with mixed case, numbers, and symbols.",
                },
                {
                  problem: "Terms & Privacy checkbox issues",
                  solution:
                    "Must check to agree; read terms or contact support.",
                },
              ].map((item, index) => (
                <AccordionItem key={index} value={`trouble-${index}`}>
                  <AccordionTrigger>{item.problem}</AccordionTrigger>
                  <AccordionContent>{item.solution}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Post-Registration Setup */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Post-Registration Setup
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Immediate Next Steps
                </h3>
                <ul className="list-none space-y-2">
                  {[
                    "Explore main interface",
                    "Test VPN connection",
                    "Check server options",
                    "Set up referrals",
                    "Configure preferences",
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

          <Separator className="my-8" />
          <p className="text-center text-sm text-muted-foreground">
            Last updated: September 2025. Interface may vary slightly with app
            updates.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
