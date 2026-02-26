"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoFootsteps, IoArrowForwardCircleOutline } from "react-icons/io5";

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[700px] flex flex-col justify-center items-center text-center overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/workoutmp4.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 z-0" />

            <div className="relative z-10 w-full px-4">
                <motion.h1
                    className="text-[3.5rem] md:text-[4rem] lg:text-[6.5rem] leading-[0.9] mb-[40px] md:mb-[60px] drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    Your health, your<br />fitness, your life.
                </motion.h1>
            </div>
            <div className="absolute bottom-[40px] md:bottom-[80px] z-10 w-full px-4 flex justify-center">
                <motion.div
                    className="flex w-full md:w-1/2 bg-[#1e1e1e]/60 backdrop-blur-md rounded-[20px] md:rounded-[50px] p-[15px] md:p-[20px] justify-center items-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                >
                    <a
                        href="#cta"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="flex w-full gap-3 items-center justify-center h-[44px] md:h-[54px] rounded-[15px] md:rounded-[25px] text-[14px] md:text-[18px] font-semibold uppercase tracking-[0.05em] bg-primary text-white transition-transform hover:-translate-y-0.5 hover:opacity-90"
                    >
                        Start Training
                        <IoFootsteps size={28} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
