import { allPosts } from '../../../lib/blogData';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) {
    return { title: 'Post Not Found | AngelList' };
  }
  return {
    title: `${post.title} | AngelList Blog`,
    description: post.description,
  };
}

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen pb-24" data-theme="light">
      <article className="mx-auto w-full px-5 sm:px-9 md:px-10 xl:px-12 max-w-4xl pt-16 md:pt-24">
        
        <Link href="/blog" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium mb-10 transition-colors">
          <svg viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 transition-transform rotate-90">
            <path d="M5.73359 8.66516L0.933594 3.86516L1.46392 3.33483L5.99876 7.86967L10.5336 3.33483L11.0639 3.86516L6.26392 8.66516L5.99876 8.93033L5.73359 8.66516Z"></path>
          </svg>
          Back to Blog
        </Link>

        <header className="mb-12 text-center">
          <div className="text-sm font-medium text-purple-700 uppercase tracking-wider mb-4">{post.category}</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#001D21] mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-500 font-medium">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-16 shadow-lg border border-gray-100 bg-gray-50">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg md:prose-xl max-w-none text-gray-700 prose-headings:font-medium prose-headings:text-[#001D21] prose-a:text-purple-600 hover:prose-a:text-purple-800 mx-auto">
          {post.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('### ')) {
              return <h3 key={idx} className="mt-10 mb-4 text-2xl">{paragraph.replace('### ', '')}</h3>;
            }
            if (paragraph.trim().length > 0) {
              return <p key={idx} className="mb-6 leading-relaxed">{paragraph}</p>;
            }
            return null;
          })}
        </div>

      </article>
    </main>
  );
}
