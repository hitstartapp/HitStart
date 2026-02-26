"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SplitSection() {
    return (
        <section className="flex flex-col md:flex-row w-full h-auto md:h-[65vh] md:min-h-[500px]">
            <div
                className="flex-1 relative bg-cover bg-center flex flex-col justify-center items-center text-center px-5 py-[80px] md:p-0"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502224562085-639556652f33?auto=format&fit=crop&q=80&w=1000')" }}
            >
                <div className="absolute inset-0 bg-black/30" />
                <motion.div
                    className="relative z-10 text-center"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-[4rem] md:text-[5.5rem] leading-[0.85] mb-[15px]">Who Are<br />We?</h2>
                    <p className="text-[10px] font-medium mb-[25px] text-[#eee]">By HitStart</p>
                    <a href="#" className="inline-flex items-center justify-center h-[30px] px-[20px] rounded-[20px] text-[10px] font-semibold uppercase tracking-[0.05em] bg-primary text-white transition-transform hover:-translate-y-0.5 hover:opacity-90">
                        ABOUT US
                    </a>
                </motion.div>
            </div>

            <div className="flex-1 bg-[#212121] flex flex-col justify-center items-center text-center px-5 py-[80px] md:p-0">
                <motion.div
                    className="relative z-10 text-center"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <h2 className="text-[4rem] md:text-[5.5rem] leading-[0.85] mb-[15px]">Don't<br />Miss<br />Out</h2>
                    <p className="text-[10px] font-medium mb-[25px] text-[#eee]">Get the latest updates and details.</p>
                    <a href="#" className="inline-flex items-center justify-center h-[30px] px-[20px] rounded-[20px] text-[10px] font-semibold uppercase tracking-[0.05em] border border-white/20 bg-white/5 text-[#aaa] transition-all hover:bg-white/10 hover:text-white hover:-translate-y-0.5">
                        NEWSLETTER <span className="ml-[6px] text-[14px] leading-none">↗</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
