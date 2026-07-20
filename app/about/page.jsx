import Hero from '../../components/about/Hero';
import Mission from '../../components/about/Mission';
import CoreValues from '../../components/about/CoreValues';

export const metadata = {
  title: "About Us | AngelList",
  description: "We believe anyone with a passion for innovation should be able to invest in venture-backed tech startups.",
};

export default function About() {
  return (
    <>
      <main id="maincontent">
        <Hero />
        <Mission />
        <CoreValues />
      </main>
    </>
  );
}
