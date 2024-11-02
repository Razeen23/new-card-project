import Link from "next/link";

export default function LoginForm() {
    return <div className="grid place-items-center h-screen" >
        <div className="shadow-xl p-5 rounded-md border-t-4 border-blue-500">
            <h1 className="text-3xl font-bold my-3 text-center">Login Form</h1>

            <form className="flex flex-col gap-6">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer font-bold" >Login</button>
            </form>

            <div className="text-red-500 w-fit mt-2 px-2 py-4">
                Error message
            </div>
            
            <Link className="text-right mt-4 text-sm" href={"/register"}>
            Don't have an account?
             <span className="text-blue-500">Register</span>
             </Link>
        </div>
    </div>;
}