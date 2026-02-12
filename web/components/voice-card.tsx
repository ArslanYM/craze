"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VoiceCardProps {
  voice: {
    modelName: string;
    gender: string;
    preview: string;
  };
  selected?: boolean;
  onClick?: () => void;
}

export function VoiceCard({
  voice,
  selected = false,
  onClick,
}: VoiceCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [previewError, setPreviewError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handlePlayPreview = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      audioRef.current = null;
    } else {
      setIsLoading(true);
      setPreviewError(false);

      const audioElement = new Audio(`/previews/${voice.preview}`);

      audioElement.oncanplay = () => {
        setIsLoading(false);
        audioElement.play().catch((err) => {
          console.error("Failed to play preview:", err);
          setIsPlaying(false);
          setPreviewError(true);
        });
      };

      audioElement.onplay = () => {
        setIsPlaying(true);
      };

      audioElement.onended = () => {
        setIsPlaying(false);
        audioRef.current = null;
      };

      audioElement.onerror = (err) => {
        console.error("Audio loading error:", err);
        setIsLoading(false);
        setIsPlaying(false);
        setPreviewError(true);
      };

      audioRef.current = audioElement;
      audioElement.load();
    }
  };

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-lg border-2 p-4 transition-all duration-200 backdrop-blur-sm hover:scale-105 ${
        selected
          ? "border-indigo-500 bg-indigo-500/20 dark:bg-indigo-500/10 shadow-lg shadow-indigo-500/30"
          : "border-white/20 bg-white/40 dark:border-white/10 dark:bg-white/5 hover:border-indigo-400/60 dark:hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/15"
      }`}
    >
      <div className="space-y-3">
        {/* Voice Name */}
        <div>
          <h3 className="font-bold text-base text-gray-900 dark:text-white capitalize">
            {voice.modelName.replace(/-/g, " ")}
          </h3>
        </div>

        {/* Gender Badge and Model */}
        <div className="flex items-center gap-2">
          <span
            className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${
              voice.gender === "male"
                ? "bg-blue-500/20 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300"
                : "bg-pink-500/20 text-pink-700 dark:bg-pink-500/20 dark:text-pink-300"
            }`}
          >
            {voice.gender}
          </span>
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
            Model: {voice.modelName.split("-")[0]}
          </span>
        </div>

        {/* Preview Button */}
        <Button
          onClick={handlePlayPreview}
          disabled={isLoading || previewError}
          size="sm"
          variant="outline"
          className="w-full gap-2 border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all h-8 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {previewError ? (
            <>
              <AlertCircle className="h-4 w-4" />
              Preview Unavailable
            </>
          ) : isLoading ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Loading...
            </>
          ) : isPlaying ? (
            <>
              <Pause className="h-4 w-4" />
              Stop
            </>
          ) : (
            <>
              <Play className="h-4 w-4" />
              Preview
            </>
          )}
        </Button>

        {/* Selection Indicator */}
        {selected && (
          <div className="pt-2 border-t border-indigo-500/30">
            <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              ✓ Selected
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
