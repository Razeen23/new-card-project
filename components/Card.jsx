'use client';

import React, { useRef, useState, useEffect } from "react";
import { MdAttachEmail, MdPhoneForwarded } from "react-icons/md";
import { IoMdCall, IoLogoWhatsapp, IoIosContact } from "react-icons/io";
import { FaMapLocationDot, FaLocationDot, FaGlobe } from "react-icons/fa6";
import { motion, useInView } from 'framer-motion';

import ProductCard from "./ProductCard";

export default function Card() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const ref2 = useRef(null);
    const isInView2 = useInView(ref2, { once: true });

    const handleCall = () => {
        window.location.href = 'tel:+91 6369288358'; // Replace with your phone number
    };

    const handleWhatsApp = () => {
        window.open('https://wa.me/6369288358', '_blank'); // Replace with your WhatsApp number
    };

    const handleEmail = () => {
        window.location.href = 'mailto:makerrazeen2301@gmailcom'; // Replace with your email address
    };

    const handleDirections = () => {
        window.open('https://www.google.com/maps/dir/?api=1&destination=Your+Destination', '_blank'); // Replace with your destination
    };


   
    const products = [
        { id: 1, name: "Milk and eggs", image:"./assets/p1.jpg"},
        { id: 2, name: "Oils", image:"./assets/oil.jpg"},
        { id: 3, name: "Indian Spices", image:"./assets/spices2.jpg"},
        { id: 4, name: "Rice bags", image:"./assets/rice.jpg"},
        { id: 5, name: "Kitchen Tools", image:"./assets/kitchen-tools.jpg"},
        { id: 6, name: "Kids Toys", image:"./assets/toys.jpg"},
        { id: 7, name: "School Needs", image:"./assets/school.jpg"},
        { id: 8, name: "Sports equipments", image:"./assets/sports.jpg"},
        { id: 9, name: "Soft Drinks", image:"./assets/drinks.jpg"},
        { id: 10, name: "Ice Creams", image:"./assets/icecream.jpg"},
    ];

    const app = (
        <div className="cards-list">
            <ProductCard title="React" />
            <ProductCard title="Angular" />
            <ProductCard title="VueJs" />
            <ProductCard title="JavaScript" />
        </div>
    );

    return (
        <div>
            <section className="h-screen">
                <div
                    className="grid place-items-center shadow-xl p-5 text-primary bg-about min-h-[600px] min-w-[400px] px-5"
                    style={{ backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                >
                    <div className="max-w-[500px]">
                        <div className="grid place-items-center">
                            <img className="w-auto h-auto mx-auto rounded-3xl border-4 border-black" src="/family-mart.jpeg" alt="Logo2" />
                            <img className="z-10 w-[200px] h-[200px] mx-auto rounded-[100%] mt-[-100px] border-4 border-black" src="/family-mart.jpeg" alt="Logo2" />
                        </div>
                        <div className="grid place-items-center rounded-3xl bg-body mt-[-80px] mb-[16px]">
                            <div className="mt-[20%]">
                                <h1 className="font-bold my-3 text-center">Family Mart</h1>
                                <div className="text-center">
                                    <h3 className="text-xl px-2">“Fill your cart with savings—every aisle, every day!”</h3>
                                </div>
                            </div>
                            <div className="flex gap-5 my-8 flex-wrap place-content-center cursor-pointer ">
                                <button onClick={handleCall} className="inline-flex items-center gap-2"><IoMdCall /> Call</button>
                                <button onClick={handleWhatsApp} className="inline-flex items-center gap-2"><IoLogoWhatsapp /> Whatsapp</button>
                                <button onClick={handleEmail} className="inline-flex items-center gap-2"><MdAttachEmail /> Email</button>
                                <button onClick={handleDirections} className="inline-flex items-center gap-2"><FaMapLocationDot /> Directions</button>
                            </div>
                            <div>
                                <ul className="cursor-pointer text-xl ">
                                    <li className="flex gap-3 mb-3"><FaLocationDot /> 8D/4 Malaya Street, Kodikkalpnalyam,<br /> Thiruvarur 610001, India</li>
                                    <li className="flex gap-3 mb-3"><FaGlobe /> https://www.familymart.in</li>
                                    <li className="flex gap-3 mb-3"><MdPhoneForwarded /> +91 9345035514 </li>
                                </ul>
                                <div className="my-8 bg-slate-500 w-full">
                                    <a
                                        href="data:text/vcard;charset=utf-8,BEGIN:VCARD%0AVERSION:3.0%0AFN:Family%20Mart%0ATEL:+91 6369288358%0AEMAIL:familymart23@gmail.com%0AADR;TYPE=WORK:;;8D/4%20Malaya%20Street;Kodikkalpalayam;Thiruvarur;610001;India%0AURL:https://familymart.com%0AEND:VCARD"
                                        download="contact.vcf"
                                        className="flex gap-2 justify-center items-center cursor-pointer p-4 text-white hover:text-gray-800 transition duration-200"
                                    >
                                        <IoIosContact className="text-2xl" /> Add to Contact
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div ref={ref} className="grid place-items-center rounded-3xl bg-body mb-[16px] p-6">
                            <motion.h2
                                className="text-3xl font-bold mb-1"
                                initial={{ opacity: 0, y: -20 }} // Starting state
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }} // Conditional animation
                                transition={{ duration: 0.5 }} // Animation duration
                            >
                                Welcome to Family Mart!
                            </motion.h2>
                            <motion.div
                                className="w-full h-1 bg-button mx-auto mb-4"
                                initial={{ width: 0 }}
                                animate={{ width: isInView ? '60%' : 0 }} // Conditional width animation
                                transition={{ duration: 0.5 }}
                            />
                            <h3 className="text-lg mb-4 text-left">
                                <span className="font-semibold">Company name: </span> Family Mart <br />
                                <span className="font-semibold">Business type: </span> Super Market
                            </h3>
                            <p className="text-md mb-4">
                                At Family Mart, we are dedicated to providing you with an exceptional shopping experience! From the moment you step through our doors, you'll find a warm and inviting atmosphere, designed to make you feel right at home.
                            </p>
                            <p className="text-md mb-4">
                                We take pride in offering a wide range of products, including fresh produce, organic groceries, and a selection of local specialties that highlight the best our region has to offer. Our shelves are stocked with quality items to cater to every taste and need.
                            </p>
                            <motion.h2
                                className="text-h2 font-secondary font-semibold mt-6 mb-2"
                                initial={{ opacity: 0, y: -20 }} // Starting state
                                animate={{ opacity: isInView2 ? 1 : 0, y: isInView2 ? 0 : -20 }} // Conditional animation
                                transition={{ duration: 0.5 }} // Animation duration
                            >
                                Our Specialties
                            </motion.h2>
                            <motion.div
                                className="w-full h-1 bg-button mx-auto mb-4"
                                initial={{ width: 0 }}
                                animate={{ width: isInView2 ? '40%' : 0 }} // Conditional width animation
                                transition={{ duration: 0.5 }}
                            />
                            <ul className="list-disc list-inside text-md mb-4">
                                <li>Farm-fresh fruits and vegetables sourced from local market daily.</li>
                                <li>Artisanal baked goods made daily in-house.</li>
                                <li>A curated selection of international snacks and delicacies.</li>
                                <li>Organic and health-conscious products for every lifestyle.</li>
                            </ul>
                            <p className="text-md">
                                We believe in supporting our local farmers and artisans, and that reflects in the products we offer. Your satisfaction is our top priority, and we look forward to serving you soon!
                            </p>
                        </div>

                        <div ref={ref2} className="grid place-items-center rounded-3xl bg-body mb-[16px] p-6">
                            <motion.h2
                                className="text-3xl font-bold mb-1"
                                initial={{ opacity: 0, y: -20 }} // Starting state
                                animate={{ opacity: isInView2 ? 1 : 0, y: isInView2 ? 0 : -20 }} // Conditional animation
                                transition={{ duration: 0.5 }} // Animation duration
                            >
                                products & services
                            </motion.h2>
                            <motion.div
                                className="w-full h-1 bg-button mx-auto mb-4"
                                initial={{ width: 0 }}
                                animate={{ width: isInView2 ? '40%' : 0 }} // Conditional width animation
                                transition={{ duration: 0.5 }}
                            />

                            <div id="app">
                                <div className="grid grid-cols-2 gap-x-4">
                                    {products.map((product) => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}