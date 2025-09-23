"use client";

import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-200 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            Last updated: October 26, 2023
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 prose prose-lg mx-auto text-gray-500"
        >
          <h2>Introduction</h2>
          <p>
            Welcome to 7NFTix. We are committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website.
          </p>
          <h2>Information We Collect</h2>
          <p>
            We may collect personal information from you such as your name,
            email address, and payment information when you register on our
            site, place an order, or subscribe to our newsletter.
          </p>
          <h2>How We Use Your Information</h2>
          <p>
            We may use the information we collect from you to personalize your
            experience, improve our website, process transactions, and send
            periodic emails.
          </p>
          <h2>Security of Your Information</h2>
          <p>
            We implement a variety of security measures to maintain the safety
            of your personal information when you place an order or enter,
            submit, or access your personal information.
          </p>
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at support@7nftix.com.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
