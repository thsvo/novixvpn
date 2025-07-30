// "use client";

// import dynamic from "next/dynamic";
// import { CSSProperties } from "react";
// const FlipClockCountdown = dynamic(
//   () => import("@leenguyen/react-flip-clock-countdown"),
//   { ssr: false }
// );

// import "@leenguyen/react-flip-clock-countdown/dist/index.css";

// export default function Timer() {
//   // const { days, hours, minutes, seconds } = useCountdown();
//   const targetDate =
//     typeof window !== "undefined"
//       ? localStorage.getItem("offer_target_date")
//       : null;

//   return (
//     <div>
//       <div className="flex flex-col items-start">
//         {targetDate && (
//           <FlipClockCountdown
//             to={new Date(targetDate).getTime()}
//             labels={["Days", "Hours", "Minutes", "Seconds"]}
//             labelStyle={
//               {
//                 fontSize: 12,
//                 textTransform: "uppercase",
//                 color: "#4B5563",
//               } as CSSProperties
//             }
//             digitBlockStyle={
//               {
//                 width: 36,
//                 height: 64,
//                 fontSize: 30,
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//                 background: "#666666",
//                 color: "#FFFFFF",
//                 borderRadius: 6,
//                 boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//               } as CSSProperties
//             }
//             separatorStyle={
//               {
//                 color: "#666666",
//                 size: "8px",
//               } as CSSProperties
//             }
//             duration={0.8}
//             onComplete={() => console.log("Countdown completed!")}
//           ></FlipClockCountdown>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import dynamic from "next/dynamic";
import { CSSProperties } from "react";
const FlipClockCountdown = dynamic(
  () => import("@leenguyen/react-flip-clock-countdown"),
  { ssr: false }
);

import "@leenguyen/react-flip-clock-countdown/dist/index.css";

export default function Timer() {
  const targetDate =
    typeof window !== "undefined"
      ? localStorage.getItem("offer_target_date")
      : null;

  return (
    <div className="">
      <div className="flex flex-col items-start">
        {targetDate && (
          <FlipClockCountdown
            to={new Date(targetDate).getTime()}
            labels={["Days", "Hours", "Minutes", "Seconds"]}
            labelStyle={
              {
                fontSize: "clamp(10px, 2vw, 12px)",
                textTransform: "uppercase",
                color: "#4B5563",
              } as CSSProperties
            }
            digitBlockStyle={
              {
                width: "clamp(12px, 8vw, 36px)",
                height: "clamp(40px, 12vw, 64px)",
                fontSize: "clamp(8px, 6vw, 30px)",
                fontStyle: "italic",
                fontWeight: "bold",
                background: "#666666",
                color: "#FFFFFF",
                borderRadius: 6,
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              } as CSSProperties
            }
            separatorStyle={
              {
                color: "#666666",
                size: "clamp(4px, 2vw, 8px)",
              } as CSSProperties
            }
            duration={0.8}
            onComplete={() => console.log("Countdown completed!")}
          ></FlipClockCountdown>
        )}
      </div>
    </div>
  );
}
