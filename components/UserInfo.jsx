"use client";

import { signOut, useSession } from "next-auth/react";

export default function  UserInfo() {

    const {data:session} = useSession();

    console.log(session);

    return <div className="grid place-items-center h-screen" >
    <div className="shadow-xl p-5 rounded-md border-t-4 border-blue-500">
        <h1 className="text-3xl font-bold my-3 text-center">Client Details</h1>

        <div>Client Name: <span className="font-bold">{session?.user?.firstname}</span></div>
        <div>Client Email: <span className="font-bold">{session?.user?.email}</span></div>

        <div>Phone Number: <span className="font-bold">{session?.user?.phone}</span></div>


        <button onClick={() => signOut()} className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer font-bold" >Logout</button>
    </div>
</div>;
}