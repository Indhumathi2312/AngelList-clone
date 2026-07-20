import CheckoutForm from '../../components/payment/CheckoutForm';
import OrderSummary from '../../components/payment/OrderSummary';

export const metadata = {
  title: "Secure Checkout | AngelList",
  description: "Complete your purchase securely.",
};

export default function PaymentPage() {
  return (
    <main className="bg-white min-h-screen" data-theme="light">
      <div className="mx-auto w-full px-5 sm:px-9 md:px-10 xl:px-12 max-w-[1536px] py-16 md:py-24">
        
        {/* Simple checkout header */}
        <div className="mb-12 border-b border-gray-200 pb-8 flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-[#001D21]">
            Checkout
          </h1>
          <div className="text-sm font-medium text-gray-500">
            Powered by Stripe
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-16 xl:gap-24 relative">
          <div className="w-full lg:w-3/5 xl:w-2/3">
            <CheckoutForm />
          </div>
          <div className="w-full lg:w-2/5 xl:w-1/3">
            <OrderSummary />
          </div>
        </div>
      </div>
    </main>
  );
}
