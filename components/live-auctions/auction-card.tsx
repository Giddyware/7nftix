import Image from "next/image";

interface AuctionCardProps {
  title: string;
  currentBid: number;
  timeLeft: string;
  image: any;
  category?: string;
}

export default function AuctionCard({
  title,
  image,
  currentBid,
  timeLeft,
  category = "Art",
}: AuctionCardProps) {
  return (
    <div
      className="relative bg-[#05060B] rounded-2xl shadow-md overflow-hidden"
      style={{
        padding: "1px",
        background: `
          linear-gradient(#05060B, #05060B) padding-box,
          linear-gradient(0deg, #4B4865 -24.26%, #03000C 113.09%) border-box
        `,
        border: "1px solid transparent",
        borderRadius: "1rem",
      }}
    >
      <div className="rounded-2xl overflow-hidden">
        <div className="p-3">
          <div className="relative w-full h-[250px] rounded-2xl overflow-hidden">
            <Image src={image?.src} alt={title} fill className="object-cover" />
          </div>
        </div>

        <div className="p-4 space-y-3">
          <div className="flex items-center">
            <span className="text-[10px] w-[100px] text-white">{timeLeft}</span>

            <div className="w-full h-1 bg-[#2C3037] rounded-full">
              <div className="h-full w-[60%] bg-gradient-to-r rounded-full from-[#4B9EF9] to-[#9181F7]" />
            </div>
          </div>

          <div className="flex items-center gap-3 mb-4 justify-between">
            <h3 className="text-sm font-normal text-white">{title}</h3>
            <span className="px-3 py-1 text-xs rounded-sm bg-[#0F111A] uppercase text-[#8F9CA9]">
              {category}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Image src="/solana-logo.svg" alt="SOL" width={16} height={16} />
              <span className="text-xs font-medium text-white">
                {currentBid} SOL
              </span>
            </div>
            <button className="flex items-center gap-2 pl-4 py-2 rounded-lg justify-between hover:opacity-90 transition-opacity">
              <span className="bg-gradient-to-r from-[#0087DD] to-[#0426E5] inline-block text-transparent bg-clip-text text-sm font-medium">
                Place bid
              </span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 10H16M16 10L10 4M16 10L10 16"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#0087DD" />
                    <stop offset="100%" stopColor="#0426E5" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
