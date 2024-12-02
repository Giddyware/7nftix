import Image from "next/image";

interface Creator {
  id: number;
  name: string;
  image: string;
  sales: string;
}

interface CreatorCardProps {
  creator: Creator;
}

const CreatorCard = ({ creator }: CreatorCardProps) => {
  return (
    <div
      className="bg-[#05060B] hover:bg-[#05060b4e] rounded-full p-3 sm:p-4 w-full mx-auto relative 
                     hover:border-[#0087DD] transition-all duration-300
                    hover:shadow-[0_0_10px_rgba(169, 85, 247, 0.64)]"
      style={{
        background: `
                        linear-gradient(#05060B, #05060B) padding-box,
                        linear-gradient(0deg, #4B4865 -24.26%, #03000C 113.09%) border-box
                      `,
        border: "1px solid transparent",
      }}
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="relative w-10 h-10 sm:w-12 sm:h-12">
          <Image
            src={creator.image}
            alt={creator.name}
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-white font-semibold sm:text-xs text-sm truncate">
            @{creator.name}
          </h4>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="text-[#9B9B9B] text-[11px] sm:text-xs">
              Sales:
            </span>
            <span className="text-white text-[11px] sm:text-[8px] font-medium">
              {creator.sales} ETH
            </span>
          </div>
        </div>
        <span
          className="relative inline-flex items-center justify-center text-white text-lg sm:text-xl font-bold
          bg-gradient-to-r from-[#0087DD] to-[#0426E5] rounded-[16px]"
          style={{
            padding: "1px",
          }}
        >
          <span className="bg-[#05060B] rounded-[15px] text-xs px-2 sm:px-3 py-1">
            #{creator.id}
          </span>
        </span>
      </div>
    </div>
  );
};

export default CreatorCard;
