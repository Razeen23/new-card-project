import React, { useEffect, useRef, useState } from 'react';
// import './InfiniteScrollLogos.css'; // Make sure to include your styles
import Image from 'next/image';

const logos = [
    '/brands/pepsi.png',
    '/brands/cola.png',
    '/brands/arun.png',
    '/brands/kwality.png',
    '/brands/amul.png',
    '/brands/sunfeast.svg',
    '/brands/brittania.png',
    '/brands/cadbury.png',
    '/brands/Nestle.png',
    '/brands/unilever.png',
    '/brands/itc.png',
    '/brands/p&g.png',
    '/brands/himalayas.png',
    '/brands/nivea.png',
    '/brands/tata.png',
    '/brands/aachi.png',
    '/brands/goodrej.png',
    '/brands/maggi.png',
    '/brands/yippee.webp',

    // Add your logo paths here
];


const InfiniteScrollLogos = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const scrollStep = 1; // Adjust the speed of scrolling
        const scrollInterval = 20; // Adjust the interval of scrolling

        const scrollLogos = () => {
            if (container) {
                // When the container has scrolled to the bottom, reset to the top
                if (container.scrollTop >= container.scrollHeight / 2) {
                    container.scrollTop = 0;
                } else {
                    container.scrollTop += scrollStep;
                }
            }
        };

        const intervalId = setInterval(scrollLogos, scrollInterval);

        return () => clearInterval(intervalId); // Cleanup the interval on unmount
    }, []);

    return (
        <div className="scroll-container" ref={containerRef}>
            <div className="logos">
                {logos.map((logo, index) => (
                    <Image
                        key={index}
                        src={logo}
                        alt={`Logo ${index + 1}`}
                        className="logo"
                        width={200}  // Adjust the width as needed
                        height={100} // Adjust the height as needed
                    />
                ))}
                {/* Duplicate logos to create the infinite scrolling effect */}
                {logos.map((logo, index) => (
                    <Image
                        key={index + logos.length}
                        src={logo}
                        alt={`Logo ${index + 1}`}
                        className="logo"
                        width={200}  // Adjust the width as needed
                        height={100} // Adjust the height as needed
                    />
                ))}
            </div>
        </div>
    );
};

export default InfiniteScrollLogos;