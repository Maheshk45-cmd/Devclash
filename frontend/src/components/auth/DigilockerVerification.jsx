import React, { useState } from 'react';
import { cn } from '../../utils/cn';
import { FileBadge2, Check, Loader2 } from 'lucide-react';
import { Button } from '../shared/Button';
import { FormInput } from '../shared/FormInput';

export function DigilockerVerification({ onVerify }) {
  const [status, setStatus] = useState('idle'); // idle, checking, success
  const [aadhaar, setAadhaar] = useState('');

  const initiateDigilocker = () => {
    if (aadhaar.length < 12) return;
    setStatus('checking');
    
    // Simulate API fetch delay
    setTimeout(() => {
      setStatus('success');
      if (onVerify) setTimeout(onVerify, 1000);
    }, 2000);
  };

  if (status === 'success') {
    return (
       <div className="w-full geometric-border rounded-xl p-4 bg-green-500/10 border-green-500 flex items-center space-x-4">
         <div className="w-10 h-10 bg-green-500 text-black rounded-full flex items-center justify-center">
            <Check className="w-5 h-5" />
         </div>
         <div>
            <p className="font-mono text-sm font-bold uppercase tracking-widest text-green-500">DIGILOCKER AUTHORIZED</p>
            <p className="font-sans text-xs text-green-500/70">Legal Identity Successfully Merged</p>
         </div>
       </div>
    );
  }

  return (
    <div className="w-full geometric-border rounded-xl p-6 bg-white dark:bg-[#111] relative overflow-hidden">
      
      <div className="flex items-center space-x-3 mb-6">
        <FileBadge2 className="w-6 h-6 text-[#FF7A00]" />
        <h4 className="font-mono text-sm font-bold uppercase tracking-widest">Connect Digilocker</h4>
      </div>

      <div className="space-y-4">
         <FormInput 
           placeholder="AADHAAR NUMBER (12 DIGITS)"
           value={aadhaar}
           onChange={(e) => setAadhaar(e.target.value.replace(/[^0-9]/g, '').slice(0, 12))}
           disabled={status !== 'idle'}
         />
         
         <Button 
           variant="outline" 
           onClick={initiateDigilocker}
           disabled={aadhaar.length < 12 || status !== 'idle'}
           className="w-full font-mono text-xs uppercase"
         >
           {status === 'idle' ? 'AUTHENTICATE VIA OAUTH' : (
             <span className="flex items-center justify-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin text-[#FF7A00]" />
                <span className="text-[#FF7A00]">FETCHING RECORDS...</span>
             </span>
           )}
         </Button>
      </div>

    </div>
  );
}
