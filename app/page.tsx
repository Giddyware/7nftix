import Header from "@/components/header";
import Hero from "@/components/hero";
import LiveAuctions from "@/components/live-auctions";
import SponsorLogos from "@/components/sponsor-logos";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SponsorLogos />
      <LiveAuctions />
    </>
  );
}
