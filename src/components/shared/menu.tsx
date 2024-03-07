import React from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Menu = () => {
    return (
        <nav className="w-full hidden md:flex items-center justify-between border-b shadow-md leading-10 py-3 px-6 lg:px-40 z-50 bg-muted">
            <div>
                <Link
                    href={"/"}
                    className="text-3xl font-bold tracking-wide primary_gradient_text"
                >
                    <Image
                        src={"/logo/svg/logo-no-background.svg"}
                        width={120}
                        height={60}
                        alt="logo"
                    />
                </Link>
            </div>
            <ul className={` hidden lg:flex`}>
                {navLinks.map((item) => (
                    <li key={item.title}>
                        <Button
                            asChild
                            className="text-base font-normal"
                            variant={"link"}
                        >
                            <Link href={item.href}>{item.title}</Link>
                        </Button>
                    </li>
                ))}
            </ul>
            <div className={`hidden lg:flex items-center justify-center gap-3`}>
                <SignedOut>
                    <Link
                        href={"/sign-in"}
                        className="flex items-center justify-center"
                    >
                        <Button size={"default"}>Sign in</Button>
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>

                <ModeToggle />
            </div>
        </nav>
    );
};
export default Menu;
