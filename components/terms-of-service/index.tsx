"use client";

import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <div className="bg-gray-200 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Terms of Service
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
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the 7NFTix website, you agree to be bound by
            these Terms of Service. If you do not agree to these terms, please
            do not use our services.
          </p>
          <h2>2. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will
            notify you of any changes by posting the new Terms of Service on
            this page. Your continued use of the service after any such changes
            constitutes your acceptance of the new terms.
          </p>
          <h2>3. User Conduct</h2>
          <p>
            You agree not to use the service for any unlawful purpose or in any
            way that could harm our reputation. You are responsible for your
            conduct and content while using the service.
          </p>
          <h2>4. Intellectual Property</h2>
          <p>
            All content on this site, including text, graphics, logos, and
            images, is the property of 7NFTix or its content suppliers and is
            protected by international copyright laws.
          </p>
          <h2>5. Limitation of Liability</h2>
          <p>
            In no event shall 7NFTix be liable for any indirect, incidental,
            special, or consequential damages arising out of or in connection
            with your use of the service.
          </p>
          <h2>6. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with
            the laws of the jurisdiction in which our company is established,
            without regard to its conflict of law provisions.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
