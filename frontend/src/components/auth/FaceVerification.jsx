import React, { useState, useEffect } from 'react';
import { cn } from '../../utils/cn';
import { ScanFace, Check, AlertTriangle } from 'lucide-react';

export function FaceVerification({ onVerify }) {
  const [status, setStatus] = useState('idle'); // idle, scanning, success, error

  const startScan = () => {
    setStatus('scanning');
    
    // Simulate process
    setTimeout(() => {
      setStatus('success');
      if (onVerify) setTimeout(onVerify, 1000);
    }, 2500);
  };

  return (
    <div className="w-full geometric-border rounded-xl p-6 bg-white dark:bg-black relative overflow-hidden flex flex-col items-center justify-center min-h-[240px]">
      
      {/* Decorative scan lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-10 bg-[linear-gradient(transparent_50%,rgba(0,0,0,1)_50%)] bg-[length:100%_4px]" />

      <div className={cn(
        "relative w-32 h-32 rounded-full border-2 flex items-center justify-center mb-4 transition-all duration-500",
        status === 'idle' ? "border-dashed border-zinc-300 dark:border-zinc-700" :
        status === 'scanning' ? "border-[#FF7A00] animate-pulse" :
        status === 'success' ? "border-green-500" : "border-red-500"
      )}>
         {status === 'idle' && <ScanFace className="w-12 h-12 text-zinc-400" />}
         {status === 'scanning' && (
           <>
             <ScanFace className="w-12 h-12 text-[#FF7A00]" />
             <div className="absolute inset-x-0 h-[2px] bg-[#FF7A00] animate-[scan_2s_ease-in-out_infinite]" style={{ top: '50%' }} />
             <style>{`
               @keyframes scan {
                 0%, 100% { transform: translateY(-30px); }
                 50% { transform: translateY(30px); }
               }
             `}</style>
           </>
         )}
         {status === 'success' && <Check className="w-16 h-16 text-green-500 animate-in fade-in zoom-in" />}
         {status === 'error' && <AlertTriangle className="w-16 h-16 text-red-500 animate-in fade-in zoom-in" />}
      </div>

      <div className="text-center z-10 w-full">
        {status === 'idle' && (
          <button 
            type="button"
            onClick={startScan}
            className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF7A00] hover:bg-[#FF7A00]/10 px-4 py-2 rounded-full transition-colors"
          >
            INITIATE LIVENESS SCAN
          </button>
        )}
        {status === 'scanning' && <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 animate-pulse">ANALYZING BIOMETRICS...</p>}
        {status === 'success' && <p className="font-mono text-xs uppercase tracking-widest text-green-500">HUMAN IDENTITY VERIFIED</p>}
        {status === 'error' && <p className="font-mono text-xs uppercase tracking-widest text-red-500">LIVENESS CHECK FAILED</p>}
      </div>

    </div>
  );
}
