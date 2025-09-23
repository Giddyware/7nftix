"use client";

import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { BookOpen, HelpCircle, Search, Users } from "lucide-react";

const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => (
  <details className="bg-black/20 p-4 rounded-lg border border-white/10 cursor-pointer">
    <summary className="font-semibold text-white flex justify-between items-center">
      {question}
      <HelpCircle className="w-5 h-5 text-primary" />
    </summary>
    <p className="text-gray-400 mt-2">{answer}</p>
  </details>
);

const SupportCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-black/20 p-6 rounded-2xl border border-white/10 text-center">
    {icon}
    <h3 className="text-xl font-bold text-white mt-4">{title}</h3>
    <p className="text-gray-400 mt-2">{description}</p>
  </div>
);

export default function Faq() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="relative mb-12">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder="Search for help..."
            className="w-full bg-black/30 border-gray-700 text-white rounded-lg py-3 pl-12 pr-4 focus:ring-primary focus:border-primary"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <SupportCard
            icon={<BookOpen className="w-10 h-10 text-primary mx-auto" />}
            title="Getting Started"
            description="Learn how to set up your wallet, create an account, and start trading."
          />
          <SupportCard
            icon={<Users className="w-10 h-10 text-primary mx-auto" />}
            title="Community"
            description="Join our Discord and follow us on social media to stay up-to-date."
          />
          <SupportCard
            icon={<HelpCircle className="w-10 h-10 text-primary mx-auto" />}
            title="FAQs"
            description="Find answers to common questions about NFTs, security, and more."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          <FaqItem
            question="What is an NFT?"
            answer="A non-fungible token (NFT) is a unique digital identifier that is recorded on a blockchain, and is used to certify ownership and authenticity. It cannot be copied, substituted, or subdivided."
          />
          <FaqItem
            question="How do I create an NFT?"
            answer="You can create an NFT by using our 'Create' page. You'll need to upload your artwork, give it a name and description, and then mint it to the blockchain."
          />
          <FaqItem
            question="What are the fees for using 7NFTix?"
            answer="We charge a 2.5% service fee on all sales. This fee is used to maintain and improve the platform."
          />
        </motion.div>
      </div>
    </div>
  );
}
