import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../components/shared/Button';
import { FormInput } from '../components/shared/FormInput';
import { FaceVerification } from '../components/auth/FaceVerification';

export function SignupPage() {
  const [livenessVerified, setLivenessVerified] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0D0D0D] px-4 py-32">
      
      <div className="w-full max-w-2xl bg-zinc-50 dark:bg-[#151515] geometric-border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF7A00]/5 rounded-bl-full blur-3xl pointer-events-none" />

        <div className="text-center mb-10 relative z-10">
          <h1 className="font-display font-black tracking-tighter text-4xl md:text-5xl mb-3">CREATE IDENTITY</h1>
          <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-zinc-500">
            Provision your HireX ecosystem profile
          </p>
        </div>

        <form className="space-y-8 relative z-10" onSubmit={e => e.preventDefault()}>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput label="FIRST DESIGNATION" id="firstName" placeholder="JANE" />
            <FormInput label="LAST DESIGNATION" id="lastName" placeholder="DOE" />
          </div>

          <FormInput label="COMMUNICATION PROTOCOL (EMAIL)" id="email" type="email" placeholder="SYSTEM.OP@DOMAIN.COM" />
          <FormInput label="SECURITY KEY (PASSWORD)" id="password" type="password" placeholder="••••••••••••" />

          {/* Liveness Section */}
          <div className="pt-4 border-t geometric-border border-zinc-200 dark:border-zinc-800">
            <div className="mb-4">
              <h3 className="font-mono text-sm font-bold uppercase tracking-widest mb-1">BIOMETRIC LIVENESS</h3>
              <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                Verification required for trusted network access
              </p>
            </div>
            
            <FaceVerification onVerify={() => setLivenessVerified(true)} />
          </div>

          <Button 
            variant="primary" 
            className="w-full uppercase font-mono tracking-widest font-bold h-14 text-sm"
            disabled={!livenessVerified}
          >
            {livenessVerified ? "PROVISION ACCOUNT" : "AWAITING BIOMETRICS"}
          </Button>

        </form>

        <div className="mt-8 pt-8 border-t geometric-border border-zinc-200 dark:border-zinc-800 text-center font-mono text-xs uppercase tracking-widest text-zinc-500">
          EXISTING RECORD?{' '}
          <NavLink to="/login" className="text-[#FF7A00] font-bold hover:underline">
            AUTHENTICATE
          </NavLink>
        </div>

      </div>
    </main>
  );
}
