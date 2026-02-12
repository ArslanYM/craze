"use client";

import React, { useMemo } from "react";
import { VoiceCard } from "./voice-card";
import {
  Language,
  DeepgramVoices,
  FonadalabVoices,
} from "@/lib/voice-constants";

interface LanguageVoiceSelectionStepProps {
  selectedLanguage?: string;
  selectedVoice?: string;
  onLanguageChange: (language: string) => void;
  onVoiceChange: (voice: string) => void;
}

export function LanguageVoiceSelectionStep({
  selectedLanguage,
  selectedVoice,
  onLanguageChange,
  onVoiceChange,
}: LanguageVoiceSelectionStepProps) {
  // Get voices based on selected language
  const voices = useMemo(() => {
    if (!selectedLanguage) return [];

    const selectedLang = Language.find((l) => l.language === selectedLanguage);
    if (!selectedLang) return [];

    if (selectedLang.modelName === "deepgram") {
      return DeepgramVoices;
    } else if (selectedLang.modelName === "fonadalab") {
      return FonadalabVoices;
    }
    return [];
  }, [selectedLanguage]);

  return (
    <div className="space-y-8">
      {/* Language Selection */}
      <div>
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
          Select Language & Voice
        </h2>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 font-medium">
          Choose your preferred language and voice for content generation
        </p>
      </div>

      {/* Language Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Language
        </h3>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 max-h-72 overflow-y-auto rounded-xl border border-white/20 bg-white/40 backdrop-blur-sm p-4 dark:border-white/10 dark:bg-white/5">
          {Language.map((lang) => (
            <button
              key={lang.language}
              onClick={() => onLanguageChange(lang.language)}
              className={`rounded-lg border-2 p-3 transition-all duration-200 backdrop-blur-sm text-left ${
                selectedLanguage === lang.language
                  ? "border-indigo-500 bg-indigo-500/20 dark:bg-indigo-500/10 shadow-lg shadow-indigo-500/30"
                  : "border-white/20 bg-white/40 dark:border-white/10 dark:bg-white/5 hover:border-indigo-400/60 dark:hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/15"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">{lang.countryFlag}</span>
                <div className="min-w-0">
                  <h4 className="font-semibold text-sm text-gray-900 dark:text-white">
                    {lang.language}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {lang.countryCode}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Voice Selection */}
      {selectedLanguage && voices.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Voice
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Select a voice for {selectedLanguage} content
          </p>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {voices.map((voice) => (
              <VoiceCard
                key={voice.modelName}
                voice={voice}
                selected={selectedVoice === voice.modelName}
                onClick={() => onVoiceChange(voice.modelName)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {selectedLanguage && voices.length === 0 && (
        <div className="rounded-lg border-2 border-dashed border-white/20 dark:border-white/10 p-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            No voices available for {selectedLanguage}
          </p>
        </div>
      )}
    </div>
  );
}
