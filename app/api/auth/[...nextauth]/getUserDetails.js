// pages/api/getUserDetails.js

import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

export default async function handler(req, res) {
  const { email } = req.query;  // Get the email from the query parameters

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    await connectMongoDB();
    const user = await User.findOne({ email });  // Find the user by email

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Exclude the password field and return the rest of the user data
    const { password, ...userData } = user.toObject();
    return res.status(200).json(userData);  // Return the user data (excluding password)
  } catch (error) {
    console.error("Error fetching user details:", error);
    return res.status(500).json({ message: "Server error" });
  }
}