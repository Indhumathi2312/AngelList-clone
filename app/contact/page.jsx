import Hero from '../../components/contact/Hero';
import ContactOptions from '../../components/contact/ContactOptions';

export const metadata = {
  title: "Contact Us | AngelList",
  description: "Get in touch with the AngelList team.",
};

export default function Contact() {
  return (
    <>
      <main id="maincontent">
        <Hero />
        <ContactOptions />
      </main>
    </>
  );
}
