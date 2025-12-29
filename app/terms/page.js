export const metadata = {
  title: "Terms & Conditions | Cloud101",
  description: "Official Terms & Conditions for Cloud101, including usage rules, disclaimers, and 15-day refund policy."
};

export default function TermsAndConditionsPage() {
  return (
    <main className="max-w-4xl mx-auto px-5 md:px-0 py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Terms & Conditions</h1>
      <p className="text-gray-600 mb-6">Last Updated: December 2025</p>

      <p className="text-gray-700 mb-6">
        Welcome to Cloud101. By accessing or using our website, services, or content, you agree to 
        comply with the following Terms & Conditions. Please read them carefully before proceeding.
      </p>

      {/* Section 1 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h2>
        <p className="text-gray-700">
          These Terms govern your access to and use of Cloud101. By using the website, you 
          acknowledge that you have read, understood, and agreed to these Terms. If you do not agree, 
          please discontinue use immediately.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. Use of the Website</h2>
        <p className="text-gray-700 mb-3">
          You agree to use Cloud101 only for lawful purposes. You must not:
        </p>

        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Engage in activities that harm the website or other users</li>
          <li>Attempt to gain unauthorized access to systems or data</li>
          <li>Use Cloud101 content without permission</li>
          <li>Disrupt website operations</li>
        </ul>

        <p className="text-gray-700">
          We reserve the right to suspend access for users who violate these rules.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. Intellectual Property</h2>
        <p className="text-gray-700">
          All content on Cloud101—including articles, videos, graphics, logos, branding, and digital 
          products—is the exclusive property of Cloud101 and protected under copyright laws.
          Unauthorized reproduction or distribution is strictly prohibited.
        </p>
      </section>

      {/* Section 4 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">4. Purchases, Payments & Refund Policy</h2>
        
        <h3 className="text-lg font-semibold text-gray-700 mt-3 mb-2">4.1 Payments</h3>
        <p className="text-gray-700 mb-4">
          When you purchase any digital products, training material, or subscriptions through 
          Cloud101, you agree to provide accurate and complete payment information.
        </p>

        <h3 className="text-lg font-semibold text-gray-700 mt-3 mb-2">4.2 Pricing & Updates</h3>
        <p className="text-gray-700 mb-4">
          Prices for our products and courses may change at any time. Cloud101 reserves the right to 
          modify or discontinue products without prior notice.
        </p>

        <h3 className="text-lg font-semibold text-gray-700 mt-3 mb-2">4.3 15-Day Refund Policy</h3>
        <p className="text-gray-700 mb-4">
          Cloud101 offers a <span className="font-medium">15-day refund policy</span> for all paid 
          digital products and online courses, subject to the following conditions:
        </p>

        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Refund requests must be submitted within 15 days of purchase.</li>
          <li>You must provide proof of purchase (email, invoice, or receipt).</li>
          <li>Refunds are granted only if the product or course is found unsatisfactory or not as described.</li>
          <li>Refunds will be processed back to the original payment method within 5–7 business days.</li>
          <li>No refunds are provided after 15 days or for completed courses.</li>
        </ul>

        <p className="text-gray-700">
          To request a refund, contact us at <span className="font-medium">support@cloud101.in</span>.
        </p>
      </section>

      {/* Section 5 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">5. User Accounts</h2>
        <p className="text-gray-700 mb-4">
          When creating an account on Cloud101 (if applicable), you must provide accurate 
          information and maintain the confidentiality of your login credentials.
        </p>

        <p className="text-gray-700">
          You are responsible for any activities performed using your account and must notify us 
          immediately of unauthorized access.
        </p>
      </section>

      {/* Section 6 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">6. Content Usage & Restrictions</h2>
        <p className="text-gray-700 mb-4">
          All materials on Cloud101 are licensed for personal learning use only. You may not:
        </p>

        <ul className="list-disc pl-6 text-gray-700">
          <li>Repost or resell Cloud101 content</li>
          <li>Share course content externally without permission</li>
          <li>Use Cloud101 materials for commercial training without approval</li>
        </ul>
      </section>

      {/* Section 7 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">7. Third-Party Links</h2>
        <p className="text-gray-700">
          Cloud101 may include links to external websites. We do not control or endorse their 
          content, policies, or security practices. Users are encouraged to review third-party 
          privacy and terms pages individually.
        </p>
      </section>

      {/* Section 8 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">8. Disclaimer of Warranties</h2>
        <p className="text-gray-700">
          Cloud101 provides content and services on an “as-is” basis. While we strive for accuracy 
          and quality, we do not guarantee completeness, reliability, or error-free information.
          Users rely on Cloud101 content at their own discretion.
        </p>
      </section>

      {/* Section 9 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">9. Limitation of Liability</h2>
        <p className="text-gray-700">
          Cloud101 is not liable for any direct, indirect, incidental, or consequential damages 
          arising from:
        </p>

        <ul className="list-disc pl-6 text-gray-700 mt-2">
          <li>Use or inability to use our services</li>
          <li>Errors or inaccuracies in content</li>
          <li>Unauthorized access to user information</li>
          <li>Interruptions, bugs, or system failures</li>
        </ul>
      </section>

      {/* Section 10 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">10. Modifications to Terms</h2>
        <p className="text-gray-700">
          Cloud101 reserves the right to modify these Terms at any time. Updates become effective 
          immediately upon posting. Continued use of the site constitutes acceptance of updated Terms.
        </p>
      </section>

      {/* Section 11 */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">11. Contact Us</h2>
        <p className="text-gray-700">
          For questions, support, or refund requests, contact us at:<br />
          <span className="font-medium">support@cloud101.in</span>
        </p>
      </section>
    </main>
  );
}
