"use client";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full min-h-screen bg-black text-white flex flex-col justify-between py-8 px-8 md:px-16 lg:px-20">
            <div className="w-full h-full flex flex-col justify-between min-h-screen">
                {/* Top Section - Social Links */}
                <div className="flex justify-end gap-6 md:gap-8 pt-4">
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400 transition-colors text-sm font-light"
                    >
                        Linkedin
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400 transition-colors text-sm font-light"
                    >
                        Twitter
                    </a>
                    <a
                        href="https://behance.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400 transition-colors text-sm font-light"
                    >
                        Behance
                    </a>
                </div>

                {/* Middle Section - Main Text and CTA */}
                <div className="flex-1 flex flex-col items-start justify-center max-w-5xl py-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight mb-8">
                        Curious about what we can create{" "}
                        <span className="text-gray-500">together?</span>
                        <br />
                        Let&apos;s bring something{" "}
                        <span className="text-gray-500">extraordinary</span> to life!
                    </h2>

                    <div className="flex flex-wrap items-center gap-6 pt-2">
                        <a
                            href="#contact"
                            className="px-6 py-3 bg-white text-black text-sm font-normal hover:bg-gray-200 transition-colors rounded-sm"
                        >
                            Get in Touch
                        </a>
                        <div className="flex items-center gap-2 text-sm font-light">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span>Available For Work</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Footer Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-4 text-sm font-light">
                    {/* Left - Contact */}
                    <div className="space-y-0.5">
                        <p>+81 (0)90 1234 5678</p>
                        <p>hello@yuya.com</p>
                    </div>

                    {/* Center - Credits */}
                    <div className="space-y-0.5">
                        <p>Designed & Developed</p>
                        <p>by Peter Hodak</p>
                    </div>

                    {/* Right - Copyright */}
                    <div className="md:text-right space-y-0.5">
                        <p>All rights reserved,</p>
                        <p>YUYA ©{currentYear}</p>
                        <div className="flex items-center md:justify-end gap-1.5 text-xs pt-2 bg-white text-black px-3 py-1.5 rounded-full w-fit md:ml-auto">
                            <span>⚡</span>
                            <span>Made in Framer</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
