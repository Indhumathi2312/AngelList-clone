import Image from 'next/image';

const items = [
  {
    id: 1,
    name: "AngelList Signature Hoodie",
    price: 85.00,
    image: "/images/shop/product-1.png",
    quantity: 1,
  },
  {
    id: 2,
    name: "Founder's Backpack",
    price: 45.00,
    image: "/images/shop/product-2.png",
    quantity: 1,
  }
];

export default function OrderSummary() {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const taxes = subtotal * 0.08; // 8% tax
  const total = subtotal + taxes;

  return (
    <div className="bg-gray-50 rounded-xl p-8 lg:p-10 lg:sticky top-32 border border-gray-100">
      <h2 className="text-2xl font-medium text-gray-900 mb-8">Order Summary</h2>
      
      <div className="flex flex-col gap-6 mb-8 border-b border-gray-200 pb-8">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4 items-center">
            <div className="relative w-20 h-20 bg-white rounded-lg border border-gray-200 overflow-visible shrink-0 flex items-center justify-center">
              <div className="relative w-16 h-16">
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  fill 
                  className="object-contain" 
                />
              </div>
              <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full z-10 shadow">
                {item.quantity}
              </span>
            </div>
            <div className="flex-1 flex justify-between items-start">
              <div>
                <h3 className="text-base font-medium text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500 mt-1">Qty: {item.quantity}</p>
              </div>
              <p className="text-base font-medium text-gray-900">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4 text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p className="font-medium text-gray-900">${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping</p>
          <p className="font-medium text-gray-900">Free</p>
        </div>
        <div className="flex justify-between">
          <p>Taxes (8%)</p>
          <p className="font-medium text-gray-900">${taxes.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-lg font-medium text-gray-900">Total</p>
        <p className="text-2xl font-semibold text-gray-900">
          <span className="text-sm font-normal text-gray-500 mr-2">USD</span>
          ${total.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
