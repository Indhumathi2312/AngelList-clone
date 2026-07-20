import Link from 'next/link';

export default function Content() {
  return (
    <section className="bg-white py-16 md:py-24" data-theme="light">
      <div className="mx-auto w-full px-5 sm:px-9 md:px-10 xl:px-12 max-w-3xl">
        <div className="prose prose-lg max-w-none text-gray-700">
          
          <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
            This Privacy Policy describes how AngelList ("we", "us", or "our") collects, uses, and shares your personal information when you use our website, platform, and services (collectively, the "Services"). By using our Services, you agree to the collection and use of information in accordance with this policy.
          </p>

          <h2 className="text-2xl font-medium text-[#001D21] mt-12 mb-6">1. Information We Collect</h2>
          <p className="mb-4 leading-relaxed">
            We collect several different types of information for various purposes to provide and improve our Services to you:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-3 leading-relaxed">
            <li><strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you, such as your email address, first name, last name, phone number, and address.</li>
            <li><strong>Usage Data:</strong> We may also collect information on how the Service is accessed and used. This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</li>
            <li><strong>Tracking & Cookies Data:</strong> We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</li>
          </ul>

          <h2 className="text-2xl font-medium text-[#001D21] mt-12 mb-6">2. How We Use Your Information</h2>
          <p className="mb-4 leading-relaxed">
            AngelList uses the collected data for various purposes:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-3 leading-relaxed">
            <li>To provide and maintain the Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
            <li>To provide customer care and support</li>
            <li>To provide analysis or valuable information so that we can improve the Service</li>
            <li>To monitor the usage of the Service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>

          <h2 className="text-2xl font-medium text-[#001D21] mt-12 mb-6">3. Security Of Data</h2>
          <p className="mb-8 leading-relaxed">
            The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
          </p>

          <h2 className="text-2xl font-medium text-[#001D21] mt-12 mb-6">4. Service Providers</h2>
          <p className="mb-8 leading-relaxed">
            We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>

          <h2 className="text-2xl font-medium text-[#001D21] mt-12 mb-6">5. Changes To This Privacy Policy</h2>
          <p className="mb-8 leading-relaxed">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>

          <h2 className="text-2xl font-medium text-[#001D21] mt-12 mb-6">6. Contact Us</h2>
          <p className="mb-4 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-3 leading-relaxed">
            <li>By email: privacy@angellist.com</li>
            <li>By visiting this page on our website: <Link href="/contact" className="text-purple-600 hover:text-purple-800 transition-colors">angellist.com/contact</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
