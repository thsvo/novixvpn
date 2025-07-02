// "use client";

// import { usePathname } from "next/navigation";
// import Script from "next/script";

// export default function HubspotLoader() {
//   const pathname = usePathname();

//   // List of routes where you DO NOT want HubSpot
//   const excludedRoutes = ["/terms-of-service", "/privacy-policy"];

//   if (excludedRoutes.includes(pathname)) {
//     return null; // do not load HubSpot
//   }

//   return (
//     <Script
//       id="hubspot-script"
//       strategy="afterInteractive"
//       src="//js-na2.hs-scripts.com/242560734.js"
//     />
//   );
// }

"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function HubspotLoader() {
  const pathname = usePathname();

  const excludedRoutes = ["/terms-of-service", "/privacy-policy"];

  useEffect(() => {
    const isExcluded = excludedRoutes.includes(pathname);

    if (isExcluded) {
      // REMOVE hubspot if it exists
      const hubspotScript = document.querySelector(
        'script[src*="hs-scripts.com"]'
      );
      if (hubspotScript) {
        hubspotScript.remove();
      }

      // remove HubSpot chat iframe
      const hubspotIframe = document.querySelector("iframe[src*='hubspot']");
      if (hubspotIframe) {
        hubspotIframe.remove();
      }

      // HubSpot sometimes injects its own root divs:
      const hubspotDiv = document.getElementById(
        "hubspot-conversations-iframe"
      );
      if (hubspotDiv) {
        hubspotDiv.remove();
      }

      return;
    }

    // if not excluded, inject hubspot
    const existing = document.querySelector('script[src*="hs-scripts.com"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "//js-na2.hs-scripts.com/242560734.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [pathname]);

  return null;
}
