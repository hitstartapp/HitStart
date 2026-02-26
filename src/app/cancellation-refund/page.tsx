import React from "react";

export default function CancellationRefundPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 px-6 max-w-4xl mx-auto flex flex-col gap-8 text-white font-sans">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Cancellation & Refund Policy</h1>
            <p className="text-[#ccc] text-sm -mt-6">Last Updated: Jan 4, 2026</p>

            <div className="prose prose-invert prose-lg max-w-none text-[#e0e0e0]">
                <p>
                    This Cancellation and Refund Policy ("Policy") governs the cancellation and refund rules for services provided by HitStart ("we", "us", or "our") through our mobile application and website.
                </p>
                <p>
                    By purchasing our fitness services or subscriptions, you agree to the terms outlined below:
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">1. CANCELLATION POLICY</h2>

                <h3 className="text-xl font-medium mt-6 mb-3 text-white">Subscription Cancellation:</h3>
                <p>You may cancel your subscription at any time. To avoid being charged for the next billing cycle, you must cancel your subscription at least 24 hours before your next scheduled payment date.</p>

                <h3 className="text-xl font-medium mt-6 mb-3 text-white">Access After Cancellation:</h3>
                <p>Upon cancellation, you will continue to have full access to the fitness services and content until the end of your current paid billing period. No further charges will be applied after the cancellation is processed.</p>

                <h3 className="text-xl font-medium mt-6 mb-3 text-white">How to Cancel:</h3>
                <p>You can cancel your membership directly within the App settings or by sending an email request to <a href="mailto:support@hitstart.in" className="text-primary hover:underline">support@hitstart.in</a>.</p>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">2. REFUND POLICY</h2>

                <h3 className="text-xl font-medium mt-6 mb-3 text-white">Digital Service Nature:</h3>
                <p>Since our services consist of digital fitness content and professional coaching plans that are accessible immediately upon purchase, we generally follow a "No Refund" policy.</p>

                <h3 className="text-xl font-medium mt-6 mb-3 text-white">All Sales are Final:</h3>
                <p>Except as expressly provided in this Policy or required by applicable law, all payments are non-refundable and there are no refunds or credits for partially used periods.</p>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">3. EXCEPTIONS (REFUND ELIGIBILITY)</h2>
                <p>Refunds will only be processed under the following specific circumstances:</p>
                <ul className="list-disc pl-6 space-y-1 my-4">
                    <li><strong>Duplicate Payments:</strong> If you were charged twice for the same subscription due to a technical glitch.</li>
                    <li><strong>Technical Failure:</strong> If a verified technical defect on our end prevents you from accessing the service for more than 7 consecutive working days.</li>
                    <li><strong>Unauthorized Transaction:</strong> If you can prove that the transaction was made fraudulently without your consent.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">4. REFUND PROCESSING</h2>
                <ul className="list-disc pl-6 space-y-1 my-4">
                    <li>All approved refunds will be credited back to the original payment method used during the purchase.</li>
                    <li>Once the refund is initiated, it typically takes 5-7 working days to reflect in your bank account or card statement, depending on your financial institution.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">5. CONTACT US</h2>
                <p>For any questions regarding cancellations or refunds, please contact us:</p>
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl mt-4">
                    <ul className="space-y-3 m-0 p-0 list-none">
                        <li><strong>Merchant Legal Entity Name:</strong> PHU TSHERING BHUTIA</li>
                        <li><strong>Telephone No:</strong> +91-9239045109</li>
                        <li><strong>E-Mail ID:</strong> <a href="mailto:support@hitstart.in" className="text-primary hover:underline font-medium">support@hitstart.in</a></li>
                        <li><strong>Operational Address:</strong> Kyongsha, Gyalshing West Sikkim SIKKIM 737111</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
