import { connectToDatabase } from "@/app/_lib/mongo/connection/connection";
export async function GET() {
    await connectToDatabase();
    return new Response("hi", {
      status: 200,
    });
  }