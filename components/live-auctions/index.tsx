import AuctionCard from "./auction-card";
import { auctionData } from "./data";

export default function LiveAuctions() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl border-b max-w-fit mx-auto font-bold text-center mb-8 bg-[linear-gradient(270.01deg,#0C041C_-0.31%,#005686_19.69%,#1A135F_49.69%,#005686_79.68%,#0C041C_99.68%)] bg-clip-text text-transparent"
          style={{
            borderImageSource:
              "linear-gradient(270.01deg, rgb(12, 4, 28) -0.31%, #005686 19.69%, #1A135F 49.69%, #005686 79.68%, #0C041C 99.68%)",

            borderImageSlice: 1,
          }}
        >
          Live Auctions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {auctionData.map((auction) => (
            <AuctionCard
              key={auction.id}
              title={auction.title}
              image={auction.image}
              currentBid={auction.currentBid}
              timeLeft={auction.timeLeft}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
