// "use client";

// import { useEffect, useState } from "react";
// import { Dialog, DialogContent } from "@/components/ui/dialog";

// const DownloadVPNDialog: React.FC = () => {
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setOpen(true);
//     }, 10000); // 10 seconds delay
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogContent className="max-w-xl p-0 overflow-hidden rounded-xl border-none shadow-lg animate-slideDown">
//         <div className="bg-white flex flex-col md:flex-row items-center p-6 gap-6">
//           {/* Left Side Text */}
//           <div className="flex-1">
//             <p className="text-green-700 font-semibold text-sm mb-2">
//               BEFORE YOU GO!
//             </p>
//             <h2 className="text-2xl font-bold text-gray-800 leading-snug">
//               TRY OUR 100%
//               <br />
//               FREE VPN
//             </h2>
//             <ul className="mt-4 space-y-2 text-gray-700 text-sm">
//               {/* <li>✅ Access to 5 locations for free</li> */}
//               <li>✅ Connect to 5 trusted global servers</li>
//               <li>✅ 48-hour money-back guarantee</li>
//               <li>✅ No registration or personal data</li>
//               <li>✅ No limits on traffic, bandwidth, or time</li>
//             </ul>
//           </div>

//           {/* Right Side Logo + Button */}
//           <div className="flex flex-col items-center">
//             <img src="/novix-logo.webp" alt="VPN Logo" className="h-24 mb-4" />
//             <button
//               onClick={() =>
//                 (window.location.href =
//                   "https://play.google.com/store/apps/details?id=com.novix.mobile")
//               }
//               className="bg-red-500 hover:bg-red-600 text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-md flex items-center gap-2"
//             >
//               DOWNLOAD NOW <span className="text-lg">➔</span>
//             </button>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default DownloadVPNDialog;

"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { usePathname } from "next/navigation";

const DownloadVPNDialog: React.FC = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Do not show on excluded routes
    if (pathname === "/terms-of-service" || pathname === "/privacy-policy")
      return;

    const timer = setTimeout(() => {
      setOpen(true);
    }, 20000); // 20 seconds delay

    return () => clearTimeout(timer);
  }, [pathname]);

  // If on excluded routes, don't render the dialog at all
  if (
    pathname === "/terms-of-service" ||
    pathname === "/privacy-policy" ||
    pathname === "/register" ||
    pathname === "/login"
  ) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-xl p-0 overflow-hidden rounded-xl border-none shadow-lg animate-slideDown">
        <div className="bg-white flex flex-col md:flex-row items-center p-6 gap-6">
          {/* Left Side Text */}
          <div className="flex-1">
            <p className="text-green-700 font-semibold text-sm mb-2">
              BEFORE YOU GO!
            </p>
            <h2 className="text-2xl font-bold text-gray-800 leading-snug">
              TRY OUR 100%
              <br />
              FREE VPN
            </h2>
            <ul className="mt-4 space-y-2 text-gray-700 text-sm">
              <li>✅ Connect to 5 trusted global servers</li>
              <li>✅ 48-hour money-back guarantee</li>
              <li>✅ No registration or personal data</li>
              <li>✅ No limits on traffic, bandwidth, or time</li>
            </ul>
          </div>

          {/* Right Side Logo + Button */}
          <div className="flex flex-col items-center">
            <img src="/novix-logo.webp" alt="VPN Logo" className="h-24 mb-4" />
            <button
              onClick={() =>
                (window.location.href =
                  "https://play.google.com/store/apps/details?id=com.novix.mobile")
              }
              className="bg-red-500 hover:bg-red-600 text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-md flex items-center gap-2"
            >
              DOWNLOAD NOW <span className="text-lg">➔</span>
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadVPNDialog;
