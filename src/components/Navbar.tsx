"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-0 left-0 right-0 flex justify-center items-center px-[40px] py-[30px] z-[100] text-[14px] tracking-[0.02em] max-md:px-[20px] max-md:py-[20px]"
        >
            {/* <a href="#" className="text-[20px] font-medium tracking-[-0.02em] hover:opacity-80 transition-opacity">
                Home
            </a> */}
            <a href="#" className="flex items-center gap-3 text-[28px] md:text-[40px] font-medium tracking-[-0.02em] hover:opacity-80 transition-opacity">
                <Image src="/appicon.png" alt="HitStart Icon" width={40} height={40} className="object-contain" />
                HitStart
            </a>
            {/* <a href="#" className="text-[20px] font-medium tracking-[-0.02em] hover:opacity-80 transition-opacity">
                About Us
            </a> */}
        </motion.header>
    );
}
