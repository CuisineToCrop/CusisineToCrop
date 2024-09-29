// app/dashboard/page.js
"use client";
import React, { useEffect, useState } from 'react';

export default function Dashboard() {

  const [item, setItems] = useState([]);
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('/api', {
          method: "GET",
        });
        const data = await response.json();
        console.log(data);
        console.log(data.items);
        // You might want to set the data to state here
        // setMenuItems(data.items);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []); 

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-lg font-semibold">YO</h2>
          <p className="text-2xl">23123</p>
        </div>
      </div>
    </div>
  );
}
