"use client";

import React, { useState } from "react";
import {
  Skull,
  Zap,
  Code,
  UtensilsCrossed,
  Dumbbell,
  Globe,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NicheCard, type Niche } from "./niche-card";

const availableNiches: (Niche & { icon: React.ReactNode })[] = [
  {
    id: "scary",
    name: "Scary Stories",
    description: "Horror and suspenseful narratives",
    icon: <Skull className="w-5 h-5" />,
  },
  {
    id: "motivational",
    name: "Motivational",
    description: "Inspiring stories and personal growth",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: "tech",
    name: "Technology",
    description: "Latest tech trends and innovations",
    icon: <Code className="w-5 h-5" />,
  },
  {
    id: "cooking",
    name: "Cooking & Recipes",
    description: "Culinary arts and food preparation",
    icon: <UtensilsCrossed className="w-5 h-5" />,
  },
  {
    id: "fitness",
    name: "Fitness & Health",
    description: "Exercise routines and wellness tips",
    icon: <Dumbbell className="w-5 h-5" />,
  },
  {
    id: "travel",
    name: "Travel Adventures",
    description: "Explore destinations around the world",
    icon: <Globe className="w-5 h-5" />,
  },
];

interface NicheSelectionStepProps {
  selectedNiche?: string;
  onNicheChange: (niche: string) => void;
}

export function NicheSelectionStep({
  selectedNiche,
  onNicheChange,
}: NicheSelectionStepProps) {
  const [customNiche, setCustomNiche] = useState("");
  const [activeTab, setActiveTab] = useState<"available" | "custom">(
    selectedNiche && !availableNiches.find((n) => n.id === selectedNiche)
      ? "custom"
      : "available",
  );

  const handleTabChange = (value: string) => {
    setActiveTab(value as "available" | "custom");
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
          Select Your Niche
        </h2>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 font-medium">
          Choose from available niches or create a custom one for your content
        </p>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2 bg-white/30 dark:bg-white/5 border border-white/20 dark:border-white/10">
          <TabsTrigger
            value="available"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
          >
            Available Niche
          </TabsTrigger>
          <TabsTrigger
            value="custom"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
          >
            Custom Niche
          </TabsTrigger>
        </TabsList>

        <TabsContent value="available" className="space-y-4">
          <div className="max-h-96 overflow-y-auto rounded-xl border border-white/20 bg-white/40 backdrop-blur-sm p-3 dark:border-white/10 dark:bg-white/5">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
              {availableNiches.map((niche) => (
                <NicheCard
                  key={niche.id}
                  niche={niche}
                  selected={selectedNiche === niche.id}
                  onClick={() => onNicheChange(niche.id)}
                />
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="custom" className="space-y-4">
          <div className="rounded-xl border border-white/20 bg-white/40 backdrop-blur-sm p-6 dark:border-white/10 dark:bg-white/5">
            <Label htmlFor="custom-niche" className="text-base font-semibold">
              Niche Name
            </Label>
            <Input
              id="custom-niche"
              placeholder="Enter your custom niche"
              value={customNiche}
              onChange={(e) => {
                setCustomNiche(e.target.value);
                if (e.target.value.trim()) {
                  onNicheChange(e.target.value);
                }
              }}
              className="mt-2 border-white/20 bg-white/50 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 placeholder:text-gray-400 dark:placeholder:text-gray-500"
            />
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              Describe what your content is about. Examples: "Gaming",
              "Education", "Comedy"
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
