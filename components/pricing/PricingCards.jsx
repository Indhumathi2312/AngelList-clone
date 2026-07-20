import Link from 'next/link';

const CheckIcon = () => (
  <svg className="h-5 w-5 text-purple-600 shrink-0 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function PricingCards() {
  return (
    <section className="bg-white py-20 md:py-32 px-5" data-theme="light">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Starter Plan */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm flex flex-col h-full hover:border-gray-300 transition-colors">
            <h3 className="text-2xl font-medium text-gray-900 mb-2">Starter</h3>
            <p className="text-gray-500 mb-6">Perfect for early-stage founders</p>
            <div className="mb-6">
              <span className="text-5xl font-medium text-gray-900">$0</span>
              <span className="text-gray-500">/mo</span>
            </div>
            <Link href="/contact" className="w-full text-center rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors mb-8">
              Get Started
            </Link>
            <ul className="space-y-4 text-gray-700 flex-grow">
              <li className="flex items-start"><CheckIcon /> 1 Team Member</li>
              <li className="flex items-start"><CheckIcon /> Basic Cap Table Management</li>
              <li className="flex items-start"><CheckIcon /> Up to 50 Stakeholders</li>
              <li className="flex items-start"><CheckIcon /> Community Support</li>
            </ul>
          </div>

          {/* Professional Plan */}
          <div className="bg-[#001D21] rounded-2xl border border-[#001D21] p-8 shadow-xl flex flex-col h-full transform md:-translate-y-4 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#5727CE] text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full whitespace-nowrap">
              Most Popular
            </div>
            <h3 className="text-2xl font-medium text-white mb-2">Professional</h3>
            <p className="text-gray-400 mb-6">For scaling teams raising capital</p>
            <div className="mb-6">
              <span className="text-5xl font-medium text-white">$199</span>
              <span className="text-gray-400">/mo</span>
            </div>
            <Link href="/contact" className="w-full text-center rounded-md border border-transparent bg-white px-4 py-3 text-sm font-medium text-[#001D21] hover:bg-gray-100 transition-colors mb-8">
              Start Free Trial
            </Link>
            <ul className="space-y-4 text-gray-300 flex-grow">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#5727CE] shrink-0 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                5 Team Members
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#5727CE] shrink-0 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Advanced Cap Table Management
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#5727CE] shrink-0 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Unlimited Stakeholders
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#5727CE] shrink-0 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Data Room Access
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#5727CE] shrink-0 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Priority Email Support
              </li>
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm flex flex-col h-full hover:border-gray-300 transition-colors">
            <h3 className="text-2xl font-medium text-gray-900 mb-2">Enterprise</h3>
            <p className="text-gray-500 mb-6">Custom solutions for large funds</p>
            <div className="mb-6">
              <span className="text-5xl font-medium text-gray-900">Custom</span>
            </div>
            <Link href="/contact" className="w-full text-center rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors mb-8">
              Contact Sales
            </Link>
            <ul className="space-y-4 text-gray-700 flex-grow">
              <li className="flex items-start"><CheckIcon /> Unlimited Team Members</li>
              <li className="flex items-start"><CheckIcon /> White-labeled Investor Portal</li>
              <li className="flex items-start"><CheckIcon /> Custom API Access</li>
              <li className="flex items-start"><CheckIcon /> Dedicated Account Manager</li>
              <li className="flex items-start"><CheckIcon /> 24/7 Phone Support</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
