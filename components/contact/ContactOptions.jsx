export default function ContactOptions() {
  const options = [
    {
      title: 'Customer Support',
      description: 'Need help with your account or have a question about our platform? Our support team is here for you.',
      actionLabel: 'Visit Help Center',
      href: '#',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#001D21]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
        </svg>
      )
    },
    {
      title: 'Press & Media',
      description: 'For press inquiries, media requests, or to learn more about our company\'s latest news.',
      actionLabel: 'Contact Press',
      href: '#',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#001D21]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
        </svg>
      )
    },
    {
      title: 'General Inquiries',
      description: 'Have a general question about AngelList or not sure who to contact? Send us a message.',
      actionLabel: 'Email Us',
      href: 'mailto:hello@angellist.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#001D21]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-gray-50 py-24 md:py-32">
      <div className="mx-auto w-full px-5 sm:px-9 md:px-10 xl:px-12 max-w-[1536px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#001D21] mb-6">
            Other ways to connect
          </h2>
          <p className="text-xl text-gray-600">
            We're here to help. Choose the option below that best fits your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <div key={index} className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="bg-purple-50 p-4 rounded-xl mb-6 text-[#001D21]">
                {option.icon}
              </div>
              <h3 className="text-2xl font-medium text-[#001D21] mb-4">{option.title}</h3>
              <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                {option.description}
              </p>
              <a href={option.href} className="inline-flex items-center gap-2 font-medium text-[#001D21] hover:text-purple-700 transition-colors">
                {option.actionLabel}
                <svg viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 transition-transform -rotate-90">
                  <path d="M5.73359 8.66516L0.933594 3.86516L1.46392 3.33483L5.99876 7.86967L10.5336 3.33483L11.0639 3.86516L6.26392 8.66516L5.99876 8.93033L5.73359 8.66516Z"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
