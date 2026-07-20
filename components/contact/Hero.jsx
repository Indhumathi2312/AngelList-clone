import ContactForm from './ContactForm';

export default function Hero() {
  return (
    <section className="scroll-m-header text-surface-text-primary relative bg-[#001D21] text-white pt-24 md:pt-32 pb-24 md:pb-32" data-theme="ink">
      <div className="mx-auto w-full px-5 sm:px-9 md:px-10 xl:px-12 max-w-[1536px]">
        <div className="grid items-start gap-16 md:grid-cols-2">
          <div className="flex flex-col gap-8 md:pr-10">
            <h1 className="w-full text-[3rem] leading-[1.1] md:text-5xl lg:text-6xl font-medium tracking-tight text-white">
              Talk to an expert in venture
            </h1>
            <h4 className="w-full text-xl md:text-2xl font-medium text-gray-300 leading-relaxed">
              AngelList supports $171B+ in assets on platform, with a wide range of investors including:
            </h4>
            <ul className="flex w-full flex-col gap-6 text-gray-400 text-lg mt-2">
              <li className="flex items-start gap-4">
                <div className="mt-2 w-2 h-2 rounded-full bg-[#b0a8ff] shrink-0"></div>
                <span className="font-medium">Established venture firms</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-2 w-2 h-2 rounded-full bg-[#b0a8ff] shrink-0"></div>
                <span className="font-medium">Solo GPs</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-2 w-2 h-2 rounded-full bg-[#b0a8ff] shrink-0"></div>
                <span className="font-medium">Emerging managers</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-2 w-2 h-2 rounded-full bg-[#b0a8ff] shrink-0"></div>
                <span className="font-medium">Institutional LPs</span>
              </li>
            </ul>
          </div>
          
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
