import Link from 'next/link';

export default function Content() {
  return (
    <section className="bg-white py-16 md:py-24" data-theme="light">
      <div className="mx-auto w-full px-5 sm:px-9 md:px-10 xl:px-12 max-w-3xl">
        <div className="prose prose-lg max-w-none text-gray-700">
          
          <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
            These Terms of Service ("Terms") govern your access to and use of the AngelList website, platform, and services (collectively, the "Services"). Please read these Terms carefully before using our Services.
          </p>

          <h2 className="text-2xl font-medium text-[#001D21] mt-12 mb-6">1. Acceptance of Terms</h2>
          <p className="mb-4 leading-relaxed">
            By accessing or using the Services, you agree to be bound by these Terms and all applicable laws and regulations. If you do not agree with any part of these Terms, you may not use our Services.
          </p>

          <h2 className="text-2xl font-medium text-[#001D21] mt-12 mb-6">2. Use of the Services</h2>
          <p className="mb-4 leading-relaxed">
            You may use our Services only for lawful purposes and in accordance with these Terms. You agree not to use the Services:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-3 leading-relaxed">
            <li>In any way that violates any applicable national or international law or regulation.</li>
            <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
            <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter", "spam", or any other similar solicitation.</li>
            <li>To impersonate or attempt to impersonate AngelList, an AngelList employee, another user, or any other person or entity.</li>
            <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services, or which, as determined by us, may harm AngelList or users of the Services or expose them to liability.</li>
          </ul>

          <h2 className="text-2xl font-medium text-[#001D21] mt-12 mb-6">3. Intellectual Property Rights</h2>
          <p className="mb-8 leading-relaxed">
            The Services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by AngelList, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>

          <h2 className="text-2xl font-medium text-[#001D21] mt-12 mb-6">4. Disclaimer of Warranties</h2>
          <p className="mb-8 leading-relaxed">
            YOUR USE OF THE SERVICES IS AT YOUR OWN RISK. THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER ANGELLIST NOR ANY PERSON ASSOCIATED WITH ANGELLIST MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES.
          </p>

          <h2 className="text-2xl font-medium text-[#001D21] mt-12 mb-6">5. Limitation of Liability</h2>
          <p className="mb-8 leading-relaxed">
            IN NO EVENT WILL ANGELLIST, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICES.
          </p>
          
          <h2 className="text-2xl font-medium text-[#001D21] mt-12 mb-6">6. Changes to the Terms</h2>
          <p className="mb-8 leading-relaxed">
            We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post them. Your continued use of the Services following the posting of revised Terms means that you accept and agree to the changes.
          </p>

          <h2 className="text-2xl font-medium text-[#001D21] mt-12 mb-6">7. Contact Information</h2>
          <p className="mb-4 leading-relaxed">
            For any questions or concerns regarding these Terms, please contact us:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-3 leading-relaxed">
            <li>By email: legal@angellist.com</li>
            <li>By visiting this page on our website: <Link href="/contact" className="text-purple-600 hover:text-purple-800 transition-colors">angellist.com/contact</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
