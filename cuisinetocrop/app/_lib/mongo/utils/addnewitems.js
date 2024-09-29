import { connectToDatabase } from "../connection/connection";
import { Item } from "../models/item";

export async function addNewItems(userID, itemsArray) {
  await connectToDatabase();
  try {
    // Prepare items for insertion
    const itemsToInsert = itemsArray.map(item => ({
      description: item,  // Assuming itemsArray contains strings
      userID
    }));

    // Insert many items at once
    const result = await Item.insertMany(itemsToInsert);

    console.log(`Added ${result.length} items for user ID: ${userID}`);
    result.forEach(item => {
      console.log(`Added item: ${item.description} for user ID: ${userID}`);
    });

    return result;  // Return the inserted items

  } catch (error) {
    console.error("Error in addNewItems:", error);
    throw error; // Re-throw the error for the caller to handle
  }
}