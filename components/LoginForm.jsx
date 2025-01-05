"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import{ useState } from "react";

import { useRouter } from "next/navigation"; 

export default function LoginForm() {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [error,setError] = useState('');

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!email || !password) {
            setError('Please fill all the fields');
            return;
        }

        try {
            const res = await signIn ("credentials", {
                email,
                password,
                redirect: false,
            });

            if (res.error) {
                setError("Invalid Creadentials");
            } else {
                setError("");
            }

            router.replace('dashboard'); 
        } catch (error) {
            console.log(error);
        }
    };

    
    return <div className="grid place-items-center h-screen" >
        <div className="shadow-xl p-5 rounded-md border-t-4 border-blue-500">
            <h1 className="text-3xl font-bold my-3 text-center">Login Form</h1>

            <form  onSubmit={handleSubmit} className="flex flex-col gap-6">
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer font-bold" >Login</button>
            </form>
            {error && 
            <div className="text-red-500 w-fit mt-2 px-2 py-4">
                {error}
            </div>
            }

            
            <Link className="text-right mt-4 text-sm" href={"/register"}>
            Don't have an account?
             <span className="text-blue-500">Register</span>
             </Link>
        </div>
    </div>;
}