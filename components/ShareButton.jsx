import { useEffect, useState } from 'react';

const ShareButton = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Detect if the user is on a mobile device
    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        setIsMobile(userAgent.includes("iphone") || userAgent.includes("android"));
    }, []);

    // Function to handle mobile sharing (using Web Share API)
    const shareQRCode = async () => {
        const qrCodeURL = 'your-qrcode-url'; // The URL to share (can be the QR code or related link)

        if (isMobile) {
            try {
                if (navigator.share) {
                    await navigator.share({
                        title: 'QR Code Share',
                        text: 'Check out this QR code!',
                        url: qrCodeURL,
                    });
                    console.log('QR Code shared successfully');
                } else {
                    alert('Sharing is not supported on this device');
                }
            } catch (err) {
                console.error('Error sharing:', err);
            }
        } else {
            // For desktop, open a popup with social media options
            const popupWidth = 600;
            const popupHeight = 400;
            const popupLeft = (window.innerWidth - popupWidth) / 2;
            const popupTop = (window.innerHeight - popupHeight) / 2;

            const popupWindow = window.open(
                '',
                '',
                `width=${popupWidth},height=${popupHeight},top=${popupTop},left=${popupLeft}`
            );

            if (popupWindow) {
                popupWindow.document.write(`
                    <html>
                        <head>
                            <title>Share QR Code</title>
                            <style>
                                body {
                                    font-family: Arial, sans-serif;
                                    text-align: center;
                                    padding: 20px;
                                }
                                .social-btn {
                                    margin: 10px;
                                    padding: 10px 20px;
                                    background-color: #0078D4;
                                    color: white;
                                    border: none;
                                    cursor: pointer;
                                }
                                .social-btn:hover {
                                    background-color: #005a8f;
                                }
                            </style>
                        </head>
                        <body>
                            <h2>Share this QR Code</h2>
                            <div>
                                <a href="https://wa.me/?text=${encodeURIComponent(qrCodeURL)}" target="_blank">
                                    <button class="social-btn">WhatsApp</button>
                                </a>
                                <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(qrCodeURL)}" target="_blank">
                                    <button class="social-btn">Facebook</button>
                                </a>
                                <a href="https://www.instagram.com/?url=${encodeURIComponent(qrCodeURL)}" target="_blank">
                                    <button class="social-btn">Instagram</button>
                                </a>
                                <a href="mailto:?subject=QR Code&body=${encodeURIComponent(qrCodeURL)}" target="_blank">
                                    <button class="social-btn">Email</button>
                                </a>
                            </div>
                        </body>
                    </html>
                `);
            } else {
                alert('Popup blocked. Please allow popups for this website.');
            }
        }
    };

    return (
        <button
            onClick={shareQRCode}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
            Share
        </button>
    );
};

export default ShareButton;