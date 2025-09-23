import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Header from "@/components/header";
import NewsletterForm from "@/components/newsletter/form";
import NewsletterHero from "@/components/newsletter/hero";

const NewsletterPage = () => {
  return (
    <>
      <Header />
      <NewsletterHero />
      <NewsletterForm />
      <CallToAction />
      <Footer />
    </>
  );
};

export default NewsletterPage;
