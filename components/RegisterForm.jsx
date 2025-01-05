"use client";

import Link from 'next/link';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {

    const [firstName , setName] = useState('');
    const [lastName , setLastName] = useState('');
    const [email , setEmail] = useState('');
    const [phone , setPhone] = useState('');
    const [password , setPassword] = useState('');
    const [error, setError] = useState('');

    const router = useRouter();

    //console.log(firstName,lastName , email , phone , password);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !phone || !password) {
            setError('Please fill all the fields');
            return;
        }
    
        try {

            const resUserexists = await fetch('/api/userExists', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
    
            const { dataUserexists } = await resUserexists.json();
    
            if (dataUserexists) {
                setError('User already exists');
                return;
            }


            const res = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    phone,
                    password,
                }),
            });
    
            // Parse the response as JSON
            const data = await res.json();
    
            if (res.ok) {
                console.log("Server response:", data);
                const form = e.target;
                form.reset();
                router.push('/');
                setError(''); // Clear any previous error messages
            } else {
                setError(data.message || 'Something went wrongg');
            }
        } catch (error) {
            console.log('User registration failed', error);
            setError('An error occurred while registering');
        }
    };

    return <div className="grid place-items-center h-screen" >
    <div className="shadow-xl p-5 rounded-md border-t-4 border-blue-500">
        <h1 className="text-3xl font-bold my-3 text-center">Register Form</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input onChange={(e) => setName(e.target.value)} type="text" placeholder="First Name" />
            <input onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" />
            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
            <input onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Phone Number" />
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer font-bold" >Register</button>
        </form>

        { error && (
        <div className="text-red-500 w-fit mt-2 px-2 py-4">
            {error}
        </div>
        )
        }
        <Link className="text-right mt-4 text-sm" href={"/"}>
        Already have an account?
         <span className="text-blue-500"> Login</span>
         </Link>
    </div>
</div>;
}