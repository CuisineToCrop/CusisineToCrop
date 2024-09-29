import { NextResponse } from "next/server";
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

export const POST = withApiAuthRequired(async function NewUser(req) {
    try {
    // Parse the JSON body from the request
        const session = await getSession(req);
		const user = session.user;
        const { restaurantUrl, zipCode } = await req.json();
        // session.user.isNewUser = false;

        // Validate the input
        if (!restaurantUrl || !zipCode) {
            return NextResponse.json(
                { error: "Restaurant URL and ZIP code are required" },
                { status: 400 }
            );
        }

        // TODO: Add your database logic here
        // For example, you might want to save this information to a database
        // This is just a placeholder for now

        console.log("New restaurant information received:", { restaurantUrl, zipCode });

        // TODO: Add any additional processing or validation here

        // Return a success response
        return NextResponse.json(
        { message: "Restaurant information saved successfully" },
        { status: 201 }
        );
        } catch (error) {
            console.error("Error processing new user information:", error);
            return NextResponse.json(
            { error: "Failed to process restaurant information" },
            { status: 500 }
            );
        }
})
