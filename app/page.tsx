import CallToActon from "@/components/call-to-action";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import LiveAuctions from "@/components/live-auctions";
import PopulationCollection from "@/components/popular-collection";
import SponsorLogos from "@/components/sponsor-logos";
import TrendingCreator from "@/components/trending-creator";
import TrendingNfts from "@/components/trending-nfts";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SponsorLogos />
      <LiveAuctions />
      <TrendingNfts />
      <HowItWorks />
      <PopulationCollection />
      <TrendingCreator />
      <CallToActon />
      <Footer />
    </>
  );
}
