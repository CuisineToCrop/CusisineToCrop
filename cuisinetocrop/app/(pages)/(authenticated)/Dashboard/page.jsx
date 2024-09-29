// app/dashboard/page.js
"use client";
import React, { useEffect, useState } from 'react';

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    let isMounted = true; // Flag to track if the component is mounted

    const fetchMenuItems = async () => {
      try {
        const response = await fetch('/api/ScrapeItems', {
          method: "GET",
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);
        
        if (isMounted) {
          setItems(data.items); // Update state with fetched items
        }
      } catch (error) {
        console.error('Error fetching menu items:', error);
      } finally {
        if (isMounted) {
          setLoading(false); // Set loading to false if mounted
        }
      }
    };

    fetchMenuItems();

    return () => {
      isMounted = false; // Cleanup function sets the flag to false
    };
  }, []); 

  if (loading) {
    return <div>Loading...</div>; // Display loading state
  }

  return (
    <div className="w-full p-8 mt-16"> {/* Adjust the margin-top as needed */}
  <h1 className="text-2xl font-bold mb-4">DASHBOARD</h1>
  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-6">
    <div className="bg-custom-2 shadow-md rounded w-full p-12">
      <p className="text-lg font-semibold">
        CuisineToCrop is designed to empower farmers by providing a centralized platform for managing their personal and farm-related information. Farmers can easily view and edit their profiles, ensuring that their details are always up to date. This allows farmers to add essential farm details, including size, type of produce grown, and farming practices, which can enhance their visibility to potential business partners and improve matching accuracy.
      </p>
        </div>
      </div>
    </div>
  );
}
