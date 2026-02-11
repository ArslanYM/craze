"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FormFooterProps {
  onBack?: () => void;
  onContinue?: () => void;
  backDisabled?: boolean;
  continueDisabled?: boolean;
  showBack?: boolean;
}

export function FormFooter({
  onBack,
  onContinue,
  backDisabled = false,
  continueDisabled = false,
  showBack = true,
}: FormFooterProps) {
  return (
    <div className="flex items-center justify-between gap-3">
      {showBack && (
        <Button
          onClick={onBack}
          disabled={backDisabled}
          variant="outline"
          className="gap-2 border-white/20 hover:bg-white/10 dark:border-white/10 dark:hover:bg-white/5 transition-all"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </Button>
      )}
      <div className="flex-1" />
      <Button
        onClick={onContinue}
        disabled={continueDisabled}
        className="gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/20 border-0 transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
      >
        Continue
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
