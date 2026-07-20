import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ title, price, image, category }) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-square w-full bg-gray-100 overflow-hidden p-6">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-[#001D21] rounded-full z-10">
          {category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-medium text-[#001D21] mb-2">{title}</h3>
        <p className="text-gray-500 mb-6 flex-grow">{price}</p>
        <Link href="/payment" className="w-full bg-[#001D21] text-white font-medium py-3 rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 group-hover:shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          Buy Now
        </Link>
      </div>
    </div>
  );
}
