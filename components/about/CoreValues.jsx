import Image from 'next/image';
import Link from 'next/link';

export default function CoreValues() {
  return (
    <section className="bg-[#f7f8f9] py-24">
      <div className="mx-auto w-full px-5 sm:px-9 md:px-10 xl:px-12 max-w-[1536px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#001D21] mb-6">
              Empowering the next generation of builders.
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              AngelList is where the world’s top startups and investors connect. From fundraising to fund administration, we build the seamless infrastructure that removes friction and lets founders focus on changing the world.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-sm font-sans text-[1rem] leading-normal font-medium h-12 px-6 bg-[#001D21] text-white hover:bg-black transition-colors duration-200">
              Get in touch
            </Link>
          </div>
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/images/about/hero-1.jpg" alt="Future of Startups" fill className="object-cover" />
            <div className="absolute inset-0 bg-[#b0a8ff] mix-blend-multiply opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
