import Link from 'next/link';

export default function Hero() {
  return (
    <section className="scroll-m-header text-surface-text-primary relative bg-[#001D21] text-white pt-24 md:pt-32 pb-24 md:pb-32" data-theme="ink">
      <div className="mx-auto w-full px-5 sm:px-9 md:px-10 xl:px-12 max-w-[1536px]">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-sm font-medium text-purple-400 tracking-wide uppercase mb-4">Official Merchandise</div>
          <h1 className="w-full text-[3rem] leading-[1.1] md:text-5xl lg:text-7xl font-medium tracking-tight text-white mb-6">
            The AngelList Collection
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-300 leading-relaxed mb-10">
            Premium tech accessories and minimalist apparel designed for the modern startup ecosystem.
          </p>
          <Link href="/shop" className="inline-block bg-white text-[#001D21] font-medium px-8 py-4 rounded-md hover:bg-gray-100 transition-colors text-lg">
            Shop All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
