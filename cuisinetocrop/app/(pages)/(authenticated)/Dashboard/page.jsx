"use client";
import React, { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";

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

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch("/api", {
          method: "GET",
        });
        const data = await response.json();
        console.log(data);
        console.log(data.items);
        // You might want to set the data to state here
        // setItems(data.items);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  if (userLoading || loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="w-full p-8">
      <h1 className="text-2xl font-bold mb-4">DASHBOARD</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <div className="bg-custom-2 shadow-md rounded w-full p-12">
          <p className="text-lg font-semibold">
            CuisineToCrop is designed to empower farmers by providing a
            centralized platform for managing their personal and farm-related
            information. Farmers can easily view and edit their profiles,
            ensuring that their details are always up to date. This allows
            farmers to add essential farm details, including size, type of
            produce grown, and farming practices, which can enhance their
            visibility to potential business partners and improve matching
            accuracy.
          </p>
        </div>
      </div>
    </div>
  );
}
