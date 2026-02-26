"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
    return (
        <footer
            className="relative pt-[150px] bg-cover bg-[center_bottom] flex flex-col justify-end min-h-[500px]"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1461896836934-ffe607fa8211?auto=format&fit=crop&q=80&w=2000')" }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20" />

            <div className="relative z-10 px-[20px] pb-[30px] md:px-[40px]">
                <motion.div
                    className="flex flex-col md:flex-row justify-between px-[50px] mb-[120px] font-mono text-[10px] leading-[1.6] text-[#ccc] gap-[20px] md:gap-0"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <div className="flex flex-col gap-[30px]">
                        <div className="flex flex-col gap-1">
                            <span className="capitalize text-white font-bold">Email:</span>
                            <a href="mailto:upport@hitstart.in" className="text-[#ccc] underline decoration-white/20 hover:text-white transition-colors">
                                support@hitstart.in
                            </a>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="capitalize text-white font-bold">Mobile:</span>
                            +91-92390-45109
                        </div>
                    </div>

                    <div className="flex flex-col gap-[30px]">
                        <div className="flex flex-col gap-1">
                            <span className="capitalize text-white font-bold">Socials</span>
                            <div className="flex gap-[12px] mt-1">
                                <a href="#" className="w-[18px] h-[18px] text-white flex items-center justify-center hover:opacity-70 transition-opacity">
                                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                </a>
                                <a href="#" className="w-[18px] h-[18px] text-white flex items-center justify-center hover:opacity-70 transition-opacity">
                                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                </a>
                                <a href="#" className="w-[18px] h-[18px] text-white flex items-center justify-center hover:opacity-70 transition-opacity">
                                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="capitalize text-white font-bold">Legal</span>
                            <div className="flex flex-col gap-2 mt-1">
                                <Link href="/privacy" className="text-[#ccc] hover:text-white transition-colors">Privacy</Link>
                                <Link href="/terms" className="text-[#ccc] hover:text-white transition-colors">Terms</Link>
                                <Link href="/cancellation-refund" className="text-[#ccc] hover:text-white transition-colors">Cancellation & Refund</Link>
                            </div>
                            <div className="mt-4 text-[#888]">
                                © 2026 HitStart | All Rights Reserved
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.h1
                    className="text-[14vw] md:text-[9vw] leading-[0.85] tracking-[-0.05em] m-0 text-white whitespace-nowrap mt-[20px] md:mt-0"
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                >
                    Transforming health.
                </motion.h1>
            </div>
        </footer>
    );
}
