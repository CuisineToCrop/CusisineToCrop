"use client";
import React, { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";

import Link from "next/link";

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, error, isLoading: userLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user && user.isNewUser) {
      router.push("/NewUser");
    }
  }, [user, router]);

  // useEffect(() => {
  //   let isMounted = true;

  //   const fetchMenuItems = async () => {
  //     try {
  //       const response = await fetch(
  //         "/api/ScrapeItems?url=https://www.ubereats.com/store/naked-farmer-coral-gables/TtPSvGfcXGWczR8LZ0xFvg?diningMode=DELIVERY&sc=SEARCH_SUGGESTION",
  //         {
  //           method: "GET",
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }

  //       const data = await response.json();
  //       console.log(data);

  //       if (isMounted) {
  //         setItems(data.items);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching menu items:", error);
  //     } finally {
  //       if (isMounted) {
  //         setLoading(false);
  //       }
  //     }
  //   };

  //   fetchMenuItems();

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full p-8 mt-16 bg-[#E5F9E0]">
      <h1 className="text-3xl font-bold mb-6 text-[#02254D]">DASHBOARD</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* {items.map((item, index) => (
          <Link href={`/details/${item.id}`} key={index}>
            <div className="bg-[#40C9A2] rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-semibold text-white mb-2">
                {item.name}
              </h2>
              <p className="text-gray-100">{item.description}</p>
            </div>
          </Link>
        ))} */}
      </div>
    </div>
  );
}
