import Link from 'next/link';

export default function Content() {
  return (
    <section className="bg-white py-16 md:py-24" data-theme="light">
      <div className="mx-auto w-full px-5 sm:px-9 md:px-10 xl:px-12 max-w-3xl">
        <div className="prose prose-lg max-w-none text-gray-700">
          
          <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
            This document contains important legal and regulatory disclosures regarding the services provided by AngelList. Please read these disclosures carefully as they contain critical information regarding risks, operations, and limitations of liability.
          </p>

          <h2 className="text-2xl font-medium text-[#001D21] mt-12 mb-6">1. General Disclaimer</h2>
          <p className="mb-4 leading-relaxed">
            The information contained on the AngelList platform is provided for informational and discussion purposes only and is not intended to be a recommendation for any investment, service, product, or other advice of any kind, and shall not constitute or imply an offer of any kind. 
          </p>
          <p className="mb-8 leading-relaxed">
            Any investment opportunities and/or products or services shown here will only be completed pursuant to formal offering materials, a letter of intent, and/or any other agreements as determined by AngelList containing full details regarding risks, minimum investment, fees, and expenses of such transaction.
          </p>

          <h2 className="text-2xl font-medium text-[#001D21] mt-12 mb-6">2. Investment Risks</h2>
          <p className="mb-4 leading-relaxed">
            Investing in early-stage startups and venture funds involves a high degree of risk. Investors must be able to afford the loss of their entire investment.
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-3 leading-relaxed">
            <li><strong>Illiquidity:</strong> Startup investments are highly illiquid. There is typically no secondary market for these securities, meaning you should be prepared to hold your investment for years without the ability to cash out.</li>
            <li><strong>Loss of Capital:</strong> Startups have a high failure rate. It is entirely possible that you will lose your entire principal investment.</li>
            <li><strong>Lack of Information:</strong> Startups are rarely required to provide the same level of financial disclosure as publicly traded companies.</li>
          </ul>

          <h2 className="text-2xl font-medium text-[#001D21] mt-12 mb-6">3. Forward-Looking Statements</h2>
          <p className="mb-8 leading-relaxed">
            Certain statements on the AngelList platform may constitute "forward-looking statements." These statements involve known and unknown risks, uncertainties, and other factors which may cause actual results, performance, or achievements to be materially different from any future results, performance, or achievements expressed or implied by such forward-looking statements. Past performance is not indicative of future results.
          </p>

          <h2 className="text-2xl font-medium text-[#001D21] mt-12 mb-6">4. Regulatory Status</h2>
          <p className="mb-8 leading-relaxed">
            AngelList operates various entities that may be registered with regulatory bodies such as the Securities and Exchange Commission (SEC) or the Financial Industry Regulatory Authority (FINRA). However, registration does not imply a certain level of skill or training, nor does it imply endorsement by the SEC or FINRA.
          </p>

          <h2 className="text-2xl font-medium text-[#001D21] mt-12 mb-6">5. Conflict of Interest</h2>
          <p className="mb-8 leading-relaxed">
            AngelList and its affiliates may have conflicts of interest in operating the platform. For example, AngelList may earn fees from funds, syndicates, or startups that raise capital on the platform. A full outline of our conflict of interest policy is available upon request.
          </p>

          <h2 className="text-2xl font-medium text-[#001D21] mt-12 mb-6">6. Contact Information</h2>
          <p className="mb-4 leading-relaxed">
            For any questions or concerns regarding these disclosures, please contact us:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-3 leading-relaxed">
            <li>By email: compliance@angellist.com</li>
            <li>By visiting this page on our website: <Link href="/contact" className="text-purple-600 hover:text-purple-800 transition-colors">angellist.com/contact</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
