import explore from "@/assets/explore.png";
import instantMix from "@/assets/instant-mix.png";
import payments from "@/assets/payments.png";
import wallet from "@/assets/wallet.png";

import Image from "next/image";

const HowItWorks = () => {
  const steps = [
    {
      icon: wallet,
      title: "Connect a Wallet",
      description:
        "To begin your NFT journey, you'll need a digital wallet, simply connect it to access your NFTs and start trading.",
    },
    {
      icon: explore,
      title: "Explore and Discover",
      description:
        "Browse through various collections, artists, and categories to find unique digital assets that resonate with you.",
    },
    {
      icon: payments,
      title: "Trade NFTs",
      description:
        "Purchase NFTs directly with supported cryptocurrencies. List NFTs for sale with a fixed price or through auction",
    },
    {
      icon: instantMix,
      title: "Manage Collections",
      description:
        "Your NFTs are stored securely in your connected wallet. You can view, manage, and showcase your collection.",
    },
  ];

  return (
    <section className="py-16 bg-[#0C041C]">
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl border-b max-w-fit mx-auto font-bold text-center mb-8 bg-[linear-gradient(270.01deg,#0C041C_-0.31%,#005686_19.69%,#1A135F_49.69%,#005686_79.68%,#0C041C_99.68%)] bg-clip-text text-transparent"
          style={{
            borderImageSource:
              "linear-gradient(270.01deg, rgb(12, 4, 28) -0.31%, #005686 19.69%, #1A135F 49.69%, #005686 79.68%, #0C041C 99.68%)",
            borderImageSlice: 1,
          }}
        >
          Trade NFT
        </h2>
        <h3 className="text-white font-bold text-center text-[44px] mb-14">
          How It Works
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 rounded-xl text-center bg-[#0F111A]"
              style={{
                padding: "24px",
                background: `
                  linear-gradient(#05060B, #05060B) padding-box,
                  linear-gradient(0deg, #4B4865 -24.26%, #03000C 113.09%) border-box
                `,
                border: "1px solid transparent",
                borderRadius: "1rem",
              }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center">
                <Image
                  src={step.icon}
                  width={48}
                  height={48}
                  alt={step.title || "NFT Step"}
                  className="object-contain w-auto h-auto"
                />
              </div>
              <h4 className="text-white text-xl font-bold mb-3">
                {step.title}
              </h4>
              <p className="text-[#9195A6] text-sm max-w-56">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
