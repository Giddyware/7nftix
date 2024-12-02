import Image from "next/image";

interface CollectionCardProps {
  mainImages: string[];
  subImages: string[];
  title: string;
  creatorImage: string;
  creatorName: string;
}

const CollectionCard = ({
  mainImages,
  subImages,
  title,
  creatorImage,
  creatorName,
}: CollectionCardProps) => {
  return (
    <div
      style={{
        background: `
        linear-gradient(#05060B, #05060B) padding-box,
        linear-gradient(0deg, #4B4865 -24.26%, #03000C 113.09%) border-box
        `,
        border: "1px solid transparent",
        borderRadius: "1rem",
      }}
      className="bg-[#05060B] rounded-2xl p-4"
    >
      <div className="flex justify-between mb-3">
        <div className="flex gap-2">
          <div className="relative w-10 h-10 mr-2">
            <Image
              src={creatorImage}
              alt={creatorName}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h4 className="text-white">{title}</h4>
            <div>
              <span className="text-gray-400 text-xs">Created by</span>
              <span className="text-white ml-2 text-xs">@{creatorName}</span>
            </div>
          </div>
        </div>
        <div className="bg-[#0F111A] rounded-[8px] p-2 flex justify-center items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#9195A6"
            stroke="none"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {/* Main Images Row */}
        <div className="grid grid-cols-2 gap-3">
          {mainImages.map((img, index) => (
            <div key={`main-${index}`} className="relative w-full h-44">
              <Image
                src={img}
                alt={`${title} main ${index + 1}`}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
        {/* Sub Images Row */}
        <div className="grid grid-cols-3 gap-3 h-fit">
          {subImages.map((img, index) => (
            <div key={`sub-${index}`} className="relative w-full h-28">
              <Image
                src={img}
                alt={`${title} ${index + 1}`}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
