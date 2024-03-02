import React from "react";
import Menu from "@/components/shared/menu";
import MobileMenu from "@/components/shared/mobile-menu";

export const Navbar = async () => {
    return (
        <header>
            <Menu />
            <MobileMenu />
        </header>
    );
};
