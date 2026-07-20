export default function FAQ() {
  const faqs = [
    {
      question: "Can I switch plans later?",
      answer: "Absolutely. You can upgrade or downgrade your plan at any time from your account settings. Prorated charges or credits will be applied automatically."
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer: "Yes, we offer a 50% discount for registered 501(c)(3) non-profit organizations. Please contact our support team with your documentation to apply."
    },
    {
      question: "What forms of payment do you accept?",
      answer: "We accept all major credit cards including Visa, Mastercard, and American Express. For enterprise plans, we also support invoicing and wire transfers."
    },
    {
      question: "Is my data secure?",
      answer: "Security is our top priority. We use bank-level encryption to ensure your data is safe and strictly adhere to industry compliance standards including SOC2."
    }
  ];

  return (
    <section className="bg-gray-50 py-20 px-5" data-theme="light">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-medium text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
        <div className="space-y-8">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
