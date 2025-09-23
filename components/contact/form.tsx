"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageSquare, User } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.form
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="name"
                placeholder="Your Name"
                className="w-full bg-black/30 border-gray-700 text-white rounded-lg py-3 pl-12 pr-4 focus:ring-primary focus:border-primary"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full bg-black/30 border-gray-700 text-white rounded-lg py-3 pl-12 pr-4 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-400" />
            <Textarea
              id="message"
              placeholder="Your Message"
              className="w-full bg-black/30 border-gray-700 text-white rounded-lg p-4 pl-12 focus:ring-primary focus:border-primary"
              rows={6}
            />
          </div>
          <div className="text-center">
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 text-lg rounded-xl group"
            >
              Send Message
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
