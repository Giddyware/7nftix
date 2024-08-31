import gridLines from "@/assets/grid-lines.png";

export default function Hero() {
  return (
    <section>
      {/* <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]" /> */}
      {/* <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{
            //   backgroundImage: `url(${gridLines.src})`,
            }}
          /> */}

      <div className="relative overflow-hidden h-screen flex items-center justify-center text-center text-white">
        <div
          className="absolute inset-0 bg-[rgba(3,0,12,0.9)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
          style={{
            backgroundImage: `url(${gridLines.src})`,
          }}
        />
        <div className="absolute inset-0 grid grid-cols-3 gap-4 opacity-20">
          {/* Background images */}
          <div className="h-full w-full bg-cover bg-center bg-image-1"></div>
          <div className="h-full w-full bg-cover bg-center bg-image-2"></div>
          <div className="h-full w-full bg-cover bg-center bg-image-3"></div>
          <div className="h-full w-full bg-cover bg-center bg-image-4"></div>
          <div className="h-full w-full bg-cover bg-center bg-image-5"></div>
          <div className="h-full w-full bg-cover bg-center bg-image-6"></div>
        </div>
        <div className="relative z-10 max-w-xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Discover, and Collect digital Art NFTs
          </h1>
          <p className="mb-8 text-lg md:text-xl">
            Digital marketplace for crypto collectibles and non-fungible tokens
            (NFTs). Buy, Sell, and discover exclusive digital assets.
          </p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold">
            Explore Collections
          </button>
        </div>
      </div>
    </section>
  );
}
