import BlogHero from "@/components/blog/hero";
import BlogList from "@/components/blog/list";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Header from "@/components/header";

const BlogPage = () => {
  return (
    <>
      <Header />
      <BlogHero />
      <BlogList />
      <CallToAction />
      <Footer />
    </>
  );
};

export default BlogPage;
