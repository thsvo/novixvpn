"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useAuth } from "@/Context/AuthContext";
import LoginForm from "@/components/auth/login-form";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const { token } = useAuth();

  useEffect(() => {
    // Redirect to home if already authenticated
    if (token || session) {
      router.push("/");
    }
  }, [token, session, router]);

  // Don't render login form if already authenticated
  if (token || session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}
