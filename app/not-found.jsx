import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-64px)] w-full flex-col">
      <section 
        data-theme="ink" 
        className="flex flex-1 flex-col items-center justify-center bg-surface px-5 text-center text-surface-text-primary sm:px-9"
      >
        <div className="mx-auto flex max-w-[1536px] flex-col items-center gap-8">
          <h1 className="text-display-100 text-[#cdcbff]">404</h1>
          <h2 className="text-headline-200 text-surface-text-primary">
            Page not found
          </h2>
          <p className="max-w-[40ch] text-body-400 text-surface-text-muted">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="mt-4">
            <Link 
              href="/" 
              className="[&_svg]:[stroke-width-2] inline-flex items-center justify-center gap-2 rounded-sm font-sans text-[1rem] leading-normal tracking-[-0.002em] no-underline transition-colors duration-200 hover:no-underline focus-visible:outline-1 focus-visible:ring-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 h-12 px-4 bg-cta-primary-bg text-cta-primary-text hover:bg-cta-primary-hover-bg hover:text-cta-primary-hover-text focus-visible:bg-cta-primary-active-bg focus-visible:text-cta-primary-active-text active:bg-cta-primary-active-bg active:text-cta-primary-active-text"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
