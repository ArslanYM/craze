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
          <div className="max-h-96 overflow-y-auto rounded-xl border border-white/20 bg-white/40 backdrop-blur-sm p-4 dark:border-white/10 dark:bg-white/5">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
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
          <div className="rounded-xl border border-white/20 bg-white/40 backdrop-blur-sm p-6 dark:border-white/10 dark:bg-white/5 shadow-lg">
            <div className="mb-4">
              <Label
                htmlFor="custom-niche"
                className="text-lg font-bold text-gray-900 dark:text-white"
              >
                Create Your Custom Niche
              </Label>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Define a unique niche for your content
              </p>
            </div>
            <Input
              id="custom-niche"
              placeholder="e.g., Gaming, Education, Comedy, Fitness..."
              value={customNiche}
              onChange={(e) => {
                setCustomNiche(e.target.value);
                if (e.target.value.trim()) {
                  onNicheChange(e.target.value);
                }
              }}
              className="border-white/30 bg-white/60 backdrop-blur-sm dark:border-white/20 dark:bg-white/10 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-indigo-500 h-11 text-base font-medium"
            />
            <p className="mt-4 text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
              💡 Tip: Be specific and descriptive for better content
              recommendations
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
