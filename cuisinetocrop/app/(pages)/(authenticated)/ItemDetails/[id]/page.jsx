"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Globe, MapPin } from "lucide-react";

// Mock GetIngredients function (Replace with actual logic to get ingredients)
const GetIngredients = (itemID) => {
  // Mock adding ingredients to the item
  console.log(`Fetching ingredients for item ID: ${itemID}`);
  return ["Tomatoes", "Onions", "Peppers"]; // Example ingredients
};

const ItemDetails = () => {
  const [itemID, setItemID] = useState(""); // State for itemID input
  const [item, setItem] = useState(null); // State to store item details
  const [loading, setLoading] = useState(false); // Loading state
  const router = useRouter();

  // Get itemID from query parameters when the component mounts
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const id = query.get("id"); // Get the item ID from the query parameter
    if (id) {
      fetchItemDetails(id);
    }
  }, []);

  // Function to fetch item details from the API
  const fetchItemDetails = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/items?id=${id}`); // Fetch using query parameter
      if (response.ok) {
        const data = await response.json();

        // Check if ingredients are empty and call GetIngredients if needed
        if (data.ingredients.length === 0) {
          const ingredients = GetIngredients(data.itemID);
          data.ingredients = ingredients; // Update ingredients array
        }

        setItem(data); // Set the item data
      } else {
        console.error("Item not found");
      }
    } catch (error) {
      console.error("Error fetching item:", error);
    }
    setLoading(false);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`?id=${itemID}`); // Navigate with query parameter
  };

  return (
    <div className="min-h-screen bg-[#E5F9E0] flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-8">
        <h1 className="text-3xl font-bold text-center text-[#02254D] mb-6">
          Find Item Details
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="itemID"
              className="block mb-2 font-medium text-[#02254D]"
            >
              <Globe className="inline-block w-5 h-5 mr-2" />
              Item ID
            </label>
            <input
              id="itemID"
              type="text"
              required
              className="w-full p-3 border border-[#40C9A2] text-[#02254D] rounded-md focus:ring-[#40C9A2] focus:border-[#40C9A2]"
              placeholder="Enter Item ID"
              value={itemID}
              onChange={(e) => setItemID(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#40C9A2] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#02254D] transition duration-300"
          >
            <Globe className="inline-block w-5 h-5 mr-2" />
            Search
          </button>
        </form>

        {/* Display item details */}
        {loading && (
          <p className="text-center mt-6 text-[#02254D]">Loading...</p>
        )}
        {item && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-center text-[#02254D] mb-4">
              {item.title}
            </h2>
            <p className="text-center text-[#02254D] mb-4">
              {item.description}
            </p>
            <ul className="space-y-2">
              {item.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-2 border border-[#40C9A2] rounded-md"
                >
                  <span className="text-[#02254D]">{ingredient}</span>
                  <button className="bg-[#40C9A2] text-white px-4 py-2 rounded-md text-sm hover:bg-[#02254D] transition duration-300">
                    Find Nearest Farm
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetails;
