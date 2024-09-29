"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link"; // Import Link from Next.js

export default function Account() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      {user ? (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          {/* <p>{user.email}</p>  Commented out to avoid displaying email*/}
          <a href="/api/auth/logout">
            <button className="rounded-full bg-red-500 text-white px-4 py-2">
              Log out
            </button>
          </a>
        </div>
      ) : (
        <a href="/Account">
          <button className="rounded-full bg-blue-500 text-white px-4 py-2">
            Log in
          </button>
        </a>
      )}
    </div>
  );
}
