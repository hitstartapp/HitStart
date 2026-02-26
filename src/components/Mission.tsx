"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaDumbbell, FaAppleAlt, FaCreativeCommonsNc, FaFire, FaGamepad, FaWeight, FaTint, FaChartLine } from "react-icons/fa";
import { FaChartGantt } from "react-icons/fa6";

const missionCards = [
    {
        icons: (
            <div className="flex -space-x-4 mb-10">
                <div className="w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg border border-white/20 z-20 hover:-translate-y-1 transition-transform">
                    <FaDumbbell className="text-3xl text-white" />
                </div>
                <div className="w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg border border-white/20 z-10 hover:-translate-y-1 transition-transform">
                    <FaAppleAlt className="text-3xl text-white" />
                </div>
            </div>
        ),
        title: "Curated Plans",
        description: "Get access to curated\nset of workout and meal\nplans.",
    },
    {
        icons: (
            <div className="flex -space-x-4 mb-10">
                <div className="w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg border border-white/20 z-30 hover:-translate-y-1 transition-transform">
                    <FaGamepad className="text-4xl text-white" />
                </div>
                <div className="w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg border border-white/20 z-20 hover:-translate-y-1 transition-transform">
                    <FaCreativeCommonsNc className="text-4xl text-white" />
                </div>
                <div className="w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center shadow-lg border border-white/20 z-10 hover:-translate-y-1 transition-transform">
                    <FaFire className="text-3xl text-white" />
                </div>
            </div>
        ),
        title: "Gamified Experience",
        description: "Gamified experience to\nearn coins, XPs, streaks\non workout completion.",
    },
    {
        icons: (
            <div className="flex mb-10">
                <div className="flex -space-x-4 mb-10">
                    <div className="w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-lg border border-white/20 z-30 hover:-translate-y-1 transition-transform">
                        <FaWeight className="text-3xl text-white" />
                    </div>
                    <div className="w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg border border-white/20 z-20 hover:-translate-y-1 transition-transform">
                        <FaTint className="text-3xl text-white" />
                    </div>
                    <div className="w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-lg border border-white/20 z-10 hover:-translate-y-1 transition-transform">
                        <FaChartGantt className="text-3xl text-white" />
                    </div>
                </div>
            </div>
        ),
        title: "Track Progress",
        description: "Track your weight, water\nand progress easily in a\nsingle app.",
    },
];

export default function Mission() {
    return (
        <section className="bg-primary px-[30px] py-[100px] text-center min-h-[80vh] flex flex-col justify-center items-center gap-[100px]">
            <motion.p
                className="text-[1.4rem] md:text-[3.1rem] font-semibold leading-[1.15] tracking-[-0.03em] text-white max-w-[1400px] mx-auto mb-[60px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Elevate your fitness routine <br className="hidden md:block" />
                with a gamified journey that’s engaging, <br className="hidden md:block" />
                rewarding and helps you be fit starting now.
            </motion.p>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] w-full mx-auto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                {missionCards.map((card, index) => (
                    <motion.div
                        key={index}
                        className="bg-gradient-to-b from-blue-800/40 to-blue-900/60 backdrop-blur-md border border-white/10 p-8 rounded-[32px] shadow-2xl flex flex-col items-start justify-start text-left min-h-[350px] hover:scale-[1.02] hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                        {/* Soft light effect behind cards */}
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-white/[0.03] rounded-t-full blur-3xl pointer-events-none"></div>

                        {card.icons}

                        <div className="mt-auto flex flex-col gap-[10px]">
                            <h3 className="text-3xl font-bold text-white/80 mb-2">
                                {card.title}
                            </h3>
                            <p className="text-[1.2rem] leading-[1.4] text-white/40 whitespace-pre-line tracking-tight">
                                {card.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
