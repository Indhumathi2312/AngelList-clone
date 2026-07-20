export default function Newsletter() {
  return (
    <section className="bg-[#001D21] text-white py-24 md:py-32" data-theme="ink">
      <div className="mx-auto w-full px-5 sm:px-9 md:px-10 xl:px-12 max-w-[1536px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-16">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
              Subscribe to the AngelList newsletter
            </h2>
            <p className="text-lg text-gray-300">
              Get the latest insights, data, and guides on venture capital and startups delivered directly to your inbox.
            </p>
          </div>
          
          <div className="w-full md:w-auto flex-shrink-0">
            <form className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                required
                className="px-4 py-3 rounded-md bg-white text-[#001D21] min-w-[280px] focus:outline-none focus:ring-2 focus:ring-[#b0a8ff]"
              />
              <button 
                type="button" 
                className="bg-[#b0a8ff] text-[#001D21] font-medium px-6 py-3 rounded-md hover:bg-[#c9c4ff] transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3 text-center sm:text-left">
              By subscribing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
