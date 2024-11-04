import React from "react";


export default function Card() {
    return <div>
        <section>
            <div className="grid place-items-center h-screen text-white " >
                <div className="shadow-xl p-5 rounded-lg border-t-4 border-blue-500 bg-black min-h-[600px] min-w-[400px] px-5 mx-5">
                    <div className="grid place-items-center">
                        <img className="w-auto h-auto mx-auto rounded-3xl" src="/family-mart.jpeg" alt="Family Mart Logo" />
                        {/* <h1 className="text-3xl font-bold my-3 text-center">Family Mart</h1> */}
                        <img className="z-10 w-[200px] h-[200px] mx-auto rounded-[100%] mt-[-100px]" src="/family-mart.jpeg" alt="Family Mart Logo" />
                    </div>
                    <div className="grid place-items-center rounded-3xl bg-slate-500 mt-[-80px] mb-[100px]">
                        {/* <img className="w-auto h-auto mx-auto rounded-lg" src="/family-mart.jpeg" alt="Family Mart Logo" /> */}
                        <div className=" mt-[20%] ">
                        <h1 className="text-3xl font-bold my-3 text-center">Family Mart</h1>
                        <div className="text-center">
                            <p className="text-xl ">8D/4 Malaya Street, Kodikkalpnalyam ,  Thiruvarur, 610001</p>
                            <p className="text-xl ">India</p>
                        </div>
                        </div>
                        <hr />
                        <div className="flex gap-5 mt-5">
                            <button >Call</button>
                            <button>Whatsapp</button>
                            <button>Email</button>
                            <button>Directions</button>
                        </div>
                        <div>
                            <p></p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    </div>;
}