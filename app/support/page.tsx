import CallToActon from "@/components/call-to-action";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Faq from "@/components/support/faq";
import SupportHero from "@/components/support/hero";

export default function SupportPage() {
  return (
    <>
      <Header />
      <SupportHero />
      <Faq />
      <CallToActon />
      <Footer />
    </>
  );
}
