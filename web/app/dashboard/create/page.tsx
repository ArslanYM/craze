"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { ProgressStepper } from "@/components/progress-stepper";
import { NicheSelectionStep } from "@/components/niche-selection-step";
import { LanguageVoiceSelectionStep } from "@/components/language-voice-selection-step";
import { FormFooter } from "@/components/form-footer";

const steps = [
  { id: 1, label: "Niche" },
  { id: 2, label: "Language & Voice" },
  { id: 3, label: "Content Style" },
  { id: 4, label: "Series Details" },
  { id: 5, label: "Review" },
  { id: 6, label: "Publish" },
];

export interface FormData {
  niche?: string;
  language?: string;
  voice?: string;
  contentStyle?: string;
  seriesTitle?: string;
  seriesDescription?: string;
}

export default function CreatePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({});

  const updateFormData = (updates: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleContinue = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle final submission
      console.log("Form submitted:", formData);
    }
  };

  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === steps.length;

  // Validate current step
  let isCurrentStepValid = false;
  if (currentStep === 1) {
    isCurrentStepValid = !!formData.niche;
  } else if (currentStep === 2) {
    isCurrentStepValid = !!formData.language && !!formData.voice;
  } else {
    isCurrentStepValid = true;
  }

  return (
    <DashboardLayout>
      <div className="space-y-8 relative">
        {/* Background Gradients */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute left-0 right-0 top-20 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-400 opacity-20 blur-[100px] dark:bg-indigo-900"></div>
          <div className="absolute right-0 top-32 -z-10 h-[400px] w-[400px] rounded-full bg-purple-400 opacity-20 blur-[100px] dark:bg-purple-900"></div>
        </div>

        {/* Progress Stepper */}
        <div className="rounded-2xl border border-white/20 bg-white/50 backdrop-blur-xl p-6 dark:border-white/10 dark:bg-white/5 shadow-lg">
          <ProgressStepper steps={steps} currentStep={currentStep} />
        </div>

        {/* Step Content */}
        <div className="rounded-2xl border border-white/20 bg-white/50 backdrop-blur-xl p-6 dark:border-white/10 dark:bg-white/5 space-y-6 shadow-lg">
          {currentStep === 1 && (
            <NicheSelectionStep
              selectedNiche={formData.niche}
              onNicheChange={(niche) => updateFormData({ niche })}
            />
          )}
          {currentStep === 2 && (
            <LanguageVoiceSelectionStep
              selectedLanguage={formData.language}
              selectedVoice={formData.voice}
              onLanguageChange={(language) =>
                updateFormData({ language, voice: undefined })
              }
              onVoiceChange={(voice) => updateFormData({ voice })}
            />
          )}
          {currentStep > 2 && (
            <div className="text-center py-12">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
                Step {currentStep}
              </h2>
              <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
                Coming soon...
              </p>
            </div>
          )}

          {/* Form Footer */}
          <div className="border-t border-white/20 pt-6 dark:border-white/10">
            <FormFooter
              onBack={handleBack}
              onContinue={handleContinue}
              backDisabled={isFirstStep}
              continueDisabled={!isCurrentStepValid}
              showBack={!isFirstStep}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
