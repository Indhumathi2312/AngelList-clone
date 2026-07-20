'use client';

export default function ContactForm() {
  return (
    <div className="bg-white text-[#001D21] p-8 md:p-12 rounded-xl shadow-2xl">
      <h3 className="text-3xl font-medium mb-8">Contact Sales</h3>
      <form className="flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First name *</label>
            <input type="text" id="firstName" className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all" />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last name *</label>
            <input type="text" id="lastName" className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all" />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">Work email *</label>
          <input type="email" id="email" className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="company" className="text-sm font-medium text-gray-700">Company name *</label>
          <input type="text" id="company" className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="message" className="text-sm font-medium text-gray-700">How can we help? *</label>
          <textarea id="message" rows="4" className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"></textarea>
        </div>
        <button type="button" className="mt-4 w-full bg-[#001D21] text-white font-medium text-lg py-4 rounded-md hover:bg-[#103035] transition-colors focus:ring-4 focus:ring-[#103035]/30">
          Submit
        </button>
      </form>
    </div>
  );
}
