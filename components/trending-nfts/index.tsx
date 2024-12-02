"use client";

import { useState } from "react";
import GradientButton from "../ui/gradient-button";
import Filter from "./filter";
import { trendingData } from "./nfts-data";
import TrendingNftCard from "./trending-card";

export default function TrendingNfts() {
  const [activeFilter, setActiveFilter] = useState("All Categories");

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
          Trending
        </h2>
        <h3 className="text-white font-bold text-center text-xl sm:text-2xl md:text-3xl lg:text-[44px] mb-6 sm:mb-8 md:mb-10 lg:mb-14">
          Trending NFTs
        </h3>

        <Filter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {trendingData.map((trending) => (
            <TrendingNftCard key={trending.id} {...trending} />
          ))}
        </div>
        <div className="mt-6 sm:mt-8 md:mt-10 text-center">
          <GradientButton>View More</GradientButton>
        </div>
      </div>
    </section>
  );
}
