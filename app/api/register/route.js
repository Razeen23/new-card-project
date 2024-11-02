import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

export async function POST(req) {
    try {
        console.log("Connecting to MongoDB...");
        await connectMongoDB(); // Ensure the function is invoked properly
        console.log("Connected to MongoDB");

        const data = await req.json();
        const { firstName, lastName, email, phone, password } = data;

        console.log("Hashing password...");
        const hashPassword = await bcrypt.hash(password, 10);

        console.log("Creating user...");
        await User.create({
            firstName,
            lastName,
            email,
            phone,
            password: hashPassword
        });

        console.log("User registered successfully");
        return NextResponse.json({ message: "User registered successfully" }, { status: 200 });

    } catch (error) {
        console.error("Error in registration:", error);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}