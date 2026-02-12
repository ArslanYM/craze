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
      className={`cursor-pointer rounded-xl border-2 p-4 transition-all duration-200 backdrop-blur-sm hover:scale-105 ${
        selected
          ? "border-indigo-500 bg-indigo-500/20 dark:bg-indigo-500/10 shadow-xl shadow-indigo-500/30"
          : "border-white/20 bg-white/40 dark:border-white/10 dark:bg-white/5 hover:border-indigo-400/60 dark:hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/15"
      }`}
    >
      <div className="flex items-start gap-3">
        {niche.icon && (
          <div className="mt-1 text-indigo-600 dark:text-indigo-400 flex-shrink-0 text-xl">
            {niche.icon}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-base text-gray-900 dark:text-white">
            {niche.name}
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {niche.description}
          </p>
        </div>
      </div>
    </div>
  );
}
