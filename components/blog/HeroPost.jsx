import Image from 'next/image';
import Link from 'next/link';
import { heroPost } from '../../lib/blogData';

export default function HeroPost() {
  return (
    <section className="scroll-m-header text-surface-text-primary relative bg-white pt-24 pb-16" data-theme="light">
      <div className="mx-auto w-full px-5 sm:px-9 md:px-10 xl:px-12 max-w-[1536px]">
        <Link href={`/blog/${heroPost.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[16/9] lg:aspect-square w-full rounded-2xl overflow-hidden shadow-md">
            <Image 
              src={heroPost.image} 
              alt={heroPost.title} 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-105" 
              priority
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-sm font-medium text-purple-700 tracking-wide uppercase">{heroPost.category}</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#001D21] group-hover:text-purple-700 transition-colors">
              {heroPost.title}
            </h1>
            <p className="text-xl text-gray-600 mt-2 line-clamp-3 leading-relaxed">
              {heroPost.description}
            </p>
            <div className="text-gray-500 font-medium mt-4">
              {heroPost.date} • {heroPost.readTime}
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
