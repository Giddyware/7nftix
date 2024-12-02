import CreatorCard from "./creator-card";
import { creators } from "./data";

const TrendingCreator = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2
          className="text-lg sm:text-xl md:text-3xl lg:text-4xl border-b max-w-fit mx-auto font-bold text-center mb-4 sm:mb-6 md:mb-8 bg-[linear-gradient(270.01deg,#0C041C_-0.31%,#005686_19.69%,#1A135F_49.69%,#005686_79.68%,#0C041C_99.68%)] bg-clip-text text-transparent"
          style={{
            borderImageSource:
              "linear-gradient(270.01deg, rgb(12, 4, 28) -0.31%, #005686 19.69%, #1A135F 49.69%, #005686 79.68%, #0C041C 99.68%)",
            borderImageSlice: 1,
          }}
        >
          Creators
        </h2>
        <h3 className="text-white font-bold text-center text-xl sm:text-2xl md:text-3xl lg:text-[44px] mb-6 sm:mb-8 md:mb-10 lg:mb-14">
          Trending Creators
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {creators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingCreator;
