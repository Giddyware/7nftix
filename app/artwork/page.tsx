import ArtworkHero from "@/components/artwork/hero";
import CallToActon from "@/components/call-to-action";
import Footer from "@/components/footer";
import Header from "@/components/header";
import LiveAuctions from "@/components/live-auctions";
import PopulationCollection from "@/components/popular-collection";
import TrendingNfts from "@/components/trending-nfts";

export default function ArtworkPage() {
  return (
    <>
      <Header />
      <ArtworkHero />
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
