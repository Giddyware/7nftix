import bottom from "@/assets/bottom.png";
import gridLines from "@/assets/grid-lines.png";
import left from "@/assets/left.png";
import right from "@/assets/right.png";
import top from "@/assets/top.png";
import Image from "next/image";
import GradientButton from "../ui/gradient-button";

export default function Hero() {
  return (
    <section>
      <div className="relative overflow-hidden h-[400px] md:h-[550px] lg:h-[650px] w-full flex items-center justify-center text-center text-white px-4">
        <div
          className="absolute inset-0 bg-[rgba(3,0,12,0.9)] bg-blend-overlay [mask-image:radial-gradient(80%_80%_at_50%_35%,black,transparent)]"
          style={{
            backgroundImage: `url(${gridLines.src})`,
          }}
        />

        <div className="absolute inset-0 grid grid-cols-3 -z-10 gap-4 max-w-7xl mx-auto">
          <Image
            src={top}
            alt="Top image"
            className="absolute md:-top-10 left-1/2 transform -translate-x-1/2 max-w-[100px] md:max-w-[250px] lg:max-w-[350px]"
          />

          <Image
            src={left}
            alt="Left image"
            className="absolute top-1/2 left-4 lg:left-12 transform -translate-y-1/2 max-w-[100px] md:max-w-[250px] lg:max-w-[350px]"
          />
          <Image
            src={bottom}
            alt="Bottom image"
            className="absolute md:-bottom-10 left-1/2 transform -translate-x-1/2 max-w-[100px] md:max-w-[250px] lg:max-w-[350px]"
          />
          <Image
            src={right}
            alt="Right image"
            className="absolute top-1/2 right-4 lg:right-12 transform -translate-y-1/2 max-w-[100px] md:max-w-[250px] lg:max-w-[350px]"
          />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold mb-4 leading-tight">
            Discover, and Collect digital Art NFTs
          </h1>
          <p className="mb-8 text-base sm:text-lg md:text-xl px-2 md:px-0">
            Digital marketplace for crypto collectibles and non-fungible tokens
            (NFTs). Buy, Sell, and discover exclusive digital assets.
          </p>

          <GradientButton className="py-3 md:py-4">
            Explore Collections
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
