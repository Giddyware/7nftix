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
      className="bg-[#05060B] hover:bg-[#05060b4e] rounded-full p-4 w-full mx-auto relative 
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
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12">
          <Image
            src={creator.image}
            alt={creator.name}
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div className="flex-1">
          <h4 className="text-white font-semibold text-base">
            @{creator.name}
          </h4>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="text-[#9B9B9B] text-xs">Sales:</span>
            <span className="text-white text-xs font-medium">
              {creator.sales} ETH
            </span>
          </div>
        </div>
        <span
          className="relative inline-flex items-center justify-center text-white text-xl font-bold px-4 py-2
          bg-gradient-to-r from-[#0087DD] to-[#0426E5] rounded-[16px]"
          style={{
            padding: "1px",
          }}
        >
          <span className="bg-[#05060B] rounded-[15px] px-3 py-1">
            #{creator.id}
          </span>
        </span>
      </div>
    </div>
  );
};

export default CreatorCard;
