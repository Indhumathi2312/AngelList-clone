'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

import img1 from '@/public/images/13ef9765a8b209c5a466e1904cd49e47561b1e2f-1920x1320.jpg';
import img2 from '@/public/images/image5.webp';
import img3 from '@/public/images/image6.webp';

const TESTIMONIALS = [
  {
    quote: "No other platform combines the power, flexibility, reach, and network effects.",
    name: "Lenny Rachitsky, GP",
    image: img1
  },
  {
    quote: "AngelList takes the complexity and hassle out of launching a new investment vehicle so we can focus on picking the companies we want to invest in and supporting the founders.",
    name: "Brian Nichols, GP, Hustle Fund",
    image: img2
  },
  {
    quote: "One of AngelList’s biggest benefits is its all-in-one software-first approach to admin, legal and tax services.",
    name: "Cindy Bi, GP, CapitalX",
    image: img3
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <div>
      <section id="testimonials" data-theme="light" tabIndex="0" role="region" aria-label="Customer testimonials" className="relative h-[800px] max-h-screen-header w-full overflow-hidden text-surface-accent-light-green sm:min-h-[600px] md:aspect-1280/880 md:h-auto">
        
        {/* Background Images Layer */}
        <div className="absolute inset-0 bg-ink-1">
          {TESTIMONIALS.map((t, index) => (
            <div 
              key={index}
              className={`absolute inset-0 size-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image 
                alt={`Testimonial from ${t.name}`} 
                src={t.image} 
                className="absolute inset-0 size-full object-cover object-top" 
              />
            </div>
          ))}
          {/* Subtle dark overlay to ensure text is always readable over various images */}
          <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
        </div>

        {/* Content Layer */}
        <div className="absolute inset-0 z-10 flex size-full items-stretch">
          <div className="mx-auto w-full px-5 sm:px-9 md:px-10 xl:px-12 max-w-[1536px] relative flex h-full flex-col justify-between gap-10 pb-10 pt-11">
            <h2 className="text-body-500 drop-shadow-sm">Testimonials</h2>
            
            {/* Quotes Grid Overlap (Keeps container responsive height) */}
            <div className="grid grid-cols-1 grid-rows-1 items-center">
              {TESTIMONIALS.map((t, index) => (
                <div 
                  key={index} 
                  className={`col-start-1 row-start-1 flex flex-col gap-5 transition-all duration-1000 ease-in-out ${
                    index === currentIndex 
                      ? 'opacity-100 translate-y-0 pointer-events-auto relative z-10' 
                      : 'opacity-0 translate-y-4 pointer-events-none'
                  }`}
                >
                  <blockquote className="max-w-[26ch] text-headline-400 md:text-headline-300 drop-shadow-sm">
                    {t.quote}
                  </blockquote>
                  <p className="text-body-500 drop-shadow-sm">{t.name}</p>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div role="navigation" aria-label="Testimonial navigation" className="flex w-full gap-3">
              <button 
                onClick={handlePrevious}
                aria-label="Previous testimonial" 
                className="flex size-12 items-center justify-center rounded-full bg-cta-primary-bg/15 backdrop-blur-md hover:bg-cta-primary-bg/25 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-cta-primary-bg/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent transition-colors"
              >
                <svg fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 20 20" className="size-5" shapeRendering="geometricPrecision">
                  <path d="m14 18-8-8 8-8" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke"></path>
                </svg>
              </button>
              
              <div className="relative">
                <button 
                  onClick={handleNext}
                  aria-label="Next testimonial" 
                  className="flex size-12 items-center justify-center rounded-full bg-cta-primary-bg/15 backdrop-blur-md hover:bg-cta-primary-bg/25 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-cta-primary-bg/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent transition-colors"
                >
                  <svg fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 20 20" className="size-5" shapeRendering="geometricPrecision">
                    <path d="m6 18 8-8-8-8" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke"></path>
                  </svg>
                </button>
                
                {/* SVG Progress Circle */}
                <figure aria-hidden="true" className="pointer-events-none absolute left-0 top-0 -rotate-90">
                  <svg width="48" height="48" viewBox="0 0 48 48" role="img" aria-label="Testimonial progress indicator">
                    {/* Background track (optional, looks better without to match AngelList exactly) */}
                    <circle 
                      key={`progress-${currentIndex}`} 
                      cx="24" cy="24" r="22.5" 
                      pathLength="1" stroke="currentColor" fill="none" strokeWidth="2" 
                      strokeDasharray="1" 
                      strokeDashoffset="0"
                      className="opacity-100"
                      style={{ animation: 'testimonial-dash 8s linear forwards' }}
                    ></circle>
                  </svg>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global styles for the SVG animation */}
      <style>{`
        @keyframes testimonial-dash {
          from { stroke-dashoffset: 1; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}
