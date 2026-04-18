import React from 'react';
import { Hero } from '../components/Hero';

export function LandingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0D0D0D]">
      <Hero />
      {/* Additional Phase 2 sections will go here */}
      <div className="h-[50vh] flex items-center justify-center font-mono text-zinc-500 uppercase tracking-widest">
        — SCROLL BUFFER —
      </div>
    </main>
  );
}
