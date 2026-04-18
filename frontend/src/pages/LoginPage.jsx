import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../components/shared/Button';
import { FormInput } from '../components/shared/FormInput';

export function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0D0D0D] px-4 pt-20">
      
      <div className="w-full max-w-md bg-zinc-50 dark:bg-[#151515] geometric-border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 relative overflow-hidden">
        
        {/* Subtle geometric background */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-bl from-[#FF7A00]/10 to-transparent rounded-full blur-2xl" />

        <div className="text-center mb-8 relative z-10">
          <div className="mx-auto w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center font-display font-medium text-xl mb-6">
            H
          </div>
          <h1 className="font-display font-bold text-3xl mb-2">ACCESS SYSTEM</h1>
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">Sign in to your HireX account</p>
        </div>

        <form className="space-y-6 relative z-10" onSubmit={e => e.preventDefault()}>
          <FormInput 
            label="EMAIL ADDRESS" 
            id="email" 
            type="email" 
            placeholder="SYSTEM.OP@DOMAIN.COM" 
          />
          <FormInput 
            label="SECURITY KEY (PASSWORD)" 
            id="password" 
            type="password" 
            placeholder="••••••••••••" 
          />
          
          <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-zinc-500">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 bg-transparent border-zinc-300 dark:border-zinc-700 rounded-sm accent-[#FF7A00]" />
              <span>REMEMBER ME</span>
            </label>
            <a href="#" className="hover:text-[#FF7A00] transition-colors">FORGOT KEY?</a>
          </div>

          <Button variant="primary" className="w-full uppercase font-mono tracking-widest font-bold">
            INITIATE LOGIN
          </Button>
        </form>

        <div className="mt-8 text-center font-mono text-xs uppercase tracking-widest text-zinc-500">
          NO AUTHORIZATION?{' '}
          <NavLink to="/signup" className="text-[#FF7A00] font-bold hover:underline">
            REQUEST ACCESS
          </NavLink>
        </div>

      </div>
    </main>
  );
}
