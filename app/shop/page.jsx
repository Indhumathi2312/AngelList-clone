import Hero from '../../components/shop/Hero';
import ProductGrid from '../../components/shop/ProductGrid';

export const metadata = {
  title: "Shop | AngelList",
  description: "Official AngelList merchandise and tech accessories.",
};

export default function Shop() {
  return (
    <>
      <main id="maincontent">
        <Hero />
        <ProductGrid />
      </main>
    </>
  );
}
