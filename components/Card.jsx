'use client';

import React, { useRef, useState, useEffect } from "react";
import { MdAttachEmail, MdPhoneForwarded } from "react-icons/md";
import { IoMdCall, IoLogoWhatsapp, IoIosContact } from "react-icons/io";
import { FaMapLocationDot, FaLocationDot, FaGlobe } from "react-icons/fa6";
import { FiCopy } from 'react-icons/fi'; // Import copy icon
import Image from 'next/image';


import { motion, useInView } from 'framer-motion';
import { QRCodeCanvas } from 'qrcode.react';


import ProductCard from "./ProductCard";
import InfiniteLooper from './ImageGallery';
import ShareButton from "./ShareButton";







export default function Card() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    const [copied, setCopied] = useState(false);
    const qrRef = useRef();

    const url = "https://example.com/contactt"; // Your URL to share

    // Function to handle copy-to-clipboard
    const handleCopy = () => {
        navigator.clipboard.writeText(url).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
        });
    };


    // Function to save the QR code as an image
    const saveQRCode = () => {
        const qrCanvas = qrRef.current.querySelector("canvas");
        const img = qrCanvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = img;
        link.download = "QRCode.png";
        link.click();
    };

    // Function to share the QR code using the Web Share API
    const shareQRCode = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: "Share Contact",
                    text: "Check out this QR code:",
                    url: url, // Use the URL or an image if possible
                });
            } else {
                alert("Sharing is not supported on this browser.");
            }
        } catch (error) {
            console.error("Error sharing:", error);
        }
    };


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
        { id: 1, name: "Milk and eggs", image: "/assets/p1.webp" },
        { id: 2, name: "Oils", image: "/assets/oil.webp" },
        { id: 3, name: "Indian Spices", image: "/assets/spices2.webp" },
        { id: 4, name: "Rice bags", image: "/assets/rice.webp" },
        { id: 5, name: "Kitchen Tools", image: "/assets/kitchen-tools.webp" },
        { id: 6, name: "Kids Toys", image: "/assets/toys.webp" },
        { id: 7, name: "School Needs", image: "/assets/school.webp" },
        { id: 8, name: "Sports equipments", image: "/assets/sports.webp" },
        { id: 9, name: "Soft Drinks", image: "/assets/drinks.webp" },
        { id: 10, name: "Ice Creams", image: "/assets/icecream.webp" },
    ];

    const images = [
        './assets/p1.webp',
        './assets/oil.webp',
        './assets/spices2.webp',
        './assets/rice.webp',
        './assets/kitchen-tools.webp',
        './assets/toys.webp',
        './assets/school.webp',
        './assets/sports.webp'
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
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }} // Conditional animation
                                transition={{ duration: 0.5 }} // Animation duration
                            >
                                Our Specialties
                            </motion.h2>
                            <motion.div
                                className="w-full h-1 bg-button mx-auto mb-4"
                                initial={{ width: 0 }}
                                animate={{ width: isInView ? '40%' : 0 }} // Conditional width animation
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

                        <div  className="grid place-items-center rounded-3xl bg-body mb-[16px] p-6">
                            <motion.h2
                                className="text-3xl font-bold mb-1"
                                initial={{ opacity: 0, y: -20 }} // Starting state
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }} // Conditional animation
                                transition={{ duration: 0.5 }} // Animation duration
                            >
                                products & services
                            </motion.h2>
                            <motion.div
                                className="w-full h-1 bg-button mx-auto mb-4"
                                initial={{ width: 0 }}
                                animate={{ width: isInView ? '40%' : 0 }} // Conditional width animation
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

                        {/* 
                        <div  className="grid place-items-center rounded-3xl bg-body mb-[16px] p-6">
                            <section className="min-h-[40%] max-h-[40%]" loading="lazy">
                                <InfiniteLooper speed={30} direction="right">
                                    {images.map((image, index) => (
                                        <div className="contentBlock contentBlock--image" key={index}>
                                            <img
                                                src={image}
                                                alt={`Product ${index + 1}`}
                                                className="product-image rounded-[15px] transform transition-transform duration-300 hover:scale-90"
                                            />
                                        </div>
                                    ))}
                                </InfiniteLooper>

                                <InfiniteLooper speed={30} direction="left">
                                    {images.map((image, index) => (
                                        <div className="contentBlock contentBlock--image" key={index}>
                                            <img
                                                src={image}
                                                alt={`Product ${index + 1}`}
                                                className="product-image rounded-[15px] transform transition-transform duration-300 hover:scale-90"
                                            />
                                        </div>
                                    ))}
                                </InfiniteLooper>
                            </section>
                        </div> */}
                        <div
                            
                            className="grid place-items-center rounded-3xl bg-body mb-[16px] p-6"
                        >
                            {/* Payment Options Section */}
                            <motion.h2
                                className="text-h2 font-secondary font-semibold mt-6 mb-2"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                Payment Options
                            </motion.h2>
                            <motion.div
                                className="w-full h-1 bg-button mx-auto mb-4"
                                initial={{ width: 0 }}
                                animate={{ width: isInView ? '40%' : 0 }}
                                transition={{ duration: 0.5 }}
                            />
                            <ul className="list-disc list-inside text-md mb-4">
                                <li>Debit card payment.</li>
                                <li>
                                    Mobile payment through UPI.
                                    <ul className="list-inside list-disc ml-4">
                                        <li>Google Pay</li>
                                        <li>PhonePe</li>
                                        <li>Paytm</li>
                                    </ul>
                                </li>
                                <li>Cash on delivery.</li>
                            </ul>

                            {/* Share Contact Section */}
                            <motion.h2
                                className="text-h2 font-secondary font-semibold mt-6 mb-2"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                Share Contact
                            </motion.h2>
                            <motion.div
                                className="w-full h-1 bg-button mx-auto mb-4"
                                initial={{ width: 0 }}
                                animate={{ width: isInView ? '40%' : 0 }}
                                transition={{ duration: 0.5 }}
                            />

                            {/* Search Bar-like Design for URL */}
                            <div className="relative flex items-center w-full max-w-md mb-4 bg-white text-black rounded-lg border border-gray-300 shadow-sm">
                                <input
                                    type="text"
                                    value={url}
                                    readOnly
                                    className="w-full px-4 py-2 rounded-l-lg focus:outline-none"
                                />
                                <button
                                    onClick={handleCopy}
                                    className="px-4 py-2 bg-gray-100 hover:bg-gray-300 rounded-r-lg transition-colors duration-200"
                                >
                                    <FiCopy className="text-gray-600" />
                                </button>
                                {copied && (
                                    <span className="absolute top-full mt-1 text-sm text-green-500">
                                        Copied!
                                    </span>
                                )}
                            </div>

                            <div ref={qrRef} className="mb-4 border-8 border-gray-300 shadow-md shadow-white rounded-lg" >
                                <QRCodeCanvas value={url} size={200} />
                            </div>

                            {/* Save and Share Buttons */}
                            <div className="flex space-x-4">
                                <button
                                    onClick={saveQRCode}
                                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
                                >
                                    Save QR
                                </button>
<ShareButton />
                            </div>
                        </div>
                        <footer className="bg-body text-white py-6 rounded-3xl">
                            <div className="container mx-auto text-center">
                                <p className="text-sm">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                                {/* <div className="flex justify-center space-x-4 mt-4">
                                    <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
                                    <span className="text-gray-400">|</span>
                                    <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
                                    <span className="text-gray-400">|</span>
                                    <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
                                </div> */}
                            </div>
                        </footer>
                    </div>
                </div>
            </section>
        </div>
    );
}