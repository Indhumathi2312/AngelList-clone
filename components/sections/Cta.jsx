
import Image from 'next/image';
import Link from 'next/link';

import img1 from '@/public/images/c0ee302b78c2e8d5cd9ae61871d6e163111e65a0-3600x1800.jpg';
import img2 from '@/public/images/d640810303634b9eb95f1a2002a3d09d1c6839ff-1208x1200.jpg';
import img3 from '@/public/images/20072acf1f0307ddb73319cc00240f9296903f9a-3600x1800.png';
import img4 from '@/public/images/c1ac7e66e9a001ba89f22236c6eaa8e78df48aed-1280x1280.png';
import img5 from '@/public/images/776230948cf8794bb7d6272d317419e56f5df6ae-3600x1800.png';
import img6 from '@/public/images/2530eb28e2f2758784c7f06d2bc6d8f956a6c407-1280x1280.jpg';
import img7 from '@/public/images/edd0e60c26536df6d0682f75dd74373cc5b34d10-3600x1800.png';
import img8 from '@/public/images/6bcf4a1beda451cc2d7c9aa01a8f2f2ca483ff8c-1280x1280.png';

export default function Cta() {
  return (
    <div>
          <section className="bg-surface py-10 text-surface-text-primary sm:py-16 md:py-20">
            <div className="mx-auto w-full px-5 sm:px-9 md:px-10 xl:px-12 max-w-[1536px]">
              <div>
                <p className="mb-2 text-body-500">Resources</p>
                <h2 className="mb-10 text-headline-500 sm:mb-12">
                  Latest<br />articles
                </h2>
              </div>
              <div className="grid mdlg:grid-cols-4 mdlg:gap-4 lg:gap-8">
                <article className="relative flex w-full flex-1 flex-col justify-between gap-10 border-b border-surface-stroke-primary py-5 mdlg:pb-4 mdlg:pt-0">
                  <div className="group/grid-post relative flex size-full shrink-0 cursor-pointer items-stretch flex-row mdlg:flex-col">
                    <Link aria-label="AngelList Acquires Ark, Combining Fund Administration Software, Banking, and AI in One Platform" href="/blog/angellist-acquires-ark" className="absolute inset-0"></Link><Link aria-label="AngelList Acquires Ark, Combining Fund Administration Software, Banking, and AI in One Platform" href="/blog/angellist-acquires-ark" className="relative shrink-0 self-start overflow-hidden bg-surface-bg-muted w-[20vw] mr-6 mb-0 aspect-square mdlg:aspect-2/1 mdlg:mb-4 mdlg:w-full mdlg:mr-0"><div className="absolute inset-0 size-full transition-[scale,filter] duration-500 group-hover/grid-post:scale-100 group-hover/grid-post:duration-600 motion-safe:scale-[1.04]">
                        <Image alt="" width="3600" height="1800" style={{color: 'transparent'}} src={img1} className="size-full object-cover object-center hidden mdlg:block" /><Image alt="" width="1208" height="1200" style={{color: 'transparent'}} src={img2} className="size-full object-cover object-center mdlg:hidden" /></div></Link>
                    <div className="relative flex w-full flex-col items-start mdlg:h-full">
                      <Link aria-label="AngelList Acquires Ark, Combining Fund Administration Software, Banking, and AI in One Platform" href="/blog/angellist-acquires-ark" className="absolute inset-0"></Link><Link href="/blog/category/product-news" className="relative inline-flex grow-0 items-center gap-1 self-start rounded-sm font-sans whitespace-nowrap text-[0.75rem] [&amp;_svg]:pointer-events-none [&amp;_svg]:size-3 [&amp;_svg]:shrink-0 bg-tag-bg text-tag-text [[href]]:hover:bg-tag-hover-bg [[href]]:hover:text-tag-hover-text h-6.5 px-2 md:mb-2">Product News</Link><Link href="/blog/angellist-acquires-ark" className="flex flex-1 flex-col justify-between"><h3 className="mt-2 text-body-500 transition-colors duration-200 group-hover/grid-post:text-surface-text-muted">
                          AngelList Acquires Ark, Combining Fund Administration
                          Software, Banking, and AI in One Platform
                        </h3>
                        <div className="text-eyebrow mt-2 mdlg:mt-10">
                          <span className="text-surface-text-muted">Jul 16, 2026{/*   */}
                            — </span>4{/*   */}
                          min read
                        </div></Link>
                    </div>
                  </div>
                </article>
                <article className="relative flex w-full flex-1 flex-col justify-between gap-10 border-b border-surface-stroke-primary py-5 mdlg:pb-4 mdlg:pt-0">
                  <div className="group/grid-post relative flex size-full shrink-0 cursor-pointer items-stretch flex-row mdlg:flex-col">
                    <Link aria-label="Designing Accounting Transactions as First-Class Domain Events" href="/blog/designing-accounting-transactions-as-first-class-domain-events" className="absolute inset-0"></Link><Link aria-label="Designing Accounting Transactions as First-Class Domain Events" href="/blog/designing-accounting-transactions-as-first-class-domain-events" className="relative shrink-0 self-start overflow-hidden bg-surface-bg-muted w-[20vw] mr-6 mb-0 aspect-square mdlg:aspect-2/1 mdlg:mb-4 mdlg:w-full mdlg:mr-0"><div className="absolute inset-0 size-full transition-[scale,filter] duration-500 group-hover/grid-post:scale-100 group-hover/grid-post:duration-600 motion-safe:scale-[1.04]">
                        <Image alt="" width="3600" height="1800" style={{color: 'transparent'}} src={img3} className="size-full object-cover object-center hidden mdlg:block" /><Image alt="" width="1280" height="1280" style={{color: 'transparent'}} src={img4} className="size-full object-cover object-center mdlg:hidden" /></div></Link>
                    <div className="relative flex w-full flex-col items-start mdlg:h-full">
                      <Link aria-label="Designing Accounting Transactions as First-Class Domain Events" href="/blog/designing-accounting-transactions-as-first-class-domain-events" className="absolute inset-0"></Link><Link href="/blog/category/engineering" className="relative inline-flex grow-0 items-center gap-1 self-start rounded-sm font-sans whitespace-nowrap text-[0.75rem] [&amp;_svg]:pointer-events-none [&amp;_svg]:size-3 [&amp;_svg]:shrink-0 bg-tag-bg text-tag-text [[href]]:hover:bg-tag-hover-bg [[href]]:hover:text-tag-hover-text h-6.5 px-2 md:mb-2">Engineering</Link><Link href="/blog/designing-accounting-transactions-as-first-class-domain-events" className="flex flex-1 flex-col justify-between"><h3 className="mt-2 text-body-500 transition-colors duration-200 group-hover/grid-post:text-surface-text-muted">
                          Designing Accounting Transactions as First-Class
                          Domain Events
                        </h3>
                        <div className="text-eyebrow mt-2 mdlg:mt-10">
                          <span className="text-surface-text-muted">Jul 8, 2026{/*   */}
                            — </span>20{/*   */}
                          min read
                        </div></Link>
                    </div>
                  </div>
                </article>
                <article className="relative flex w-full flex-1 flex-col justify-between gap-10 border-b border-surface-stroke-primary py-5 mdlg:pb-4 mdlg:pt-0">
                  <div className="group/grid-post relative flex size-full shrink-0 cursor-pointer items-stretch flex-row mdlg:flex-col">
                    <Link aria-label="Teaching a Spreadsheet Engine to Teach Itself" href="/blog/teaching-a-spreadsheet-engine-to-teach-itself" className="absolute inset-0"></Link><Link aria-label="Teaching a Spreadsheet Engine to Teach Itself" href="/blog/teaching-a-spreadsheet-engine-to-teach-itself" className="relative shrink-0 self-start overflow-hidden bg-surface-bg-muted w-[20vw] mr-6 mb-0 aspect-square mdlg:aspect-2/1 mdlg:mb-4 mdlg:w-full mdlg:mr-0"><div className="absolute inset-0 size-full transition-[scale,filter] duration-500 group-hover/grid-post:scale-100 group-hover/grid-post:duration-600 motion-safe:scale-[1.04]">
                        <Image alt="" width="3600" height="1800" style={{color: 'transparent'}} src={img5} className="size-full object-cover object-center hidden mdlg:block" /><Image alt="" width="1280" height="1280" style={{color: 'transparent'}} src={img6} className="size-full object-cover object-center mdlg:hidden" /></div></Link>
                    <div className="relative flex w-full flex-col items-start mdlg:h-full">
                      <Link aria-label="Teaching a Spreadsheet Engine to Teach Itself" href="/blog/teaching-a-spreadsheet-engine-to-teach-itself" className="absolute inset-0"></Link><Link href="/blog/category/engineering" className="relative inline-flex grow-0 items-center gap-1 self-start rounded-sm font-sans whitespace-nowrap text-[0.75rem] [&amp;_svg]:pointer-events-none [&amp;_svg]:size-3 [&amp;_svg]:shrink-0 bg-tag-bg text-tag-text [[href]]:hover:bg-tag-hover-bg [[href]]:hover:text-tag-hover-text h-6.5 px-2 md:mb-2">Engineering</Link><Link href="/blog/teaching-a-spreadsheet-engine-to-teach-itself" className="flex flex-1 flex-col justify-between"><h3 className="mt-2 text-body-500 transition-colors duration-200 group-hover/grid-post:text-surface-text-muted">
                          Teaching a Spreadsheet Engine to Teach Itself
                        </h3>
                        <div className="text-eyebrow mt-2 mdlg:mt-10">
                          <span className="text-surface-text-muted">Jun 26, 2026{/*   */}
                            — </span>8{/*   */}
                          min read
                        </div></Link>
                    </div>
                  </div>
                </article>
                <article className="relative flex w-full flex-1 flex-col justify-between gap-10 border-b border-surface-stroke-primary py-5 mdlg:pb-4 mdlg:pt-0">
                  <div className="group/grid-post relative flex size-full shrink-0 cursor-pointer items-stretch flex-row mdlg:flex-col">
                    <Link aria-label="Everyone Is a Data Analyst Now" href="/blog/everyone-is-a-data-analyst-now" className="absolute inset-0"></Link><Link aria-label="Everyone Is a Data Analyst Now" href="/blog/everyone-is-a-data-analyst-now" className="relative shrink-0 self-start overflow-hidden bg-surface-bg-muted w-[20vw] mr-6 mb-0 aspect-square mdlg:aspect-2/1 mdlg:mb-4 mdlg:w-full mdlg:mr-0"><div className="absolute inset-0 size-full transition-[scale,filter] duration-500 group-hover/grid-post:scale-100 group-hover/grid-post:duration-600 motion-safe:scale-[1.04]">
                        <Image alt="" width="3600" height="1800" style={{color: 'transparent'}} src={img7} className="size-full object-cover object-center hidden mdlg:block" /><Image alt="" width="1280" height="1280" style={{color: 'transparent'}} src={img8} className="size-full object-cover object-center mdlg:hidden" /></div></Link>
                    <div className="relative flex w-full flex-col items-start mdlg:h-full">
                      <Link aria-label="Everyone Is a Data Analyst Now" href="/blog/everyone-is-a-data-analyst-now" className="absolute inset-0"></Link><Link href="/blog/category/engineering" className="relative inline-flex grow-0 items-center gap-1 self-start rounded-sm font-sans whitespace-nowrap text-[0.75rem] [&amp;_svg]:pointer-events-none [&amp;_svg]:size-3 [&amp;_svg]:shrink-0 bg-tag-bg text-tag-text [[href]]:hover:bg-tag-hover-bg [[href]]:hover:text-tag-hover-text h-6.5 px-2 md:mb-2">Engineering</Link><Link href="/blog/everyone-is-a-data-analyst-now" className="flex flex-1 flex-col justify-between"><h3 className="mt-2 text-body-500 transition-colors duration-200 group-hover/grid-post:text-surface-text-muted">
                          Everyone Is a Data Analyst Now
                        </h3>
                        <div className="text-eyebrow mt-2 mdlg:mt-10">
                          <span className="text-surface-text-muted">Jun 10, 2026{/*   */}
                            — </span>15{/*   */}
                          min read
                        </div></Link>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </div>
  );
}
