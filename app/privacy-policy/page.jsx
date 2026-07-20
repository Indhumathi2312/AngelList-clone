import Header from '../../components/privacy-policy/Header';
import Content from '../../components/privacy-policy/Content';

export const metadata = {
  title: "Privacy Policy | AngelList",
  description: "Privacy Policy and data practices for AngelList.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <main id="maincontent">
        <Header />
        <Content />
      </main>
    </>
  );
}
