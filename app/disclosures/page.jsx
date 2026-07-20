import Header from '../../components/disclosures/Header';
import Content from '../../components/disclosures/Content';

export const metadata = {
  title: "Important Disclosures | AngelList",
  description: "Important legal and regulatory disclosures for AngelList.",
};

export default function Disclosures() {
  return (
    <>
      <main id="maincontent">
        <Header />
        <Content />
      </main>
    </>
  );
}
