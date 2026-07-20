import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="scroll-m-header text-surface-text-primary relative bg-[#001D21] text-white" data-theme="ink">
      <div className="mx-auto w-full px-5 sm:px-9 md:px-10 xl:px-12 max-w-[1536px] relative pt-24 md:pt-32">
        <div className="flex flex-col gap-4 items-start text-left w-full max-w-[920px]">
          <div className="flex items-center text-lg font-medium text-gray-300 mb-2">
            <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
            <div className="shrink-0">About</div>
          </div>
          <h1 className="w-full text-[2.5rem] leading-[1.1] md:text-7xl font-medium tracking-tight mb-8 text-white">
            AngelList is building the infrastructure that powers the startup economy
          </h1>
          <Link href="/careers" className="inline-flex items-center justify-center gap-2 rounded-sm font-sans text-[1rem] leading-normal font-medium h-12 px-6 bg-[#b0a8ff] text-[#001D21] hover:bg-[#c9c4ff] transition-colors duration-200">
            Explore careers
          </Link>
        </div>
        
        <div className="w-full overflow-hidden pb-36 pt-16 md:pb-32 md:pt-24 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl transform transition-transform hover:-translate-y-2 hover:shadow-2xl group">
              <Image src="/images/about/hero-1.jpg" alt="Investors" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001D21]/80 to-transparent"></div>
              <div className="absolute bottom-6 left-0 right-0 text-center text-white font-medium text-xl">Investors</div>
            </div>
            <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl transform transition-transform hover:-translate-y-2 hover:shadow-2xl mt-0 md:mt-12 group">
              <Image src="/images/about/hero-2.jpg" alt="Private markets" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001D21]/80 to-transparent"></div>
              <div className="absolute bottom-6 left-0 right-0 text-center text-white font-medium text-xl">Private markets</div>
            </div>
            <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl transform transition-transform hover:-translate-y-2 hover:shadow-2xl group">
              <Image src="/images/about/hero-3.jpg" alt="Innovators" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001D21]/80 to-transparent"></div>
              <div className="absolute bottom-6 left-0 right-0 text-center text-white font-medium text-xl">Innovators</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
