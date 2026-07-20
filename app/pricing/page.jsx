import Hero from '../../components/pricing/Hero';
import PricingCards from '../../components/pricing/PricingCards';
import FAQ from '../../components/pricing/FAQ';

export const metadata = {
  title: "Pricing | AngelList",
  description: "Transparent pricing for teams of all sizes.",
};

export default function PricingPage() {
  return (
    <main id="maincontent">
      <Hero />
      <PricingCards />
      <FAQ />
    </main>
  );
}
