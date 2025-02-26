"use client";

import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png"
import { UserButton } from "@clerk/nextjs";
import { ClerkProvider } from '@clerk/nextjs';
import { CreditCard, Italic } from "lucide-react";
import {dark} from "@clerk/themes";
import { useTheme } from "next-themes";



export default function Navbar() {
    const {theme} = useTheme();



    return <header className="shadow-sm"> <ClerkProvider>
        <div className="max-w-7xl mx-auto p-3 flex items-center justify-between gap-3">
            <Link href="/resumes" className="flex items-center gap-2">
            <Image src={logo}
            alt="logo"
            width={35}
            height={35}
            className="rounded-full"
            />
            <span className="text-xl font-bold tracking-tight">
                <i style={{ color: theme ==="dark" ? "#12b54b" : "#3a5af8"}}>Elevate</i>CV
            </span>
            </Link>
            <div className="flex items-center gap-3">
            <ThemeToggle />
            <UserButton 
            appearance={{
                baseTheme: theme === "dark" ? dark : undefined,
                elements: {
                    avatarBox: {
                        width: 35,
                        height: 35,
                    },
                },
            }}
            >
                <UserButton.MenuItems>
                    <UserButton.Link
                    label="Billing"
                    labelIcon={<CreditCard className="size-4" />}
                    href="/billing"
                    />
                </UserButton.MenuItems>
            </UserButton>
            </div>


        </div>
        </ClerkProvider>
        
    </header>
        
}