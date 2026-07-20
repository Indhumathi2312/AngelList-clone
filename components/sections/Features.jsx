
import Image from 'next/image';
import Link from 'next/link';

import img1 from '@/public/images/image.png';

export default function Features() {
  return (
    <div>
      <section className="bg-surface-bg-muted py-16 text-surface-text-primary md:py-20">
        <div className="mx-auto w-full px-5 sm:px-9 md:px-10 xl:px-12 max-w-[1536px]">
          <div className="grid items-center bg-[#CDEED3] text-[#544A2E] md:grid-cols-2 lg:gap-8">
            <div className="flex w-full max-w-160 flex-col items-start gap-6 px-8 pb-0 pt-16 sm:px-10 md:p-16">
              <h2 className="text-headline-200">
                Full Service Fund Management
              </h2>
              <p className="mb-4">
                AngelList’s full service offerings provides access to 50+
                services that remove friction from fund management for
                venture funds, rolling funds, and syndicates.
              </p>
              <Link href="/fund-administration" className="border-b border-current hover:text-surface-text-primary">Explore our fund &amp; syndicate offerings</Link>
            </div>
            <div className="flex items-center justify-end pl-4 md:pl-0">
              <Image alt="" width="1200" height="720" style={{ color: 'transparent' }} src={img1} className="block w-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
