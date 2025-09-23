import Footer from "@/components/footer";
import Header from "@/components/header";
import { auctionData } from "@/components/live-auctions/auction-data";
import NftDetailPageClient, {
  NftDetail,
} from "@/components/nft-detail/page-client";
import { trendingData } from "@/components/trending-nfts/nfts-data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

function toNftDetailById(id: number): NftDetail | null {
  const t = trendingData.find((x) => x.id === id);
  if (t) {
    return {
      id: t.id,
      title: t.title,
      image: t.image,
      currentBid: t.currentBid,
      price: t.price,
      timeLeft: t.timeLeft,
      category: t.category,
      owner: t.owner,
      likes: t.likes,
      description:
        "A unique digital collectible from our curated drops. Own a piece of the metaverse with provenance, rarity, and style.",
      attributes: [
        { trait_type: "Collection", value: t.category },
        { trait_type: "Edition", value: `#${t.id}` },
        {
          trait_type: "Rarity",
          value: ["Common", "Rare", "Epic", "Legendary"][t.id % 4],
        },
      ],
    };
  }
  const a = auctionData.find((x) => x.id === id);
  if (a) {
    return {
      id: a.id,
      title: a.title,
      image: a.image,
      currentBid: a.currentBid,
      price: a.price,
      timeLeft: a.timeLeft,
      category: a.category,
      owner: { name: "anon", avatar: "/avatars/avatar-1.png" },
      likes: {
        count: 42 + a.id,
        avatars: [
          "/avatars/like-1.png",
          "/avatars/like-2.png",
          "/avatars/like-3.png",
        ],
      },
      description:
        "This NFT is currently on auction. Bid to win and add it to your collection.",
      attributes: [
        { trait_type: "Collection", value: a.category },
        { trait_type: "Edition", value: `#${a.id}` },
        {
          trait_type: "Rarity",
          value: ["Common", "Rare", "Epic", "Legendary"][a.id % 4],
        },
      ],
    };
  }
  return null;
}

function getRelated(id: number): NftDetail[] {
  const pool = [...trendingData];
  return pool
    .filter((x) => x.id !== id)
    .slice(0, 4)
    .map(
      (t) =>
        ({
          id: t.id,
          title: t.title,
          image: t.image,
          currentBid: t.currentBid,
          price: t.price,
          timeLeft: t.timeLeft,
          category: t.category,
        } satisfies NftDetail)
    );
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const idNum = Number(params.id);
  const nft = Number.isFinite(idNum) ? toNftDetailById(idNum) : null;
  const title = nft ? `${nft.title} | 7NFTix` : "NFT | 7NFTix";
  const description =
    nft?.description ??
    "Discover, collect, and sell extraordinary NFTs on 7NFTix.";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: nft?.image
        ? [
            {
              url:
                typeof nft.image === "string"
                  ? nft.image
                  : (nft.image as any).src,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function NftDetailPage({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  if (!Number.isFinite(id)) return notFound();
  const nft = toNftDetailById(id);
  if (!nft) return notFound();
  const related = getRelated(id);

  return (
    <>
      <Header />
      <NftDetailPageClient nft={nft} related={related} />
      <Footer />
    </>
  );
}
