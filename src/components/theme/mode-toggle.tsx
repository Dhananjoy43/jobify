"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
    const { setTheme } = useTheme();

    return (
        <div>
            <Button
                className="hidden dark:flex items-center justify-center shadow-sm shadow-primary/10 bg-transparent hover:bg-light border-none px-3 py-1"
                variant={"outline"}
                onClick={() => setTheme("light")}
            >
                <SunIcon className="" />
            </Button>
            <Button
                className="block dark:hidden shadow-sm shadow-primary/10 bg-transparent hover:bg-light border-none px-3 py-1"
                variant={"outline"}
                onClick={() => setTheme("dark")}
            >
                <MoonIcon className="" />
            </Button>
        </div>
    );
}
