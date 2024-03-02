import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme/theme-privider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Jobify",
    description: "Find your dream job",
    icons: {
        icon: [
            {
                media: "(prefers-color-scheme:light)",
                url: "/logo/favicon/jobify-favicon-black.svg",
                href: "/logo/favicon/jobify-favicon-black.svg",
            },
            {
                media: "(prefers-color-scheme:dark)",
                url: "/logo/favicon/jobify-favicon-white.svg",
                href: "/logo/favicon/jobify-favicon-white.svg",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider
            appearance={{
                variables: { colorPrimary: "#624cf5" },
            }}
        >
            <html lang="en">
                <body className={cn(inter.className)}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
