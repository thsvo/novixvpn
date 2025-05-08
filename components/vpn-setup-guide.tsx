import Link from "next/link";
import { Download, Check, Shield, Globe, Smartphone, Lock } from "lucide-react";

export default function VPNSetupGuide() {
  const steps = [
    {
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      title: "Choose a Trusted VPN Provider",
      description:
        "Look for a reliable Android VPN with the best features suited for you, they could be— fast speeds, strong encryption, and a no-logs policy. NovixVPN— being one of the most advanced VPN providers— offers all of them.",
    },
    {
      icon: <Download className="w-10 h-10 text-blue-600" />,
      title: "Download the VPN App from Google Play Store or their website",
      description:
        'Open the Play Store on your Android device and search for your chosen VPN app (e.g.,"NovixVPN"). Tap Install and wait for the app to download. Some providers like NovixVPN also have a download/install option on their own websites.',
    },
    {
      icon: <Smartphone className="w-10 h-10 text-blue-600" />,
      title: "Open the App and Sign In",
      description:
        "Launch the app and log in using your credentials. If you're new, you can usually start with a free trial or subscribe to a monthly or annual plan.",
    },
    {
      icon: <Globe className="w-10 h-10 text-blue-600" />,
      title: "Connect to a VPN Server",
      description: "Choose a server location based on your needs:",
      bullets: [
        "For speed: select a local server (e.g., Netherlands, if you are from EU).",
        "For content: pick a location to unlock region-specific services (e.g., US/UK, for services offered only for US or UK residents).",
      ],
    },
    {
      icon: <Lock className="w-10 h-10 text-blue-600" />,
      title: "Enable Kill Switch for VPN (Optional but Recommended)",
      description:
        "Most top-tier VPNs, including NovixVPN, let you enable kill-switch protection that keeps you safe even if the VPN disconnects unexpectedly.",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Step-by-Step: Install and Set Up a VPN on Android
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
      </div>

      <div className="grid gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-6 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex-shrink-0 flex items-start">
              <div className="bg-blue-50 p-4 rounded-full">{step.icon}</div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <span className="flex items-center justify-center bg-blue-600 text-white rounded-full w-7 h-7 text-sm font-bold mr-3">
                  {index + 1}
                </span>
                {step.title}
              </h3>
              <p className="text-gray-600 mb-3">{step.description}</p>
              {step.bullets && (
                <ul className="space-y-2 pl-6">
                  {step.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
