"use client";

import { motion } from "framer-motion";

const NewsletterHero = () => {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gray-900 opacity-50" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Stay in the Loop
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
            Subscribe to our newsletter to get the latest updates on new
            artists, exclusive drops, and upcoming events.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsletterHero;
