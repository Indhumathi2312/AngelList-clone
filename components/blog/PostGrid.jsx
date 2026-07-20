import Image from 'next/image';
import Link from 'next/link';
import { gridPosts } from '../../lib/blogData';

export default function PostGrid() {

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto w-full px-5 sm:px-9 md:px-10 xl:px-12 max-w-[1536px]">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#001D21]">
            Latest Articles
          </h2>
          <Link href="/blog" className="hidden sm:inline-flex items-center gap-2 font-medium text-[#001D21] hover:text-purple-700 transition-colors">
            View all
            <svg viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 transition-transform -rotate-90">
              <path d="M5.73359 8.66516L0.933594 3.86516L1.46392 3.33483L5.99876 7.86967L10.5336 3.33483L11.0639 3.86516L6.26392 8.66516L5.99876 8.93033L5.73359 8.66516Z"></path>
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gridPosts.map((post, index) => (
            <Link key={index} href={`/blog/${post.slug}`} className="group flex flex-col gap-4">
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden shadow-sm">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <div className="text-sm font-medium text-purple-700">{post.category}</div>
                <h3 className="text-2xl font-medium text-[#001D21] group-hover:text-purple-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <div className="text-gray-500 text-sm mt-1">{post.date}</div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-10 sm:hidden">
          <Link href="/blog" className="inline-flex w-full justify-center items-center gap-2 font-medium text-[#001D21] bg-white border border-gray-200 py-3 rounded-md hover:bg-gray-50 transition-colors">
            View all articles
          </Link>
        </div>
      </div>
    </section>
  );
}
