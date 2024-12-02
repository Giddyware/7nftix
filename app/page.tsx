import Header from "@/components/header";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import LiveAuctions from "@/components/live-auctions";
import SponsorLogos from "@/components/sponsor-logos";
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
    </>
  );
}
