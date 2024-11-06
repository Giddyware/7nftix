interface AuctionCardProps {
  title: string;
  currentBid: number;
  timeLeft: string;
  image: any;
}

export default function AuctionCard({
  title,
  image,
  currentBid,
  timeLeft,
}: AuctionCardProps) {
  return (
    <div className="bg-[#05060B] border rounded-2xl border-solid border-image-[linear-gradient(0deg,#4B4865_-24.26%,#03000C_113.09%)] border-image-slice-[1] shadow-md overflow-hidden">
      <img
        src={image?.src}
        alt={title}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">Current Bid: {currentBid}</p>
        <p className="text-sm text-gray-500">Time Left: {timeLeft}</p>
      </div>
    </div>
  );
}
