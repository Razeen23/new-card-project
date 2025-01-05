import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectMongoDB();
        const { email } = await req.json();
        const user = await User.findOne({ email }).select('_id');
        
        return NextResponse.json({ dataUserexists: !!user }); // Boolean response
    } catch (error) {
        console.error("Error in userExists API:", error);
        return NextResponse.json(
            { message: "Something went wrong", error },
            { status: 500 }
        );
    }
}