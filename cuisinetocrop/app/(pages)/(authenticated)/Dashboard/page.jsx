"use client";
import React, { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const { user, error, isLoading: userLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!userLoading && user) {
      const checkUserExists = async () => {
        try {
          const response = await fetch("/api/CheckUser");
          const data = await response.json();

          if (response.status === 404 || !data.exists) {
            // Redirect to NewUser page if user doesn't exist
            router.push("/NewUser");
          } else {
            setLoading(false); // User exists, stop loading
          }
        } catch (err) {
          console.error("Error checking user existence:", err);
          setLoading(false); // Stop loading in case of an error
        }
      };

      checkUserExists();
    }
  }, [user, userLoading, router]);

  if (userLoading || loading) {
    return <div>Loading...</div>; // Show loading state while fetching user data
  }


  if (error) {
    return <div>{error.message}</div>; // Show error if there's an issue with Auth0
  }

  return (
    <div className="w-full p-8 mt-16 bg-[#E5F9E0]">
      <h1 className="text-3xl font-bold mb-6 text-[#02254D]">DASHBOARD</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Add your dashboard items here */}
      </div>
    </div>
  );
}
