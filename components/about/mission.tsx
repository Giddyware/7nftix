"use client";

import { motion } from "framer-motion";
import { Globe, Rocket, Users } from "lucide-react";

const MissionCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <motion.div
    className="bg-black/20 p-8 rounded-2xl border border-white/10 text-center"
    whileHover={{ y: -5, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)" }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

export default function Mission() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white">Our Mission</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            To empower creators and collectors by building the most innovative,
            secure, and user-friendly NFT marketplace.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MissionCard
            icon={<Globe className="w-12 h-12 text-primary" />}
            title="Democratize Access"
            description="Making the world of digital assets accessible to everyone, everywhere."
          />
          <MissionCard
            icon={<Rocket className="w-12 h-12 text-primary" />}
            title="Foster Innovation"
            description="Pushing the boundaries of what's possible with blockchain technology and digital art."
          />
          <MissionCard
            icon={<Users className="w-12 h-12 text-primary" />}
            title="Build Community"
            description="Creating a vibrant and supportive ecosystem for artists, collectors, and developers."
          />
        </div>
      </div>
    </div>
  );
}
