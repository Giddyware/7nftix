"use client";

import GradientButton from "@/components/ui/gradient-button";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export type NftDetail = {
  id: number;
  title: string;
  image: StaticImageData | { src: string } | string;
  currentBid: number;
  price?: number;
  timeLeft?: string;
  category?: string;
  owner?: {
    name: string;
    avatar: string;
  };
  likes?: {
    count: number;
    avatars: string[];
  };
  description?: string;
  attributes?: Array<{ trait_type: string; value: string }>;
};

export default function NftDetailPageClient({
  nft,
  related,
}: {
  nft: NftDetail;
  related: NftDetail[];
}) {
  const [activeTab, setActiveTab] = useState<"details" | "offers" | "activity">(
    "details"
  );
  const [imageLoaded, setImageLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Bid, share, and report state + helpers
  const [currentBid, setCurrentBid] = useState(nft.currentBid);
  const minIncrement = 0.01;
  const minBid = useMemo(
    () => Number((currentBid + minIncrement).toFixed(2)),
    [currentBid]
  );

  const [isBidOpen, setIsBidOpen] = useState(false);
  const [bidAmount, setBidAmount] = useState<string>("");
  const [bidError, setBidError] = useState<string | null>(null);

  const [isReportOpen, setIsReportOpen] = useState(false);
  const [reportReason, setReportReason] = useState("");
  const [reportError, setReportError] = useState<string | null>(null);

  const [toast, setToast] = useState<{ message: string } | null>(null);
  const showToast = (message: string) => {
    setToast({ message });
    setTimeout(() => setToast(null), 2000);
  };

  const handleShare = async () => {
    const url =
      typeof window !== "undefined"
        ? `${window.location.origin}/marketplace/${nft.id}`
        : `/marketplace/${nft.id}`;
    try {
      const navAny = navigator as any;
      if (navAny?.share) {
        await navAny.share({ title: nft.title, url });
        showToast("Share dialog opened");
      } else {
        await navigator.clipboard.writeText(url);
        showToast("Link copied to clipboard");
      }
    } catch {
      // user cancelled or unsupported
    }
  };

  const handleConfirmBid = () => {
    const value = parseFloat(bidAmount);
    if (isNaN(value) || value <= 0) {
      setBidError("Enter a valid amount");
      return;
    }
    if (value < minBid) {
      setBidError(`Minimum bid is ${minBid.toFixed(2)} SOL`);
      return;
    }
    setCurrentBid(Number(value.toFixed(2)));
    setIsBidOpen(false);
    setBidAmount("");
    setBidError(null);
    showToast("Bid placed successfully");
  };

  const handleSubmitReport = () => {
    if (!reportReason) {
      setReportError("Please select a reason");
      return;
    }
    setIsReportOpen(false);
    setReportReason("");
    setReportError(null);
    showToast("Report submitted");
  };

  type Offer = {
    id: number;
    bidder: string;
    avatar: string;
    amount: number;
    time: string;
  };
  type Activity = {
    id: number;
    type: "listed" | "bid" | "sold";
    actor: string;
    avatar: string;
    detail: string;
    time: string;
  };

  const offers: Offer[] = useMemo(() => {
    const base = Math.max(currentBid - 0.05, 0.01);
    return [
      {
        id: 1,
        bidder: "0x12...ab",
        avatar: "/avatars/avatar-2.png",
        amount: currentBid,
        time: "2h ago",
      },
      {
        id: 2,
        bidder: "0x7e...9d",
        avatar: "/avatars/avatar-3.png",
        amount: Number(base.toFixed(2)),
        time: "5h ago",
      },
      {
        id: 3,
        bidder: "0xf3...1c",
        avatar: "/avatars/avatar-4.png",
        amount: Number((base - 0.03 > 0 ? base - 0.03 : base).toFixed(2)),
        time: "1d ago",
      },
    ];
  }, [currentBid]);

  const activity: Activity[] = useMemo(
    () => [
      {
        id: 1,
        type: "listed",
        actor: nft.owner?.name || "creator",
        avatar: nft.owner?.avatar || "/avatars/avatar-1.png",
        detail: `Listed for ${currentBid} SOL`,
        time: "2d ago",
      },
      {
        id: 2,
        type: "bid",
        actor: "collector_98",
        avatar: "/avatars/avatar-5.png",
        detail: `Bid ${offers[2]?.amount ?? currentBid - 0.05} SOL`,
        time: "1d ago",
      },
      {
        id: 3,
        type: "bid",
        actor: "artlover",
        avatar: "/avatars/avatar-6.png",
        detail: `Bid ${offers[1]?.amount ?? currentBid - 0.02} SOL`,
        time: "5h ago",
      },
      {
        id: 4,
        type: "bid",
        actor: "0x12...ab",
        avatar: "/avatars/avatar-2.png",
        detail: `Bid ${offers[0]?.amount ?? currentBid} SOL`,
        time: "2h ago",
      },
    ],
    [nft.owner?.name, nft.owner?.avatar, currentBid, offers]
  );

  return (
    <div className="min-h-screen">
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div
              className="rounded-3xl overflow-hidden shadow-2xl"
              style={{
                padding: "1px",
                background:
                  "linear-gradient(#05060B,#05060B) padding-box,linear-gradient(0deg,#4B4865 -24.26%,#03000C 113.09%) border-box",
                border: "1px solid transparent",
                borderRadius: "1.5rem",
              }}
            >
              <div className="relative rounded-3xl overflow-hidden">
                <motion.div
                  initial={{ scale: 1.02 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative w-full aspect-square"
                >
                  {!imageLoaded && (
                    <div className="absolute inset-0 bg-white/5 animate-pulse" />
                  )}
                  <Image
                    src={
                      typeof nft.image === "string"
                        ? nft.image
                        : (nft.image as any).src || (nft.image as any)
                    }
                    alt={nft.title}
                    fill
                    className="object-cover"
                    priority
                    onLoadingComplete={() => setImageLoaded(true)}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider text-white/80 bg-white/5 border border-white/10">
                  {nft.category || "Art"}
                </span>
                {nft.timeLeft && (
                  <span className="px-2.5 py-1 rounded-full text-[10px] text-white/80 bg-white/5 border border-white/10">
                    Ends in {nft.timeLeft}
                  </span>
                )}
              </div>
              <div className="flex items-start justify-between gap-3">
                <h1 className="text-2xl md:text-4xl font-bold text-white font-secondary">
                  {nft.title}
                </h1>
                {/* Share / Report */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleShare}
                    title="Share"
                    className="p-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white/80"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" />
                      <path d="M16 6l-4-4-4 4" />
                      <path d="M12 2v14" />
                    </svg>
                  </button>
                  <button
                    onClick={() => {
                      setReportReason("");
                      setReportError(null);
                      setIsReportOpen(true);
                    }}
                    title="Report"
                    className="p-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white/80"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 3v18" />
                      <path d="M3 7h13l-1.5-3H3" />
                      <path d="M3 7h13l-1.5 3H3" />
                    </svg>
                  </button>
                </div>
              </div>

              {nft.owner && (
                <div className="mt-4 flex items-center gap-3">
                  <Image
                    src={nft.owner.avatar}
                    alt={nft.owner.name}
                    width={36}
                    height={36}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="text-white/70 text-xs">Creator</div>
                    <div className="text-white text-sm">@{nft.owner.name}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Price + Actions */}
            <div
              className="rounded-2xl p-4 md:p-5 lg:sticky lg:top-24"
              style={{
                background:
                  "linear-gradient(93.36deg,#002034 -24.85%,#00041C 78.18%)",
                boxShadow: "1px 1px 8px 0px #00158C, -1px -1px 8px 0px #0087DD",
              }}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-white/60 text-xs">Current Bid</div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/solana-logo.svg"
                      alt="SOL"
                      width={18}
                      height={18}
                    />
                    <span className="text-white text-xl font-semibold">
                      {currentBid} SOL
                    </span>
                  </div>
                </div>
                {nft.price && (
                  <div>
                    <div className="text-white/60 text-xs">Price</div>
                    <div className="text-white text-lg">${nft.price}</div>
                  </div>
                )}
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <GradientButton className="w-full">Buy Now</GradientButton>
                <button
                  onClick={() => {
                    setBidAmount(minBid.toFixed(2));
                    setBidError(null);
                    setIsBidOpen(true);
                  }}
                  className="w-full px-8 py-2 rounded-2xl hover:opacity-90 transition-opacity text-white/90 border border-white/10"
                  style={{
                    background: "linear-gradient(93.36deg,#0B0E18,#04050A)",
                  }}
                >
                  Place Bid
                </button>
                <button
                  className="w-full px-8 py-2 rounded-2xl hover:opacity-90 transition-opacity text-white/90 border border-white/10"
                  style={{
                    background: "linear-gradient(93.36deg,#0B0E18,#04050A)",
                  }}
                >
                  Make Offer
                </button>
              </div>
              <div className="mt-2 text-white/50 text-xs">
                Min bid: {minBid} SOL
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-2">
              <div className="inline-flex rounded-xl p-[1px] bg-gradient-to-r from-[#0087DD] to-[#0426E5]">
                <div className="flex bg-[#05060B] rounded-xl">
                  {[
                    { key: "details", label: "Details" },
                    { key: "offers", label: "Offers" },
                    { key: "activity", label: "Activity" },
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key as any)}
                      className={`px-4 py-2 text-sm rounded-xl transition-colors ${
                        activeTab === tab.key ? "text-white" : "text-white/60"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4 min-h-[160px]">
                <AnimatePresence mode="wait">
                  {activeTab === "details" && (
                    <motion.div
                      key="tab-details"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      {mounted ? (
                        <>
                          {nft.description && (
                            <div className="space-y-2">
                              <h3 className="text-white text-lg font-semibold">
                                About
                              </h3>
                              <p className="text-white/70 text-sm leading-6">
                                {nft.description}
                              </p>
                            </div>
                          )}
                          {nft.attributes && nft.attributes.length > 0 && (
                            <div className="space-y-3">
                              <h3 className="text-white text-lg font-semibold">
                                Properties
                              </h3>
                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {nft.attributes.map((attr, idx) => (
                                  <div
                                    key={idx}
                                    className="rounded-xl p-3 border border-white/10 bg-white/5"
                                  >
                                    <div className="text-[10px] uppercase text-white/60">
                                      {attr.trait_type}
                                    </div>
                                    <div className="text-white mt-1">
                                      {attr.value}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="space-y-3">
                          <div className="h-4 w-28 bg-white/10 rounded animate-pulse" />
                          <div className="h-12 w-full bg-white/5 rounded animate-pulse" />
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
                            {Array.from({ length: 3 }).map((_, i) => (
                              <div
                                key={i}
                                className="h-16 bg-white/5 rounded animate-pulse"
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {activeTab === "offers" && (
                    <motion.div
                      key="tab-offers"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3"
                    >
                      {offers.map((o) => (
                        <div
                          key={o.id}
                          className="flex items-center justify-between p-3 border border-white/10 rounded-xl bg-white/5"
                        >
                          <div className="flex items-center gap-3">
                            <Image
                              src={o.avatar}
                              alt={o.bidder}
                              width={28}
                              height={28}
                              className="rounded-full object-cover"
                            />
                            <div className="text-white/80 text-sm">
                              {o.bidder}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Image
                              src="/solana-logo.svg"
                              alt="SOL"
                              width={16}
                              height={16}
                            />
                            <span className="text-white text-sm font-medium">
                              {o.amount} SOL
                            </span>
                            <span className="text-white/50 text-xs">
                              • {o.time}
                            </span>
                          </div>
                        </div>
                      ))}
                      <div className="text-center">
                        <button className="text-white/70 text-sm hover:text-white transition-colors">
                          Load more
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "activity" && (
                    <motion.div
                      key="tab-activity"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3"
                    >
                      {activity.map((ev) => (
                        <div
                          key={ev.id}
                          className="flex items-center justify-between p-3 border border-white/10 rounded-xl bg-white/5"
                        >
                          <div className="flex items-center gap-3">
                            <Image
                              src={ev.avatar}
                              alt={ev.actor}
                              width={28}
                              height={28}
                              className="rounded-full object-cover"
                            />
                            <div className="text-white/90 text-sm">
                              <span className="capitalize">{ev.type}</span> •{" "}
                              {ev.detail}
                            </div>
                          </div>
                          <div className="text-white/50 text-xs">{ev.time}</div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Social proof */}
            {nft.likes && (
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {nft.likes.avatars.slice(0, 3).map((a, i) => (
                    <Image
                      key={i}
                      src={a}
                      alt="liked by"
                      width={28}
                      height={28}
                      className="rounded-full border-2 border-black/60 w-7 h-7 object-cover"
                    />
                  ))}
                </div>
                <span className="text-white/70 text-sm">
                  {nft.likes.count} favorites
                </span>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Bid Modal */}
      <AnimatePresence>
        {isBidOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsBidOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              className="relative z-10 w-[92%] max-w-md rounded-2xl border border-white/10 bg-[#0B0E18] p-5"
            >
              <h3 className="text-white text-lg font-semibold mb-2">
                Place a bid
              </h3>
              <p className="text-white/60 text-sm mb-4">
                Current bid is {currentBid} SOL. Enter at least {minBid} SOL.
              </p>
              <label className="block text-white/70 text-xs mb-1">
                Your bid (SOL)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  step="0.01"
                  min={minBid}
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  className="flex-1 bg-black/30 border border-white/10 rounded-xl px-3 py-2 text-white outline-none focus:border-white/20"
                  placeholder={`${minBid}`}
                />
                <Image
                  src="/solana-logo.svg"
                  alt="SOL"
                  width={18}
                  height={18}
                />
              </div>
              {bidError && (
                <div className="text-red-400 text-xs mt-2">{bidError}</div>
              )}
              <div className="mt-4 flex gap-2 justify-end">
                <button
                  onClick={() => setIsBidOpen(false)}
                  className="px-4 py-2 rounded-xl text-white/80 border border-white/10 hover:bg-white/5"
                >
                  Cancel
                </button>
                <GradientButton onClick={handleConfirmBid}>
                  Confirm Bid
                </GradientButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Report Modal */}
      <AnimatePresence>
        {isReportOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsReportOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              className="relative z-10 w-[92%] max-w-md rounded-2xl border border-white/10 bg-[#0B0E18] p-5"
            >
              <h3 className="text-white text-lg font-semibold mb-2">
                Report this item
              </h3>
              <label className="block text-white/70 text-xs mb-1">Reason</label>
              <select
                value={reportReason}
                onChange={(e) => setReportReason(e.target.value)}
                className="w-full bg-black/30 border border-white/10 rounded-xl px-3 py-2 text-white outline-none focus:border-white/20"
              >
                <option value="">Select a reason…</option>
                <option value="spam">Spam</option>
                <option value="inappropriate">Inappropriate</option>
                <option value="copyright">Copyright violation</option>
                <option value="other">Other</option>
              </select>
              {reportError && (
                <div className="text-red-400 text-xs mt-2">{reportError}</div>
              )}
              <div className="mt-4 flex gap-2 justify-end">
                <button
                  onClick={() => setIsReportOpen(false)}
                  className="px-4 py-2 rounded-xl text-white/80 border border-white/10 hover:bg-white/5"
                >
                  Cancel
                </button>
                <GradientButton onClick={handleSubmitReport}>
                  Submit
                </GradientButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile sticky buy bar (above bottom nav) */}
      <div className="md:hidden fixed bottom-16 left-0 right-0 z-40 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl p-3 flex items-center justify-between border border-white/10 bg-black/60 backdrop-blur-lg">
            <div className="flex items-center gap-2">
              <Image src="/solana-logo.svg" alt="SOL" width={16} height={16} />
              <span className="text-white font-medium">{currentBid} SOL</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setBidAmount(minBid.toFixed(2));
                  setBidError(null);
                  setIsBidOpen(true);
                }}
                className="px-4 py-2 rounded-xl text-white/90 border border-white/10 bg-[#0B0E18]"
              >
                Bid
              </button>
              <GradientButton className="px-4 py-2">Buy</GradientButton>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-6 md:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h3 className="text-white text-xl md:text-2xl font-bold mb-5">
              More like this
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/marketplace/${r.id}`}
                  className="group"
                >
                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                    <div className="relative w-full aspect-square">
                      <Image
                        src={
                          typeof r.image === "string"
                            ? r.image
                            : (r.image as any).src || (r.image as any)
                        }
                        alt={r.title}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="mt-2 text-white/90 text-sm truncate">
                    {r.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-xl px-4 py-2 bg-white/10 border border-white/15 text-white/90 backdrop-blur"
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
