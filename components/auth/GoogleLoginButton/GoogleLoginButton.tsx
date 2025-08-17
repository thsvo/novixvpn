// "use client";

// import { signIn, signOut, useSession } from "next-auth/react";

// export default function GoogleLoginButton() {
//   const { data: session } = useSession();

//   // If user is already signed in with Google, don't show the button
//   if (session) {
//     return null;
//   }

//   const handleGoogleSignIn = () => {
//     signIn("google", { callbackUrl: "/" });
//   };

//   return (
//     <div className="mt-6">
//       <button
//         className="w-full rounded-full inline-flex items-center justify-center gap-2 p-4 border border-gray-300 shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-300"
//         onClick={handleGoogleSignIn}
//       >
//         <img
//           src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
//           alt="Google Logo"
//           className="h-5 w-5"
//         />
//         Sign in with Google
//       </button>
//     </div>
//   );
// }

"use client";

import { signIn, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function GoogleLoginButton() {
  const { data: session } = useSession();
  const pathname = usePathname();

  // If user is already signed in with Google, don't show the button
  if (session) {
    return null;
  }

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/" });
  };

  // Dynamically set button text
  const buttonText =
    pathname === "/register" ? "Sign up with Google" : "Sign in with Google";

  return (
    <div className="mt-6">
      <button
        className="w-full rounded-full inline-flex items-center justify-center gap-2 p-4 border border-gray-300 shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-300"
        onClick={handleGoogleSignIn}
      >
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google Logo"
          className="h-5 w-5"
        />
        {buttonText}
      </button>
    </div>
  );
}
