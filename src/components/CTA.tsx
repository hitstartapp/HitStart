"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoLogoApple, IoLogoGooglePlaystore, IoInformationCircle } from "react-icons/io5";

export default function CTA() {
    const [showNotification, setShowNotification] = useState(false);

    const handleDownloadClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
    };

    return (
        <section
            id="cta"
            className="relative h-[600px] md:h-[800px] bg-cover bg-[center_70%] flex items-center justify-center font-sans"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521805103424-d8f8430e8933?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-[#1e1e1e]/40 backdrop-blur-xl border border-white/10 w-[90%] md:w-[60%] max-w-[1000px] rounded-[30px] md:rounded-[40px] py-[40px] md:py-[100px] px-5 text-center shadow-2xl relative"
            >
                <h2 className="text-[2.4rem] md:text-[3.2rem] mb-2">Ready to transform?</h2>
                <p className="text-[16px] font-normal text-gray-400">
                    Download HitStart now and start your fitness journey now.
                </p>
                <div className="flex gap-[10px] md:gap-[20px] justify-center flex-col items-center mt-10 md:mt-20 relative">
                    <a href="#" onClick={handleDownloadClick} className="flex items-center justify-center gap-[16px] w-[280px] md:w-[400px] h-[48px] md:h-[60px] rounded-[50px] bg-primary text-white transition-transform hover:-translate-y-0.5 hover:opacity-90">
                        <IoLogoApple size={30} />
                        <div className="flex flex-col items-start translate-y-[2px]">
                            <span className="text-[9px] font-medium leading-none tracking-wide uppercase mb-1">Download on the</span>
                            <span className="text-[18px] font-semibold leading-none tracking-tight">App Store</span>
                        </div>
                    </a>
                    <a href="#" onClick={handleDownloadClick} className="flex items-center justify-center gap-[16px] w-[280px] md:w-[400px] h-[48px] md:h-[60px] rounded-[50px] bg-primary text-white transition-transform hover:-translate-y-0.5 hover:opacity-90">
                        <IoLogoGooglePlaystore size={26} />
                        <div className="flex flex-col items-start translate-y-[2px]">
                            <span className="text-[9px] font-medium leading-none tracking-wide uppercase mb-1">Get it on</span>
                            <span className="text-[18px] font-semibold leading-none tracking-tight">Google Play</span>
                        </div>
                    </a>

                    {/* Animated Notification Popup */}
                    <AnimatePresence>
                        {showNotification && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                className="absolute -bottom-[80px] bg-white text-dark px-6 py-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex items-center gap-3"
                            >
                                <div className="bg-primary/10 text-primary p-2 rounded-full">
                                    <IoInformationCircle size={24} />
                                </div>
                                <span className="font-semibold text-[1.1rem]">We're coming soon! ✨</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </section>
    );
}
