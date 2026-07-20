import Header from '../../components/terms/Header';
import Content from '../../components/terms/Content';

export const metadata = {
  title: "Terms & Conditions | AngelList",
  description: "Terms and conditions for using AngelList services.",
};

export default function TermsAndConditions() {
  return (
    <>
      <main id="maincontent">
        <Header />
        <Content />
      </main>
    </>
  );
}
