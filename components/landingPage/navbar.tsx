"use client";

import { useState } from "react";
import { MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle, Navbar, NavbarLogo, NavBody, NavItems } from "../ui/resizable-navbar";


export function NavbarLp() {
    const navItems = [
        {
            name: "Work",
            link: "#features",
        },
        {
            name: "Services",
            link: "#pricing",
        },
        {
            name: "News & Insights",
            link: "#contact",
        },
        {
            name: "About ",
            link: "#contact",
        },
        {
            name: "Contact",
            link: "#contact",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full   ">
            <Navbar >
                {/* Desktop Navigation */}
                <NavBody   >
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    {/* <div className="flex items-center gap-4">
                        <NavbarButton variant="secondary">Login</NavbarButton>
                        <NavbarButton variant="primary">Book a call</NavbarButton>
                    </div> */}
                </NavBody>

                {/* Mobile Navigation */}
                {/* <p className="border border-red-300" > holad d</p> */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-600 "
                            >
                                <span className="block">{item.name}</span>
                            </a>
                        ))}
                        {/* <div className="flex w-full flex-col gap-4">
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full"
                            >
                                Login
                            </NavbarButton>
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full"
                            >
                                Book a call
                            </NavbarButton>
                        </div> */}
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>


        </div>
    );
}


