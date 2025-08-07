import { Linkedin, Instagram, Facebook, Youtube } from 'lucide-react'

export function Footer() {
    return (
        <footer className="bg-black text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Logo Section */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center space-x-3 mb-6 lg:mb-0">
                            <div className="w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center">
                                <div className="text-black font-bold text-lg">GPJ</div>
                            </div>
                            <div>
                                <div className="text-white font-bold text-lg tracking-wide">
                                    GEORGE P. JOHNSON
                                </div>
                                <div className="text-gray-400 text-sm">
                                    experience marketing
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links - Mobile Stack, Desktop Columns */}
                    <div className="lg:col-span-6">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
                            {/* About Us Column */}
                            <div>
                                <h3 className="text-teal-400 font-semibold text-base mb-4">
                                    About Us
                                </h3>
                                <ul className="space-y-3">
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                                        >
                                            About us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                                        >
                                            Work
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                                        >
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                                        >
                                            Our Clients
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                                        >
                                            Awards
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                                        >
                                            Accolades
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Legal Column */}
                            <div>
                                <h3 className="text-teal-400 font-semibold text-base mb-4">
                                    Legal
                                </h3>
                                <ul className="space-y-3">
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                                        >
                                            Privacy
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                                        >
                                            CSR Policy
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Contact Column */}
                            <div>
                                <h3 className="text-teal-400 font-semibold text-base mb-4">
                                    Contact
                                </h3>
                                <ul className="space-y-3">
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                                        >
                                            Careers
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Project Network Section */}
                    <div className="lg:col-span-2 flex flex-col items-start lg:items-end">
                        <div className="text-right">
                            <div className="text-gray-400 text-sm mb-2">
                                Part of the Project network
                            </div>
                            <div className="text-white font-bold text-2xl tracking-wider">
                                project
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Copyright */}
                        <div className="text-gray-400 text-xs md:text-sm text-center md:text-left max-w-2xl">
                            <p className="mb-1">
                                Copyright ©2025 George P. Johnson. All rights reserved. A Project Worldwide Agency.
                            </p>
                            <p>
                                George P. Johnson and its logo are registered trademarks of Project.
                            </p>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex space-x-3">
                            <a
                                href="#"
                                className="w-10 h-10 bg-teal-400 rounded-full flex items-center justify-center hover:bg-teal-300 transition-colors duration-200"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5 text-black" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-teal-400 rounded-full flex items-center justify-center hover:bg-teal-300 transition-colors duration-200"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5 text-black" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-teal-400 rounded-full flex items-center justify-center hover:bg-teal-300 transition-colors duration-200"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5 text-black" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-teal-400 rounded-full flex items-center justify-center hover:bg-teal-300 transition-colors duration-200"
                                aria-label="YouTube"
                            >
                                <Youtube className="w-5 h-5 text-black" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
