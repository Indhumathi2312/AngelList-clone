export default function CheckoutForm() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-medium text-gray-900 mb-8">Contact Information</h2>
      <div className="mb-10 space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
          <input type="email" id="email" className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-black focus:ring-black outline-none transition-colors" placeholder="you@example.com" />
        </div>
      </div>

      <h2 className="text-2xl font-medium text-gray-900 mb-8">Shipping Address</h2>
      <div className="mb-10 grid grid-cols-2 gap-4">
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First name</label>
          <input type="text" id="firstName" className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-black focus:ring-black outline-none transition-colors" />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
          <input type="text" id="lastName" className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-black focus:ring-black outline-none transition-colors" />
        </div>
        <div className="col-span-2">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <input type="text" id="address" className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-black focus:ring-black outline-none transition-colors" placeholder="123 Market St" />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
          <input type="text" id="city" className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-black focus:ring-black outline-none transition-colors" />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">Postal code</label>
          <input type="text" id="postalCode" className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-black focus:ring-black outline-none transition-colors" />
        </div>
      </div>

      <h2 className="text-2xl font-medium text-gray-900 mb-8">Payment Details</h2>
      <div className="mb-10 space-y-4">
        <div>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Card number</label>
          <div className="relative">
            <input type="text" id="cardNumber" className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-black focus:ring-black outline-none transition-colors" placeholder="0000 0000 0000 0000" />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">Expiration date (MM/YY)</label>
            <input type="text" id="expiry" className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-black focus:ring-black outline-none transition-colors" placeholder="MM/YY" />
          </div>
          <div>
            <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
            <input type="text" id="cvc" className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-black focus:ring-black outline-none transition-colors" placeholder="123" />
          </div>
        </div>
      </div>

      <button className="w-full bg-black text-white rounded-md py-4 font-medium text-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
        Pay $140.40
      </button>
      
      <p className="flex justify-center items-center gap-2 text-sm text-gray-500 mt-6">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        Payments are secure and encrypted
      </p>
    </div>
  );
}
