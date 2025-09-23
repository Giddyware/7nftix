"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

const jobOpenings = [
  {
    title: "Senior Blockchain Engineer",
    location: "Remote",
    department: "Engineering",
  },
  {
    title: "Frontend Developer (React/Next.js)",
    location: "Remote",
    department: "Engineering",
  },
  {
    title: "Product Designer",
    location: "New York, NY",
    department: "Design",
  },
  {
    title: "Community Manager",
    location: "Remote",
    department: "Marketing",
  },
];

export default function JobListings() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white">Current Openings</h2>
          <p className="text-lg text-gray-400 mt-4">
            Find your place at the forefront of the NFT revolution.
          </p>
        </motion.div>
        <div className="space-y-6">
          {jobOpenings.map((job, index) => (
            <motion.div
              key={index}
              className="bg-black/20 p-6 rounded-2xl border border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div>
                <h3 className="text-xl font-bold text-white">{job.title}</h3>
                <div className="flex items-center gap-4 mt-2 text-gray-400">
                  <span className="text-sm font-semibold bg-primary/10 text-gray-500 px-2 py-1 rounded">
                    {job.department}
                  </span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                </div>
              </div>
              <Button className="mt-4 md:mt-0 bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded-lg group">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
