"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2 } from "lucide-react";

type Property = {
  trait_type: string;
  value: string;
};

type PropertiesInputProps = {
  properties: Property[];
  onAdd: () => void;
  onRemove: (index: number) => void;
  onChange: (index: number, field: keyof Property, value: string) => void;
};

export default function PropertiesInput({
  properties,
  onAdd,
  onRemove,
  onChange,
}: PropertiesInputProps) {
  return (
    <div className="space-y-4">
      <Label className="text-white font-bold">Properties</Label>
      <p className="text-sm text-gray-400">
        Add custom traits to your NFT. These will be displayed on the item's
        page.
      </p>
      {properties.map((prop, index) => (
        <div key={index} className="flex items-center gap-2">
          <Input
            placeholder="e.g. Color"
            value={prop.trait_type}
            onChange={(e) => onChange(index, "trait_type", e.target.value)}
            className="bg-transparent border-gray-600 text-white"
          />
          <Input
            placeholder="e.g. Blue"
            value={prop.value}
            onChange={(e) => onChange(index, "value", e.target.value)}
            className="bg-transparent border-gray-600 text-white"
          />
          <Button
            type="button"
            variant="destructive"
            size="icon"
            onClick={() => onRemove(index)}
            className="bg-red-500/20 hover:bg-red-500/40 border-none"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        onClick={onAdd}
        className="w-full border-gray-600 text-white bg-gray-800 hover:bg-gray-700 hover:text-white"
      >
        Add Property
      </Button>
    </div>
  );
}
