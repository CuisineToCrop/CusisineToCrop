import { NextResponse } from 'next/server';
import { AddNewItems } from '../../_lib/mongo/utils/addnewitems';

export async function POST(req) {
  console.log("Received POST request");
  try {
    // Parse the request body
    const body = await req.json();
    const { userID, items } = body;

    // Validate the input
    if (!userID || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'Invalid input. userID and non-empty items array are required.' },
        { status: 400 }
      );
    }

    // Log the received data
    console.log('Received userID:', userID);
    console.log('Received items:', items);

    const result = await AddNewItems(userID, items);

    // Return the result and success message
    return NextResponse.json(
      {
        message: `Successfully added ${result.length} items`,
        addedItems: result
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error in POST request:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}