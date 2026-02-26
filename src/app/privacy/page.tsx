import React from "react";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 px-6 max-w-4xl mx-auto flex flex-col gap-8 text-white font-sans">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="text-[#ccc] text-sm -mt-6">Last Updated: 12 Dec, 2025</p>

            <div className="prose prose-invert prose-lg max-w-none text-[#e0e0e0]">
                <p>
                    HitStart (“we”, “our”, or “us”) operate the HitStart mobile application (“App”). This Privacy Policy explains how we collect, use, and protect your information when you use our App.
                </p>
                <p>
                    By using HitStart, you agree to the practices described in this Privacy Policy.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">1. Information We Collect</h2>

                <h3 className="text-xl font-medium mt-6 mb-3 text-white">1.1 Personal Information</h3>
                <p>We may collect the following information when you create or use your account:</p>
                <ul className="list-disc pl-6 space-y-1 my-4">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Password</li>
                    <li>Profile details</li>
                </ul>
                <p className="text-sm text-[#ccc] italic">Source: Supabase Authentication</p>

                <h3 className="text-xl font-medium mt-6 mb-3 text-white">1.2 Health & Fitness Data</h3>
                <p>The App may collect fitness-related information, including:</p>
                <ul className="list-disc pl-6 space-y-1 my-4">
                    <li>Weight</li>
                    <li>Progress tracking</li>
                    <li>Activity completion data</li>
                </ul>

                <h3 className="text-xl font-medium mt-6 mb-3 text-white">1.3 Automatically Collected Information</h3>
                <p>We may automatically collect:</p>
                <ul className="list-disc pl-6 space-y-1 my-4">
                    <li>Device information</li>
                    <li>IP address</li>
                    <li>Usage data</li>
                    <li>Crash logs</li>
                    <li>Analytics events</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">2. How We Use Your Information</h2>
                <p>We use the collected data to:</p>
                <ul className="list-disc pl-6 space-y-1 my-4">
                    <li>Create and manage your account</li>
                    <li>Track your fitness progress</li>
                    <li>Improve user experience</li>
                    <li>Provide insights and analytics</li>
                    <li>Send notifications or updates</li>
                    <li>Ensure security and prevent misuse</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">3. Data Storage & Security</h2>
                <p>Your data is securely stored using:</p>
                <ul className="list-disc pl-6 space-y-1 my-4">
                    <li>Supabase (database & authentication)</li>
                    <li>FlutterFlow services</li>
                    <li>Industry-standard encryption and access controls</li>
                </ul>
                <p>Although we follow best practices, no system is 100% secure.</p>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">4. Sharing of Your Information</h2>
                <p>We do not sell your personal data.</p>
                <p>We may share information with:</p>
                <ul className="list-disc pl-6 space-y-1 my-4">
                    <li>Service providers (e.g., Supabase, Razorpay)</li>
                    <li>Analytics tools</li>
                </ul>
                <p>Only to the extent required to operate the App.</p>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">5. Children’s Privacy</h2>
                <p>HitStart is intended for users 13+.</p>
                <p>We do not knowingly collect data from children below this age. If such data is detected, it will be deleted.</p>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">6. Your Rights</h2>
                <p>Depending on your region (including India’s DPDP Act 2023), you may request:</p>
                <ul className="list-disc pl-6 space-y-1 my-4">
                    <li>Access to your data</li>
                    <li>Correction</li>
                    <li>Deletion</li>
                    <li>Withdrawal of consent</li>
                    <li>Export of your data</li>
                </ul>
                <p>Contact us at <a href="mailto:support@hitstart.in" className="text-primary hover:underline">support@hitstart.in</a> for such requests.</p>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">7. Retention of Data</h2>
                <p>We retain data as long as necessary for:</p>
                <ul className="list-disc pl-6 space-y-1 my-4">
                    <li>Operating the App</li>
                    <li>Legal obligations</li>
                    <li>Enhancing product features</li>
                </ul>
                <p>You may request deletion anytime.</p>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">8. Third-Party Services</h2>
                <p>HitStart may integrate third-party tools, including:</p>
                <ul className="list-disc pl-6 space-y-1 my-4">
                    <li>Supabase</li>
                    <li>Razorpay</li>
                    <li>Analytics services</li>
                    <li>Cloud hosting</li>
                </ul>
                <p>These services handle data via their own policies.</p>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">9. Changes to This Policy</h2>
                <p>We may update this Privacy Policy. Changes will be reflected with a new “Last Updated” date.</p>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">10. Contact Us</h2>
                <p>For questions about privacy, contact:</p>
                <p><a href="mailto:support@hitstart.in" className="text-primary hover:underline font-medium">support@hitstart.in</a></p>
            </div>
        </main>
    );
}
