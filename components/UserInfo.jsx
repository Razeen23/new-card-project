export default function UserInfo() {
    return <div className="grid place-items-center h-screen" >
    <div className="shadow-xl p-5 rounded-md border-t-4 border-blue-500">
        <h1 className="text-3xl font-bold my-3 text-center">Client Details</h1>

        <div>Client Name: <span className="font-bold">Razeen</span></div>
        <div>Client Email: <span className="font-bold">makerrazeen2301@gmail.com</span></div>

        <div>Phone Number: <span className="font-bold">123456789</span></div>


        <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer font-bold" >Logout</button>
        {/* <Link className="text-right mt-4 text-sm" href={"/"}>
        Already have an account?
         <span className="text-blue-500"> Login</span>
         </Link> */}
    </div>
</div>;
}