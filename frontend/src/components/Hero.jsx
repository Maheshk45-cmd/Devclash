import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export function Hero() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.hero-element', {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 0.2
    });
    
    gsap.from('.bg-gradient-streak', {
      scale: 1.1,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out'
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-[90vh] pt-32 pb-16 px-4 md:px-8 overflow-hidden rounded-b-3xl geometric-border bg-gradient-to-br from-[#F5F5F3] via-[#E8E6E1] to-[#FFE0B2] dark:from-[#0D0D0D] dark:via-[#1A1A1A] dark:to-[#3A2208]">
      
      {/* Background Graphic Elements */}
      <div className="absolute top-0 right-0 w-[80vw] h-[120vh] bg-gradient-to-bl from-[#FF7A00]/20 to-transparent clip-diagonal -z-10 translate-x-[20%] -translate-y-[10%] bg-gradient-streak mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute top-1/4 right-[10%] w-64 h-64 bg-transparent border-2 border-dotted border-zinc-400/30 rounded-full -z-10 hero-element" />

      <div className="max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-12 gap-8 relative items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col justify-center section-left">
          
          <div className="flex items-center space-x-6 mb-6 hero-element text-sm font-mono tracking-widest font-bold uppercase">
             <span className="text-zinc-500">2026 UPDATE</span>
             <span className="text-[#FF7A00]">NOW AVAILABLE</span>
          </div>
          
          <h1 className="hero-element font-display font-black text-[12vw] lg:text-[180px] leading-[0.8] tracking-tighter text-black dark:text-white -ml-2 mb-8 select-none">
            HireX
          </h1>
          
          <div className="hero-element grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 border-y geometric-border border-zinc-300 dark:border-zinc-800 py-4 font-mono text-xs uppercase tracking-wider font-bold">
            <div>
              <p className="text-zinc-500 mb-1">CAPACITY</p>
              <p>UNLIMITED</p>
            </div>
            <div>
              <p className="text-zinc-500 mb-1">VERIFICATION</p>
              <p>AI LIVENESS</p>
            </div>
            <div>
              <p className="text-zinc-500 mb-1">TYPE</p>
              <p>ECOSYSTEM</p>
            </div>
            <div>
              <p className="text-zinc-500 mb-1">MATCHING</p>
              <p>SMART ALGO</p>
            </div>
          </div>

          <p className="hero-element font-mono text-sm md:text-base text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed uppercase">
            A trusted professional ecosystem platform combining networking, opportunities, events, and promotion with verified human identity and AI-assisted guidance.
          </p>
          
        </div>

        {/* Right Content / Abstract Visuals */}
        <div className="lg:col-span-5 h-[50vh] lg:h-full relative flex items-center justify-center hero-element">
          {/* Abstract geometric card mimicking a tech product feel */}
          <div className="relative w-full max-w-md aspect-[3/4] bg-white/50 dark:bg-black/50 backdrop-blur-3xl rounded-xl geometric-border border-white/40 dark:border-white/10 shadow-2xl flex flex-col justify-between p-6 overflow-hidden">
            
            {/* Top row */}
            <div className="flex justify-between items-start font-mono text-[10px] uppercase font-bold tracking-widest text-zinc-500">
               <span>SYS.REC // 01</span>
               <div className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse" />
            </div>

            {/* Center Interface Mock UI */}
            <div className="flex-1 flex items-center justify-center relative">
               <div className="absolute w-48 h-48 border-[1px] border-zinc-800/10 dark:border-white/10 rounded-full" />
               <div className="absolute w-32 h-32 border-[1px] border-zinc-800/20 dark:border-white/20 rounded-full" />
               <button className="w-16 h-16 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-current border-b-[6px] border-b-transparent ml-1" />
               </button>
            </div>

            {/* Bottom Tech Details */}
            <div className="grid grid-cols-2 gap-4 border-t geometric-border border-zinc-800/10 dark:border-white/10 pt-4 font-mono text-[9px] uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
               <ul>
                 <li>— HUMAN IDENTITY</li>
                 <li>— COMPANY REG</li>
                 <li>— OPPORTUNITIES</li>
               </ul>
               <ul className="text-right">
                 <li>V 2.0.4</li>
                 <li>SECURE</li>
                 <li>24 BIT SYNC</li>
               </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
