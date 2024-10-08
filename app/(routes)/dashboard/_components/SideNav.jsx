// _components/SideNav.js
"use client";

import React, { use } from "react";
import { useEffect } from "react"; 
import Image from "next/image";
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import path from "path";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SideNav = () => {

    const menulist=[

        {
            id:1,
            name:"Dashboard",
            icon:LayoutGrid,
            path:"/dashboard"
        },
        {
            id:2,
            name:"Budget",
            icon:PiggyBank,
            path:"/dashboard/budget"
        },
        {
            id:3,
            name:"Expenses",
            icon:ReceiptText,
            path:"/dashboard/expenses"
        },
        {
            id:4,
            name:"Upgrade",
            icon:ShieldCheck,
            path:"/dashboard/upgrade"
        }
    ]
    const path=usePathname();

    useEffect(()=>{
        console.log(path);
    },[path]);

  return (
    <div className="h-screen border shadow-sm">
            <img className="ml-5"
            src="./logo.svg" 
            alt="logo"
            width={200}
            height={100}
            />
            <div className="mt-5">
                {menulist.map((menu,index)=>(
                    <Link href={menu.path}>
                    <h2 className={`flex gap-2 items-center text-gray-500 font-medium p-5 cursor-pointer rounded-md
                    hover:text-primary hover:bg-green-100 mb-2
                    ${path===menu.path&&"text-primary bg-green-100"}
                    `}>
                        <menu.icon /> 
                        {menu.name}
                    </h2>
                    </Link>
                    ))}
            </div>
            <div className="fixed bottom-10 p-5 flex gap-2 items-center">
                <UserButton />
                Profile
            </div>
    </div>
  );
};

export default SideNav;
