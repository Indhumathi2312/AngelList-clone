export default function Mission() {
  return (
    <section className="scroll-m-header text-surface-text-primary relative bg-white py-24 md:py-32">
      <div className="mx-auto w-full px-5 sm:px-9 md:px-10 xl:px-12 max-w-[1536px]">
        <div className="flex flex-col gap-10 md:gap-16 xl:gap-20">
          <div className="flex flex-col gap-4 items-start text-left w-full max-w-[1100px]">
            <p className="w-full text-[1.125rem] font-medium text-gray-500">Our Mission</p>
            <div className="w-full h-[1px] bg-gray-200 my-2"></div>
            <h2 className="w-full text-3xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.1] font-medium tracking-tight text-[#001D21]">
              We aim to accelerate innovation by providing startups and investors with the connected tools they need to launch and scale a startup or fund—and invest in both.
            </h2>
          </div>
          
          <div className="w-full flex-col gap-10 sm:flex-row grid sm:grid-cols-2 md:grid-cols-4 mt-8">
            <div className="flex flex-col gap-2 md:border-l border-gray-200 md:pl-8">
              <span className="block text-5xl md:text-[4rem] font-medium text-[#001D21] tracking-tight">72k+</span>
              <span className="block text-gray-500 font-medium text-lg">Investors</span>
            </div>
            <div className="flex flex-col gap-2 md:border-l border-gray-200 md:pl-8">
              <span className="block text-5xl md:text-[4rem] font-medium text-[#001D21] tracking-tight">$17B</span>
              <span className="block text-gray-500 font-medium text-lg">Assets on platform</span>
            </div>
            <div className="flex flex-col gap-2 md:border-l border-gray-200 md:pl-8">
              <span className="block text-5xl md:text-[4rem] font-medium text-[#001D21] tracking-tight">25k</span>
              <span className="block text-gray-500 font-medium text-lg">Funds and syndicates</span>
            </div>
            <div className="flex flex-col gap-2 md:border-l border-gray-200 md:pl-8">
              <span className="block text-5xl md:text-[4rem] font-medium text-[#001D21] tracking-tight">13k</span>
              <span className="block text-gray-500 font-medium text-lg">Active startups</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
