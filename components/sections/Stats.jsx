
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import img1 from '@/public/images/f056ec16a56b3d6492c61188484687d1cba4dffb-2400x1260.png';

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  const translateClass = isVisible ? '-translate-y-full' : '';

  return (
    <div ref={ref}>
      <section data-theme="ink" className="bg-[#6E5C3B] text-[#E0FEE6]">
        <div className="mx-auto w-full px-5 sm:px-9 md:px-10 xl:px-12 max-w-[1536px] grid gap-8 pb-16 pt-14 md:grid-cols-12">
          <div className="col-span-full max-w-full md:col-[1/6] md:max-w-[360px]">
            <div style={{ maxWidth: '100%' }} className="flex flex-col gap-0 w-full">
              <p className="w-full text-body-500">By the numbers</p>
              <div className="block w-full h-2"></div>
              <h2 className="w-full text-headline-500">Fueling innovation</h2>
              <div className="block w-full h-4"></div>
              <p className="w-full text-body-500">
                With more than half of all top-tier VC deals run through the
                platform, AngelList is at the heart of venture investing.
                This exposure gives AngelList the insight to identify gaps
                in the VC market and build the solutions that bridge them.
              </p>
            </div>
          </div>
          <div className="col-span-full flex flex-col justify-between pt-2 md:col-[7/-1] md:row-span-2">
            <div className="border-t border-[#5D5337] pb-12 md:pb-32 pt-6 pr-4">
              <div className="flex font-display tracking-[-0.04em] pb-4 md:pb-6 text-[min(max(15vw,72px),216px)] leading-[0.9]">
                <div className="overflow-hidden whitespace-nowrap font-sans-ss01 tracking-tighter">
                  <span className="inline-block">$</span>
                  <div className="relative inline-block">
                    <span className="invisible inline-block">1</span><span className={`absolute left-0 top-0 flex flex-col transition-transform delay-300 duration-2000 ease-[cubic-bezier(.42,.08,.04,1)] motion-reduce:-translate-y-full motion-reduce:duration-0 ${translateClass}`}><span className="">0</span><span className="">1</span><span className="">2</span><span className="">3</span><span className="">4</span><span className="">5</span><span className="">6</span><span className="">7</span><span className="">8</span><span className="">9</span><span className="">0</span><span className="absolute bottom-0 translate-y-full">1</span></span>
                  </div>
                  <div className="relative inline-block">
                    <span className="invisible inline-block">7</span><span className={`absolute left-0 top-0 flex flex-col transition-transform delay-300 duration-2000 ease-[cubic-bezier(.42,.08,.04,1)] motion-reduce:-translate-y-full motion-reduce:duration-0 ${translateClass}`}><span className="">0</span><span className="">1</span><span className="">2</span><span className="">3</span><span className="">4</span><span className="">5</span><span className="">6</span><span className="">7</span><span className="">8</span><span className="">9</span><span className="">0</span><span className="">1</span><span className="">2</span><span className="">3</span><span className="">4</span><span className="">5</span><span className="">6</span><span className="">7</span><span className="">8</span><span className="">9</span><span className="">0</span><span className="">1</span><span className="">2</span><span className="">3</span><span className="">4</span><span className="">5</span><span className="">6</span><span className="absolute bottom-0 translate-y-full">7</span></span>
                  </div>
                  <div className="relative inline-block">
                    <span className="invisible inline-block">1</span><span className={`absolute left-0 top-0 flex flex-col transition-transform delay-300 duration-2000 ease-[cubic-bezier(.42,.08,.04,1)] motion-reduce:-translate-y-full motion-reduce:duration-0 ${translateClass}`}><span className="">0</span><span className="">1</span><span className="">2</span><span className="">3</span><span className="">4</span><span className="">5</span><span className="">6</span><span className="">7</span><span className="">8</span><span className="">9</span><span className="">0</span><span className="">1</span><span className="">2</span><span className="">3</span><span className="">4</span><span className="">5</span><span className="">6</span><span className="">7</span><span className="">8</span><span className="">9</span><span className="">0</span><span className="absolute bottom-0 translate-y-full">1</span></span>
                  </div>
                  <span className="inline-block">B</span>
                </div>
              </div>
              <p>Assets on platform</p>
            </div>
            <div className="grid grid-cols-2 border-b border-[#5D5337]">
              <div className="border-t border-[#5D5337] pb-10 md:pb-12 pt-3 pr-2 sm:pr-4">
                <div className="flex font-display tracking-[-0.04em] text-[min(max(6.25vw,32px),100px)] leading-[1.1]">
                  <div className="overflow-hidden whitespace-nowrap font-sans-ss01 tracking-tighter">
                    <div className="relative inline-block">
                      <span className="invisible inline-block">2</span><span className={`absolute left-0 top-0 flex flex-col transition-transform delay-300 duration-2000 ease-[cubic-bezier(.42,.08,.04,1)] motion-reduce:-translate-y-full motion-reduce:duration-0 ${translateClass}`}><span className="">0</span><span className="">1</span><span className="absolute bottom-0 translate-y-full">2</span></span>
                    </div>
                    <div className="relative inline-block">
                      <span className="invisible inline-block">5</span><span className={`absolute left-0 top-0 flex flex-col transition-transform delay-300 duration-2000 ease-[cubic-bezier(.42,.08,.04,1)] motion-reduce:-translate-y-full motion-reduce:duration-0 ${translateClass}`}><span className="">0</span><span className="">1</span><span className="">2</span><span className="">3</span><span className="">4</span><span className="">5</span><span className="">6</span><span className="">7</span><span className="">8</span><span className="">9</span><span className="">0</span><span className="">1</span><span className="">2</span><span className="">3</span><span className="">4</span><span className="absolute bottom-0 translate-y-full">5</span></span>
                    </div>
                    <span className="inline-block">k</span><span className="inline-block">+</span>
                  </div>
                </div>
                <p>Funds and syndicates</p>
              </div>
              <div className="border-t border-[#5D5337] pb-10 md:pb-12 pt-3 pr-2 sm:pr-4">
                <div className="flex font-display tracking-[-0.04em] text-[min(max(6.25vw,32px),100px)] leading-[1.1]">
                  <div className="overflow-hidden whitespace-nowrap font-sans-ss01 tracking-tighter">
                    <div className="relative inline-block">
                      <span className="invisible inline-block">1</span><span className={`absolute left-0 top-0 flex flex-col transition-transform delay-300 duration-2000 ease-[cubic-bezier(.42,.08,.04,1)] motion-reduce:-translate-y-full motion-reduce:duration-0 ${translateClass}`}><span className="">0</span><span className="absolute bottom-0 translate-y-full">1</span></span>
                    </div>
                    <div className="relative inline-block">
                      <span className="invisible inline-block">3</span><span className={`absolute left-0 top-0 flex flex-col transition-transform delay-300 duration-2000 ease-[cubic-bezier(.42,.08,.04,1)] motion-reduce:-translate-y-full motion-reduce:duration-0 ${translateClass}`}><span className="">0</span><span className="">1</span><span className="">2</span><span className="">3</span><span className="">4</span><span className="">5</span><span className="">6</span><span className="">7</span><span className="">8</span><span className="">9</span><span className="">0</span><span className="">1</span><span className="">2</span><span className="absolute bottom-0 translate-y-full">3</span></span>
                    </div>
                    <span className="inline-block">k</span><span className="inline-block">+</span>
                  </div>
                </div>
                <p>Active startups</p>
              </div>
              <div className="border-t border-[#5D5337] pb-10 md:pb-12 pt-3 pr-2 sm:pr-4">
                <div className="flex font-display tracking-[-0.04em] text-[min(max(6.25vw,32px),100px)] leading-[1.1]">
                  <div className="overflow-hidden whitespace-nowrap font-sans-ss01 tracking-tighter">
                    <div className="relative inline-block">
                      <span className="invisible inline-block">7</span><span className={`absolute left-0 top-0 flex flex-col transition-transform delay-300 duration-2000 ease-[cubic-bezier(.42,.08,.04,1)] motion-reduce:-translate-y-full motion-reduce:duration-0 ${translateClass}`}><span className="">0</span><span className="">1</span><span className="">2</span><span className="">3</span><span className="">4</span><span className="">5</span><span className="">6</span><span className="absolute bottom-0 translate-y-full">7</span></span>
                    </div>
                    <div className="relative inline-block">
                      <span className="invisible inline-block">2</span><span className={`absolute left-0 top-0 flex flex-col transition-transform delay-300 duration-2000 ease-[cubic-bezier(.42,.08,.04,1)] motion-reduce:-translate-y-full motion-reduce:duration-0 ${translateClass}`}><span className="">0</span><span className="">1</span><span className="">2</span><span className="">3</span><span className="">4</span><span className="">5</span><span className="">6</span><span className="">7</span><span className="">8</span><span className="">9</span><span className="">0</span><span className="">1</span><span className="absolute bottom-0 translate-y-full">2</span></span>
                    </div>
                    <span className="inline-block">k</span><span className="inline-block">+</span>
                  </div>
                </div>
                <p>Active investors</p>
              </div>
              <div className="border-t border-[#5D5337] pb-10 md:pb-12 pt-3 pr-2 sm:pr-4">
                <div className="flex font-display tracking-[-0.04em] text-[min(max(6.25vw,32px),100px)] leading-[1.1]">
                  <div className="overflow-hidden whitespace-nowrap font-sans-ss01 tracking-tighter">
                    <span className="inline-block">$</span>
                    <div className="relative inline-block">
                      <span className="invisible inline-block">1</span><span className={`absolute left-0 top-0 flex flex-col transition-transform delay-300 duration-2000 ease-[cubic-bezier(.42,.08,.04,1)] motion-reduce:-translate-y-full motion-reduce:duration-0 ${translateClass}`}><span className="">0</span><span className="">1</span><span className="">2</span><span className="">3</span><span className="">4</span><span className="">5</span><span className="">6</span><span className="">7</span><span className="">8</span><span className="">9</span><span className="">0</span><span className="absolute bottom-0 translate-y-full">1</span></span>
                    </div>
                    <div className="relative inline-block">
                      <span className="invisible inline-block">0</span><span className={`absolute left-0 top-0 flex flex-col transition-transform delay-300 duration-2000 ease-[cubic-bezier(.42,.08,.04,1)] motion-reduce:-translate-y-full motion-reduce:duration-0 ${translateClass}`}><span className="">0</span><span className="">1</span><span className="">2</span><span className="">3</span><span className="">4</span><span className="">5</span><span className="">6</span><span className="">7</span><span className="">8</span><span className="">9</span><span className="">0</span><span className="">1</span><span className="">2</span><span className="">3</span><span className="">4</span><span className="">5</span><span className="">6</span><span className="">7</span><span className="">8</span><span className="">9</span><span className="absolute bottom-0 translate-y-full">0</span></span>
                    </div>
                    <span className="inline-block">.</span>
                    <div className="relative inline-block">
                      <span className="invisible inline-block">7</span><span className={`absolute left-0 top-0 flex flex-col transition-transform delay-300 duration-2000 ease-[cubic-bezier(.42,.08,.04,1)] motion-reduce:-translate-y-full motion-reduce:duration-0 ${translateClass}`}><span className="">0</span><span className="">1</span><span className="">2</span><span className="">3</span><span className="">4</span><span className="">5</span><span className="">6</span><span className="">7</span><span className="">8</span><span className="">9</span><span className="">0</span><span className="">1</span><span className="">2</span><span className="">3</span><span className="">4</span><span className="">5</span><span className="">6</span><span className="">7</span><span className="">8</span><span className="">9</span><span className="">0</span><span className="">1</span><span className="">2</span><span className="">3</span><span className="">4</span><span className="">5</span><span className="">6</span><span className="absolute bottom-0 translate-y-full">7</span></span>
                    </div>
                    <span className="inline-block">B</span>
                  </div>
                </div>
                <p>Raised by active startups</p>
              </div>
            </div>
          </div>
          <div className="col-span-full mt-4 w-full max-w-[288px] self-end md:col-[1/6] md:max-w-[348px]">
            <Link href="/blog/fund-benchmarks-report-2025" className="group flex w-full flex-col items-start gap-4 border-b pb-3 border-[#5D5337]"><span className="flex w-full flex-col gap-3"><div className="relative aspect-2/1 w-full overflow-hidden bg-purple-1">
              <Image alt="" width="2400" height="1260" style={{ color: 'transparent' }} src={img1} className="scale-on-hover absolute inset-0 size-full object-cover object-center" />
            </div>
              <p className="text-body-500">
                The Fund Benchmarks Report 2025
              </p></span><span className="rounded-sm px-2 py-0.5 text-body-100 backdrop-blur-lg bg-white/10 text-white">Data</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
