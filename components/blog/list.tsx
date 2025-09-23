"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const blogPosts = [
  {
    title: "The Rise of Generative Art",
    description:
      "Exploring the intersection of code and creativity in the NFT space.",
    image: "/images/collection1.png",
    author: "Jane Doe",
    date: "September 22, 2025",
  },
  {
    title: "A Guide to NFT Security",
    description:
      "Learn how to protect your digital assets from scams and theft.",
    image: "/images/collection2.png",
    author: "John Smith",
    date: "September 15, 2025",
  },
  {
    title: "The Future of Gaming and NFTs",
    description:
      "How blockchain technology is set to revolutionize the gaming industry.",
    image: "/images/collection3.png",
    author: "Emily White",
    date: "September 8, 2025",
  },
];

export default function BlogList() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-black/20 rounded-2xl border border-white/10 overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative aspect-video">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4">{post.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                </div>
                <Button className="mt-4 w-full bg-primary/10 text-primary hover:bg-primary/20">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
