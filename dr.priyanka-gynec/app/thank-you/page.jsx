"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/contact");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="bg-white p-10 rounded-3xl shadow-sm text-center">
        <h1 className="text-4xl font-display mb-4 text-green-600">
          Form Submitted Successfully ✓
        </h1>

        <p className="text-ink/70">
          Thank you for contacting us.
          <br />
          Redirecting back to Contact Page...
        </p>
      </div>
    </div>
  );
}