import auctionImage1 from "@/assets/trending-nfts/trending-1.png";
import auctionImage2 from "@/assets/trending-nfts/trending-2.png";
import auctionImage3 from "@/assets/trending-nfts/trending-3.png";
import auctionImage4 from "@/assets/trending-nfts/trending-4.png";
import auctionImage5 from "@/assets/trending-nfts/trending-5.png";
import auctionImage6 from "@/assets/trending-nfts/trending-6.png";
import auctionImage7 from "@/assets/trending-nfts/trending-7.png";
import auctionImage8 from "@/assets/trending-nfts/trending-8.png";
import { StaticImageData } from "next/image";

interface TrendingNftProps {
  id: number;
  title: string;
  image: StaticImageData;
  currentBid: number;
  timeLeft: string;
  category: string;
  price: number;
  owner: {
    name: string;
    avatar: string;
  };
  likes: {
    count: number;
    avatars: string[];
  };
}

export const trendingData: TrendingNftProps[] = [
  {
    id: 1,
    title: "Horizon Hunter #439",
    image: auctionImage1,
    timeLeft: "1d 5h 30m",
    category: "Art",
    currentBid: 0.5,
    price: 51,
    owner: {
      name: "Mark Anderson",
      avatar: "/avatars/avatar-1.png",
    },
    likes: {
      count: 90,
      avatars: [
        "/avatars/like-1.png",
        "/avatars/like-3.png",
        "/avatars/like-2.png",
      ],
    },
  },
  {
    id: 2,
    title: "Horizon Hunter #260",
    image: auctionImage2,
    timeLeft: "2h 30m 25s",
    category: "Art",
    currentBid: 0.3,
    price: 23,
    owner: {
      name: "John Doe",
      avatar: "/avatars/avatar-2.png",
    },
    likes: {
      count: 75,
      avatars: [
        "/avatars/like-4.png",
        "/avatars/like-2.png",
        "/avatars/like-5.png",
      ],
    },
  },
  {
    id: 3,
    title: "Froganas #4935",
    image: auctionImage3,
    timeLeft: "1d 5h 30m",
    category: "Art",
    currentBid: 0.5,
    price: 49.9,
    owner: {
      name: "Alice Smith",
      avatar: "/avatars/avatar-3.png",
    },
    likes: {
      count: 120,
      avatars: [
        "/avatars/like-1.png",
        "/avatars/like-4.png",
        "/avatars/like-3.png",
      ],
    },
  },
  {
    id: 4,
    title: "Froganas #3054",
    image: auctionImage4,
    timeLeft: "2h 30m 25s",
    category: "Art",
    currentBid: 0.3,
    price: 45,
    owner: {
      name: "Bob Johnson",
      avatar: "/avatars/avatar-4.png",
    },
    likes: {
      count: 60,
      avatars: [
        "/avatars/like-2.png",
        "/avatars/like-5.png",
        "/avatars/like-1.png",
      ],
    },
  },
  {
    id: 5,
    title: "Froganas #895",
    image: auctionImage5,
    timeLeft: "1d 5h 30m",
    category: "Art",
    currentBid: 0.5,
    price: 50,
    owner: {
      name: "Charlie Brown",
      avatar: "/avatars/avatar-5.png",
    },
    likes: {
      count: 85,
      avatars: [
        "/avatars/like-3.png",
        "/avatars/like-1.png",
        "/avatars/like-4.png",
      ],
    },
  },
  {
    id: 6,
    title: "DeGod #928",
    image: auctionImage6,
    timeLeft: "2h 30m 25s",
    category: "Art",
    currentBid: 0.3,
    price: 51.23,
    owner: {
      name: "David Wilson",
      avatar: "/avatars/avatar-6.png",
    },
    likes: {
      count: 95,
      avatars: [
        "/avatars/like-5.png",
        "/avatars/like-2.png",
        "/avatars/like-3.png",
      ],
    },
  },
  {
    id: 7,
    title: "DeGod #8483",
    image: auctionImage7,
    timeLeft: "1d 5h 30m",
    category: "Art",
    currentBid: 0.5,
    price: 49.57,
    owner: {
      name: "Eve Davis",
      avatar: "/avatars/avatar-7.png",
    },
    likes: {
      count: 110,
      avatars: [
        "/avatars/like-4.png",
        "/avatars/like-1.png",
        "/avatars/like-5.png",
      ],
    },
  },
  {
    id: 8,
    title: "DeGod #2948",
    image: auctionImage8,
    timeLeft: "2h 30m 25s",
    category: "Art",
    currentBid: 0.3,
    price: 59.23,
    owner: {
      name: "Frank Miller",
      avatar: "/avatars/avatar-8.png",
    },
    likes: {
      count: 130,
      avatars: [
        "/avatars/like-2.png",
        "/avatars/like-3.png",
        "/avatars/like-4.png",
      ],
    },
  },
];
