"use client";

import React from "react";

export interface Niche {
  id: string;
  name: string;
  description: string;
}

interface NicheCardProps {
  niche: Niche & { icon?: React.ReactNode };
  selected?: boolean;
  onClick?: () => void;
}

export function NicheCard({
  niche,
  selected = false,
  onClick,
}: NicheCardProps) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-lg border-2 p-3 transition-all backdrop-blur-sm ${
        selected
          ? "border-indigo-500 bg-indigo-500/20 dark:bg-indigo-500/10 shadow-lg shadow-indigo-500/20"
          : "border-white/20 bg-white/40 hover:border-indigo-400/50 dark:border-white/10 dark:bg-white/5 dark:hover:border-indigo-400/30 hover:shadow-lg hover:shadow-indigo-500/10"
      }`}
    >
      <div className="flex items-start gap-2">
        {niche.icon && (
          <div className="mt-0.5 text-indigo-600 dark:text-indigo-400 flex-shrink-0">
            {niche.icon}
          </div>
        )}
        <div className="min-w-0">
          <h3 className="font-semibold text-sm text-gray-900 dark:text-white">
            {niche.name}
          </h3>
          <p className="mt-0.5 text-xs text-gray-600 dark:text-gray-400">
            {niche.description}
          </p>
        </div>
      </div>
    </div>
  );
}
