import HeroPost from '../../components/blog/HeroPost';
import PostGrid from '../../components/blog/PostGrid';
import Newsletter from '../../components/blog/Newsletter';

export const metadata = {
  title: "Blog | AngelList",
  description: "Insights, guides, and data on the startup and venture capital ecosystem.",
};

export default function Blog() {
  return (
    <>
      <main id="maincontent">
        <HeroPost />
        <PostGrid />
        <Newsletter />
      </main>
    </>
  );
}
