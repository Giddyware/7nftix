import AboutHero from "@/components/about/hero";
import Mission from "@/components/about/mission";
import CallToActon from "@/components/call-to-action";
import Footer from "@/components/footer";
import Header from "@/components/header";
import TrendingCreator from "@/components/trending-creator";

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutHero />
      <Mission />
      <TrendingCreator />
      <CallToActon />
      <Footer />
    </>
  );
}
