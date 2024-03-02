"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/theme/mode-toggle";
import Image from "next/image";
import { navLinks } from "@/constants";
import { Menu } from "lucide-react";

const MobileMenu = () => {
    return (
        <nav className=" flex md:hidden items-center justify-between bg-secondary px-4 py-5 w-full sticky top-0 ">
            <Sheet>
                <div className="flex items-center justify-between w-full  sticky top-0">
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
                    <SheetTrigger>
                        <Menu />
                    </SheetTrigger>
                </div>
                <SheetContent className="flex flex-col justify-between  h-screen p-3">
                    <SheetHeader className="">
                        <SheetTitle>
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
                        </SheetTitle>
                    </SheetHeader>
                    <div className=" h-full  w-full flex flex-col justify-between">
                        <ul
                            className={` flex flex-col items-center mt-24 gap-2`}
                        >
                            {navLinks.map((item) => (
                                <li key={item.title}>
                                    <Button
                                        className=""
                                        variant={"link"}
                                        asChild
                                    >
                                        <Link href={item.href}>
                                            {item.title}
                                        </Link>
                                    </Button>
                                </li>
                            ))}
                        </ul>
                        <div
                            className={`flex items-center justify-center gap-3 py-3`}
                        >
                            <Link href={"/sign-in"}>
                                <Button size={"default"} className="">
                                    Sign in
                                </Button>
                            </Link>

                            <ModeToggle />
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </nav>
    );
};

export default MobileMenu;
