"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function GoogleLoginButton() {
  const { data: session } = useSession();

  // If user is already signed in with Google, don't show the button
  if (session) {
    return null;
  }

  return (
    <div className="mt-6">
      <button
        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        onClick={() => signIn("google")}
      >
        Sign in with Google
      </button>
    </div>
  );
}
