import { Shield, Globe, EyeOff, Zap, Smartphone, User } from "lucide-react";

export default function VPNFeaturesGrid() {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Strong encryption",
      description:
        "Secure your internet connection on your phone with robust next-gen VPN encryption.",
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Global VPN server network",
      description:
        "More servers globally deliver a faster mobile connection and fewer interruptions.",
    },
    {
      icon: <EyeOff className="w-8 h-8 text-blue-600" />,
      title: "No user tracking",
      description:
        "NovixVPN doesn't track or sell your internet activity data to third parties.",
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Kill Switch",
      description:
        "With Kill Switch, you can protect your phone's traffic from being exposed if your VPN connection unexpectedly drops.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: "Protect multiple devices",
      description:
        "Secure a range of Android devices — from phones to smart TVs.",
    },
    {
      icon: <User className="w-8 h-8 text-blue-600" />,
      title: "User-friendly app",
      description:
        "The NovixVPN app for Android is easy to set up and simple to use. It's also available in dark mode.",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Get the best Android VPN features in one app
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Speed, security, privacy, and accessibility — an all-in-one package
          for Android phones and tablets.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:items-start"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-center md:text-left">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
