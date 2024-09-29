// app/account/page.jsx
"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link"; // Import Link from Next.js
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Account() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user && user.isNewUser) {
      router.push("/NewUser");
    }
  }, [user, router]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="w-full p-8 mt-16 bg-[#E5F9E0]">
      {user ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          <img
            src={user.picture}
            alt={user.name}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-center mb-4">{user.name}</h2>
          <p className="text-center text-gray-600 mb-4">{user.email}</p>

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Farm Information</h3>
            <p>
              <strong>Location:</strong> {user.farm_location || "Not specified"}
            </p>
            <p>
              <strong>UberEats URL:</strong> {user.url || "Not specified"}
            </p>
          </div>

          <div className="flex justify-center">
            <Link href="/api/auth/logout">
              <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300">
                Log out
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="mb-4">
            Please log in to view your account information.
          </p>
          <Link href="/api/auth/login">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
              Log in
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
