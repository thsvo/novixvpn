import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import CountdownTimerClient from "@/components/shared/CountdownTimerClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Novix VPN - Secure, Fast & Reliable VPN Service",
  description:
    "Protect your online privacy with Novix VPN. Secure connections, unlimited bandwidth, and global server access.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        {/* HubSpot Embed Code */}
        {/* <Script
          id="hs-script-loader"
          strategy="afterInteractive"
          src="//js.hs-scripts.com/242560734.js"
        /> */}

        {/* Google tag (gtag.js) */}
        {/* <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-H3HZP0C6ED"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H3HZP0C6ED');
          `}
        </Script> */}

        <CountdownTimerClient />
      </body>
    </html>
  );
}
