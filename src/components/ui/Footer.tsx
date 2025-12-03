"use client";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative w-full h-screen bg-black text-white flex flex-col py-12 px-8 md:px-16 lg:px-20">
            <div className="w-full h-full flex flex-col justify-between">
                {/* Top Section - Social Links */}
                <div className="flex justify-end gap-6 md:gap-8 pt-8">
                    <a
                        href="https://www.linkedin.com/in/william-guevara-lazaro-79274b2a3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400 transition-colors text-sm font-light"
                    >
                        Linkedin
                    </a>
                    <a
                        href="https://www.instagram.com/luiccian_dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400 transition-colors text-sm font-light"
                    >
                        Instagram
                    </a>
                    <a
                        href="https://github.com/LuiccianDev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400 transition-colors text-sm font-light"
                    >
                        Github
                    </a>
                    <a
                        href="https://luiccian.blogspot.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400 transition-colors text-sm font-light"
                    >
                        Blog
                    </a>
        
                </div>

                {/* Middle Section - Main Text and CTA */}
                <div className="flex-1 flex flex-col items-start justify-center max-w-5xl py-24">
                    <h2 className="text-4xl font-light leading-tight mb-8">
                        Curious about what we can create{" "}
                        <span className="text-gray-500">together?</span>
                        <br />
                        Let&apos;s bring something{" "}
                        <span className="text-gray-500">extraordinary</span> to life!
                    </h2>

                    <div className="flex flex-wrap items-center gap-6 pt-2">
                        <a
                            href="/contact"
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
                <div className="flex items-center justify-between md:grid-cols-3 gap-8 pb-8 text-sm font-light">

                    {/* Center - Credits */}
                    <div className="space-y-0.5">
                        <p>Designed & Developed</p>
                        <p>by Luiccian</p>
                    </div>

                    {/* Right - Copyright */}
                    <div className="md:text-right space-y-0.5">
                        <p>All rights reserved,</p>
                        <p>LUICCIAN ©{currentYear}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
