import React from "react";

export default function TermsPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 px-6 max-w-4xl mx-auto flex flex-col gap-8 text-white font-sans">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Terms of Service</h1>
            <p className="text-[#ccc] text-sm -mt-6">Last Updated: 12 Dec, 2025</p>

            <div className="prose prose-invert prose-lg max-w-none text-[#e0e0e0]">
                <p>
                    Welcome to HitStart, operated by HitStart (“we”, “our”, “us”). By downloading or using the App, you agree to comply with these Terms & Conditions.
                </p>
                <p>
                    If you do not agree, please discontinue use.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">1. Use of the App</h2>
                <p>You agree to use the App only for lawful purposes and not to:</p>
                <ul className="list-disc pl-6 space-y-1 my-4">
                    <li>Misuse or exploit any features</li>
                    <li>Attempt unauthorized access</li>
                    <li>Interfere with performance or security</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">2. User Accounts</h2>
                <p>To use HitStart, you must create an account using:</p>
                <ul className="list-disc pl-6 space-y-1 my-4">
                    <li>Google authentication</li>
                    <li>Other required information</li>
                </ul>
                <p>You are responsible for:</p>
                <ul className="list-disc pl-6 space-y-1 my-4">
                    <li>Keeping your login details secure</li>
                    <li>All activity under your account</li>
                </ul>
                <p>We may suspend or terminate accounts for misuse.</p>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">3. Health Disclaimer</h2>
                <p>HitStart provides general fitness guidance, not medical advice.</p>
                <p>By using the App, you agree:</p>
                <ul className="list-disc pl-6 space-y-1 my-4">
                    <li>You are participating voluntarily</li>
                    <li>You are responsible for your physical condition</li>
                    <li>You will consult a medical professional if needed</li>
                </ul>
                <p>We are not liable for injuries or health issues resulting from improper use.</p>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">4. Gamification & Progression</h2>
                <p>HitStart includes:</p>
                <ul className="list-disc pl-6 space-y-1 my-4">
                    <li>Levels</li>
                    <li>Badges</li>
                    <li>Challenges</li>
                    <li>Rewards system</li>
                </ul>
                <p>These are for motivation only and do not represent medical standards.</p>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">5. Intellectual Property</h2>
                <p>All content, logos, graphics, and features of the App belong to HitStart.</p>
                <p>You may not:</p>
                <ul className="list-disc pl-6 space-y-1 my-4">
                    <li>Copy</li>
                    <li>Modify</li>
                    <li>Reverse-engineer</li>
                    <li>Resell the App or any part of it</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">6. Payments & Monetization</h2>
                <p>For (in-app purchases, or ads), the following applies:</p>
                <ul className="list-disc pl-6 space-y-1 my-4">
                    <li>Pricing will be displayed clearly</li>
                    <li>Purchases are non-refundable unless required by law</li>
                    <li>Features may change or evolve</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">7. Termination</h2>
                <p>We may suspend or terminate your access if:</p>
                <ul className="list-disc pl-6 space-y-1 my-4">
                    <li>You violate these Terms</li>
                    <li>Engage in harmful behaviour</li>
                    <li>Attempt to misuse data or systems</li>
                </ul>
                <p>You may delete your account anytime.</p>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">8. Limitation of Liability</h2>
                <p>To the fullest extent permitted by law:</p>
                <ul className="list-disc pl-6 space-y-1 my-4">
                    <li>We are not responsible for injuries, data loss, or damages</li>
                    <li>The App is provided “as is”</li>
                    <li>We do not guarantee uninterrupted access</li>
                </ul>
                <p>Use the App at your own risk.</p>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">9. Governing Law</h2>
                <p>These Terms are governed by the laws of India.</p>
                <p>Any dispute will be resolved in the courts of Gangtok / Sikkim.</p>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">10. Contact Information</h2>
                <p>For legal or support queries:</p>
                <p><a href="mailto:support@hitstart.in" className="text-primary hover:underline font-medium">support@hitstart.in</a></p>
                <p className="font-semibold mt-4">HitStart</p>
            </div>
        </main>
    );
}
