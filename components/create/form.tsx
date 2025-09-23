"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { ArrowRight, FilePlus, Lock, Upload } from "lucide-react";
import { useState } from "react";
import PropertiesInput from "./properties-input";

type Property = {
  trait_type: string;
  value: string;
};

export default function CreateForm() {
  const [preview, setPreview] = useState<string | null>(null);
  const [properties, setProperties] = useState<Property[]>([]);
  const [unlockable, setUnlockable] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addProperty = () => {
    setProperties([...properties, { trait_type: "", value: "" }]);
  };

  const removeProperty = (index: number) => {
    setProperties(properties.filter((_, i) => i !== index));
  };

  const handlePropertyChange = (
    index: number,
    field: keyof Property,
    value: string
  ) => {
    const newProperties = [...properties];
    newProperties[index][field] = value;
    setProperties(newProperties);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.form
        className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left side: Image upload and preview */}
        <motion.div className="lg:col-span-1 space-y-6" variants={itemVariants}>
          <h3 className="text-2xl font-bold text-white">Preview</h3>
          <div className="p-4 bg-black/20 rounded-2xl border border-white/10 aspect-square">
            <div className="w-full h-full border-2 border-dashed border-gray-500 rounded-lg flex items-center justify-center relative overflow-hidden group">
              {preview ? (
                <img
                  src={preview}
                  alt="Artwork preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center text-gray-400">
                  <Upload className="mx-auto h-12 w-12" />
                  <p className="mt-2">PNG, JPG, GIF, WEBP or MP4. Max 100mb.</p>
                </div>
              )}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <FilePlus className="h-10 w-10 text-white" />
              </div>
              <Input
                id="nft-image"
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileChange}
                accept="image/*,video/mp4"
              />
            </div>
          </div>
        </motion.div>

        {/* Right side: Form fields */}
        <motion.div
          className="lg:col-span-2 space-y-8"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Label htmlFor="name" className="text-white font-bold text-lg">
              Name
            </Label>
            <Input
              id="name"
              placeholder='e.g. "CryptoPunk #1234"'
              className="mt-2 bg-black/30 border-gray-700 text-white rounded-lg py-3 px-4 focus:ring-primary focus:border-primary"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Label
              htmlFor="description"
              className="text-white font-bold text-lg"
            >
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="e.g. “A unique digital collectible from the CryptoPunks collection.”"
              className="mt-2 bg-black/30 border-gray-700 text-white rounded-lg p-4 focus:ring-primary focus:border-primary"
              rows={4}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <PropertiesInput
              properties={properties}
              onAdd={addProperty}
              onRemove={removeProperty}
              onChange={handlePropertyChange}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="unlockable"
                className="text-white font-bold text-lg flex items-center gap-2"
              >
                <Lock className="w-5 h-5" />
                Unlockable Content
              </Label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={unlockable}
                  onChange={() => setUnlockable(!unlockable)}
                />
                <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-focus:ring-4 peer-focus:ring-primary/50 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            {unlockable && (
              <Textarea
                id="unlockable-content"
                placeholder="Enter your secret content here (e.g., a link, a code, etc.)"
                className="mt-2 bg-black/30 border-gray-700 text-white rounded-lg p-4 focus:ring-primary focus:border-primary"
                rows={3}
              />
            )}
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 text-lg rounded-xl group"
            >
              Create & Mint NFT
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.form>
    </div>
  );
}
