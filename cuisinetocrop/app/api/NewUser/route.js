import { NextResponse } from "next/server";
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { AddNewUser } from "../../_lib/mongo/utils/addnewuser";

export const POST = withApiAuthRequired(async function NewUser(req) {
  try {
    // Get the session and user information
    const session = await getSession(req);
    const userID= session.user.sub;

    // Parse the JSON body from the request
    const { restaurantUrl, zipCode } = await req.json();

    // Extract the userID from the Auth0 sub

    console.log("User ID:", userID);

    // Validate the input
    if (!restaurantUrl || !zipCode) {
      return NextResponse.json(
        { error: "Restaurant URL and ZIP code are required" },
        { status: 400 }
      );
    }

    // Call AddNewUser with the correct userID
    const mongoUser = await AddNewUser(userID, restaurantUrl, zipCode);

    console.log("New user added to MongoDB:", mongoUser);

    // Return a success response
    return NextResponse.json(
      { message: "User information saved successfully", user: mongoUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing new user information:", error);
    return NextResponse.json(
      { error: "Failed to process user information", details: error.message },
      { status: 500 }
    );
  }
});