import CallToActon from "@/components/call-to-action";
import Footer from "@/components/footer";
import Header from "@/components/header";
import LiveAuctions from "@/components/live-auctions";
import MarketplaceHero from "@/components/marketplace/hero";
import PopulationCollection from "@/components/popular-collection";
import TrendingNfts from "@/components/trending-nfts";

export default function MarketplacePage() {
  return (
    <>
      <Header />
      <MarketplaceHero />
      <div className="mt-8">
        <TrendingNfts />
      </div>
      <LiveAuctions />
      <PopulationCollection />
      <CallToActon />
      <Footer />
    </>
  );
}
