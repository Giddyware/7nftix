import auctionImage1 from "@/assets/auctions/auction-1.png";
import auctionImage2 from "@/assets/auctions/auction-2.png";
import auctionImage3 from "@/assets/auctions/auction-3.png";
import auctionImage4 from "@/assets/auctions/auction-4.png";
import auctionImage5 from "@/assets/auctions/auction-5.png";
import auctionImage6 from "@/assets/auctions/auction-6.png";
import auctionImage7 from "@/assets/auctions/auction-7.png";
import auctionImage8 from "@/assets/auctions/auction-8.png";
import { StaticImageData } from "next/image";

interface AuctionCardProps {
  id: number;
  title: string;
  image: StaticImageData;
  currentBid: number;
  timeLeft: string;
  category: string;
  price: number;
}

export const auctionData: AuctionCardProps[] = [
  {
    id: 1,
    title: "Horizon Hunter #439",
    image: auctionImage1,
    timeLeft: "1d 5h 30m",
    category: "Art",
    currentBid: 0.5,
    price: 51,
  },
  {
    id: 2,
    title: "Horizon Hunter #260",
    image: auctionImage2,
    timeLeft: "2h 30m 25s",
    category: "Art",
    currentBid: 0.3,
    price: 23,
  },
  {
    id: 3,
    title: "Froganas #4935",
    image: auctionImage3,
    timeLeft: "1d 5h 30m",
    category: "Art",
    currentBid: 0.5,
    price: 49.9,
  },
  {
    id: 4,
    title: "Froganas #3054",
    image: auctionImage4,
    timeLeft: "2h 30m 25s",
    category: "Art",
    currentBid: 0.3,
    price: 45,
  },
  {
    id: 5,
    title: "Froganas #895",
    image: auctionImage5,
    timeLeft: "1d 5h 30m",
    category: "Art",
    currentBid: 0.5,
    price: 50,
  },
  {
    id: 6,
    title: "DeGod #928",
    image: auctionImage6,
    timeLeft: "2h 30m 25s",
    category: "Art",
    currentBid: 0.3,
    price: 51.23,
  },
  {
    id: 7,
    title: "DeGod #8483",
    image: auctionImage7,
    timeLeft: "1d 5h 30m",
    category: "Art",
    currentBid: 0.5,
    price: 49.57,
  },
  {
    id: 8,
    title: "DeGod #2948",
    image: auctionImage8,
    timeLeft: "2h 30m 25s",
    category: "Art",
    currentBid: 0.3,
    price: 59.23,
  },
];
