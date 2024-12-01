import Image from "next/image";

interface TrendingCardProps {
  title: string;
  currentBid: number;
  timeLeft: string;
  image: any;
  category?: string;
  owner: {
    name: string;
    avatar: string;
  };
  likes: {
    count: number;
    avatars: string[];
  };
}

export default function TrendingNftCard({
  title,
  image,
  currentBid,
  timeLeft,
  category = "Art",
  owner,
  likes,
}: TrendingCardProps) {
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
          <div className="flex items-center justify-between mb-2">
            <div className="flex">
              <div className="flex -space-x-2">
                {likes.avatars.map((avatar, index) => (
                  <div key={index} className="relative w-6 h-6">
                    <Image
                      src={avatar}
                      alt="Liked by"
                      width={24}
                      height={24}
                      className="rounded-full border-2 border-[#05060B] w-6 h-6 object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-[#9195A6] text-xs ml-1">+20</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-white">@{owner.name}</span>
              <Image
                src={owner.avatar}
                alt={owner.name}
                width={16}
                height={16}
                className="rounded-full w-6 h-6 object-cover"
              />
            </div>
          </div>

          <div className="relative w-full h-[250px] rounded-2xl overflow-hidden">
            <Image src={image?.src} alt={title} fill className="object-cover" />
            <div className="absolute top-3 right-3 bg-black/50 rounded-full px-3 py-1 flex items-center gap-1">
              <span className="text-white text-xs">{likes.count}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>
        </div>

        {/* <div className="p-4 space-y-3">
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
        </div> */}

        <div className="p-4 space-y-3">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-[#9195A6] text-[11px]">Current Bid</span>
              <div className="flex gap-x-1">
                <Image
                  src="/solana-logo.svg"
                  alt="SOL"
                  width={16}
                  height={16}
                />
                <span className="text-xs font-medium text-[#FBFCFE]">
                  {currentBid} SOL
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-[#9195A6] text-[11px]">
                Auction Ends In
              </span>
              <span className="text-[#FBFCFE] text-xs">{timeLeft}</span>
            </div>
          </div>

          <div className="p-[1px] rounded-2xl bg-gradient-to-r from-[#0087DD] to-[#0426E5]">
            <button
              className="flex relative items-center w-full py-3 px-4 rounded-2xl justify-center hover:opacity-90 transition-opacity"
              style={{
                background:
                  "linear-gradient(93.36deg, #002034 -24.85%, #00041C 78.18%)",
              }}
            >
              <span
                className="relative text-sm font-medium mr-2"
                style={{
                  background:
                    "linear-gradient(93.36deg, #0087DD -24.85%, #0426E5 78.18%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Place bid
              </span>
              <span className="relative">
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
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
