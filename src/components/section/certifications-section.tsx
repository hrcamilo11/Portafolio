"use client";

import React, { useState, useEffect } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { X } from "lucide-react";

interface Certification {
  name: string;
  href: string;
}

interface CertificationsSectionProps {
  title: string;
  certifications: readonly Certification[];
  baseDelay: number;
}

export default function CertificationsSection({ title, certifications, baseDelay }: CertificationsSectionProps) {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCert]);

  return (
    <>
      <section id="certifications">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={baseDelay}>
            <h2 className="text-xl font-bold">{title}</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert, id) => (
              <BlurFade key={cert.name} delay={baseDelay + 0.04 + id * 0.02}>
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2 hover:bg-muted transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <span className="text-foreground text-sm font-medium">{cert.name}</span>
                </button>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedCert(null)}
          />
          
          {/* Dialog Container */}
          <div 
            className="relative z-10 w-full max-w-5xl h-[85vh] bg-card border shadow-2xl rounded-xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b bg-muted/50">
              <h3 className="font-semibold text-lg">{selectedCert.name}</h3>
              <button
                onClick={() => setSelectedCert(null)}
                className="rounded-full p-2 hover:bg-background/80 transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                aria-label="Cerrar modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Content (PDF) */}
            <div className="flex-1 w-full bg-muted/20">
              <iframe 
                src={`${selectedCert.href}#toolbar=0`} 
                className="w-full h-full border-0"
                title={`Certificado de ${selectedCert.name}`}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
