import communityImage from "@/assets/community.png";
import Image from "next/image";

const CallToActon = () => {
  return (
    <section className="min-h-[571px] flex items-center">
      <div
        className="w-full max-w-7xl mx-auto rounded-[24px] pb-20"
        style={{
          background:
            "linear-gradient(360deg, #016FDF 10%, #0256E1 20%, #005686 30%, #1A135F 40%, #03000C 50%)",
        }}
      >
        <div className="text-center w-full px-4 py-16">
          <div className="relative w-full h-64 mb-2 max-w-[440px] mx-auto">
            <Image
              src={communityImage}
              alt="Community"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold max-w-[670px] mx-auto mb-4 text-white">
            Join a Growing Community of NFT Enthusiasts
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto mb-8">
            Over 345,000 creators and traders have already joined our platform.
            Be part of the excitement and start your NFT journey today.
          </p>
          <button
            className="text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
            style={{
              background:
                "linear-gradient(93.36deg, #002034 -24.85%, #00041C 78.18%)",
            }}
          >
            Join the Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActon;
