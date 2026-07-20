import ProductCard from './ProductCard';

export default function ProductGrid() {
  const products = [
    {
      title: 'Minimalist Tech Hoodie',
      price: '$85.00',
      category: 'Apparel',
      image: '/images/shop/product-1.png'
    },
    {
      title: 'Founder Edition Mug',
      price: '$28.00',
      category: 'Accessories',
      image: '/images/shop/product-2.png'
    },
    {
      title: 'Pro Mechanical Keyboard',
      price: '$145.00',
      category: 'Hardware',
      image: '/images/shop/product-3.png'
    },
    {
      title: 'Venture Backpack',
      price: '$120.00',
      category: 'Gear',
      image: '/images/shop/product-4.png'
    }
  ];

  return (
    <section className="bg-gray-50 py-20 md:py-32" data-theme="light">
      <div className="mx-auto w-full px-5 sm:px-9 md:px-10 xl:px-12 max-w-[1536px]">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#001D21]">
            New Arrivals
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              title={product.title}
              price={product.price}
              category={product.category}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
