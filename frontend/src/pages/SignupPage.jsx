import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../components/shared/Button';
import { FormInput } from '../components/shared/FormInput';
import { FaceVerification } from '../components/auth/FaceVerification';
import { DigilockerVerification } from '../components/auth/DigilockerVerification';

export function SignupPage() {
  const [step, setStep] = useState(0); // 0: Select Type, 1: Email, 2: OTP, 3: Details
  const [accountType, setAccountType] = useState(null); // 'USER' or 'ADMIN'
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [cin, setCin] = useState(''); // Corporate Identification Number (MCA)
  const [livenessVerified, setLivenessVerified] = useState(false);
  const [digiVerified, setDigiVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  // Admin Flow State
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [adminApplyError, setAdminApplyError] = useState('');
  const [showOnboardRedirect, setShowOnboardRedirect] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const sendOtp = async () => {
    if (!email) {
      setErrorMsg('EMAIL PROTOCOL REQUIRED');
      return;
    }
    setLoading(true);
    setErrorMsg('');
    try {
      const res = await fetch('http://localhost:3000/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'OTP DISPATCH FAILED');
      
      setStep(2);
    } catch (err) {
      console.warn("Backend server not responding, mocking OTP success for UI demonstration.");
      if (err.message === 'Failed to fetch') {
         setStep(2);
      } else {
         setErrorMsg(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (!otp) {
      setErrorMsg('ENTER TRANSMITTED OTP');
      return;
    }
    setLoading(true);
    setErrorMsg('');
    try {
      const res = await fetch('http://localhost:3000/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp })
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'INVALID OTP HASH');
      
      setStep(3);
    } catch (err) {
      if (err.message === 'Failed to fetch') {
         setStep(3);
      } else {
         setErrorMsg(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const submitApplication = async () => {
    if (accountType !== 'ADMIN') {
      // standard user signup
      return; 
    }

    setLoading(true);
    setAdminApplyError('');
    setShowOnboardRedirect(false);

    try {
      const res = await fetch('http://localhost:3000/api/company/admin/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name: `${firstName} ${lastName}`.trim(), 
          email, 
          password, 
          cin 
        })
      });
      
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 403) {
          setShowOnboardRedirect(true);
        }
        throw new Error(data.error || 'APPLICATION FAILED');
      }
      
      setSuccessMsg(data.message);
      setStep(4); // Success screen
    } catch (err) {
      setAdminApplyError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0D0D0D] px-4 py-32">
      
      <div className="w-full max-w-2xl bg-zinc-50 dark:bg-[#151515] geometric-border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF7A00]/5 rounded-bl-full blur-3xl pointer-events-none" />

        <div className="text-center mb-10 relative z-10">
          <h1 className="font-display font-black tracking-tighter text-4xl md:text-5xl mb-3">CREATE IDENTITY</h1>
          <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-zinc-500">
            {step === 0 && "Select your ecosystem access level"}
            {step === 1 && "Step 1: Initialize Identity with Communication Protocol"}
            {step === 2 && "Step 2: Verify Authorization Token"}
            {step === 3 && "Step 3: Secure & Provision Ecosystem Profile"}
          </p>
        </div>

        <form className="space-y-8 relative z-10" onSubmit={e => e.preventDefault()}>
          
          {errorMsg && (
            <div className="bg-red-500/10 border geometric-border border-red-500 text-red-500 p-4 rounded-xl text-center font-mono text-xs uppercase tracking-widest font-bold">
              ERROR: {errorMsg}
            </div>
          )}
          
          {adminApplyError && (
            <div className="bg-red-500/10 border geometric-border border-red-500 text-red-500 p-4 rounded-xl text-center flex flex-col items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest font-bold">ERROR: {adminApplyError}</span>
              {showOnboardRedirect && (
                 <NavLink to="/support/company-onboarding">
                    <Button variant="outline" className="text-[10px] h-8 px-4 border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                      REQUEST COMPANY ONBOARDING
                    </Button>
                 </NavLink>
              )}
            </div>
          )}

          {step === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div 
                 onClick={() => { setAccountType('USER'); setStep(1); }}
                 className="cursor-pointer border geometric-border border-zinc-200 dark:border-zinc-800 p-8 rounded-2xl hover:border-[#FF7A00] transition-colors text-center group"
              >
                 <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-900 mx-auto rounded-full mb-4 flex items-center justify-center geometric-border border-zinc-200 dark:border-zinc-800 group-hover:bg-[#FF7A00]/10">
                    <span className="font-display font-bold text-xl group-hover:text-[#FF7A00]">01</span>
                 </div>
                 <h3 className="font-mono text-sm font-bold uppercase tracking-widest mb-2">INDIVIDUAL</h3>
                 <p className="font-sans text-xs text-zinc-500">Standard user account for professionals and developers.</p>
              </div>

              <div 
                 onClick={() => { setAccountType('ADMIN'); setStep(1); }}
                 className="cursor-pointer border geometric-border border-zinc-200 dark:border-zinc-800 p-8 rounded-2xl hover:border-[#FF7A00] transition-colors text-center group"
              >
                 <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-900 mx-auto rounded-full mb-4 flex items-center justify-center geometric-border border-zinc-200 dark:border-zinc-800 group-hover:bg-[#FF7A00]/10">
                    <span className="font-display font-bold text-xl group-hover:text-[#FF7A00]">02</span>
                 </div>
                 <h3 className="font-mono text-sm font-bold uppercase tracking-widest mb-2">CORPORATE ADMIN</h3>
                 <p className="font-sans text-xs text-zinc-500">Requires MCA backend verification & internal Director voting.</p>
              </div>
            </div>
          )}

          {step === 1 && (
            <>
              <FormInput 
                label="COMMUNICATION PROTOCOL (EMAIL)" 
                id="email" 
                type="email" 
                placeholder="SYSTEM.OP@DOMAIN.COM" 
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Button 
                variant="primary" 
                onClick={sendOtp}
                disabled={loading}
                className="w-full uppercase font-mono tracking-widest font-bold h-14 text-sm"
              >
                {loading ? "TRANSMITTING..." : "GENERATE OTP TOKEN"}
              </Button>
              <button onClick={() => setStep(0)} className="w-full text-center font-mono text-xs text-zinc-500 hover:text-black dark:hover:text-white uppercase tracking-widest">
                ← RETURN TO ENTITY SELECTION
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <FormInput 
                label="VERIFY OTP TOKEN" 
                id="otp" 
                type="text" 
                placeholder="000 000" 
                value={otp}
                onChange={e => setOtp(e.target.value)}
              />
              <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 text-center">
                Token transmitted to: {email}
              </p>
              <Button 
                variant="primary" 
                onClick={verifyOtp}
                disabled={loading}
                className="w-full uppercase font-mono tracking-widest font-bold h-14 text-sm"
              >
                {loading ? "VERIFYING..." : "CONFIRM OTP"}
              </Button>
            </>
          )}

          {step === 3 && (
            <>
              {accountType === 'ADMIN' && (
                <div className="p-4 border geometric-border border-[#FF7A00]/50 bg-[#FF7A00]/5 rounded-xl mb-6">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-widest mb-3 text-[#FF7A00]">MCA Verification Check</h3>
                  <FormInput 
                     label="CORPORATE IDENTIFICATION (CIN)" 
                     id="cin" 
                     placeholder="e.g. U72900KA2020PTC132001" 
                     value={cin}
                     onChange={e => setCin(e.target.value)}
                  />
                  <p className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 mt-2">
                    Directors will receive a cryptographic voting request immediately upon submission.
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput label="FIRST DESIGNATION" id="firstName" placeholder="JANE" value={firstName} onChange={e => setFirstName(e.target.value)} />
                <FormInput label="LAST DESIGNATION" id="lastName" placeholder="DOE" value={lastName} onChange={e => setLastName(e.target.value)} />
              </div>

              <FormInput label="SECURITY KEY (PASSWORD)" id="password" type="password" placeholder="••••••••••••" value={password} onChange={e => setPassword(e.target.value)} />

              {/* Digilocker Section */}
              <div className="pt-4 border-t geometric-border border-zinc-200 dark:border-zinc-800">
                <div className="mb-4">
                  <h3 className="font-mono text-sm font-bold uppercase tracking-widest mb-1">LEGAL IDENTITY (DIGILOCKER)</h3>
                  <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                    Government credential mapping required before biometrics.
                  </p>
                </div>
                
                <DigilockerVerification onVerify={() => setDigiVerified(true)} />
              </div>

              {/* Liveness Section */}
              <div className="pt-4 border-t geometric-border border-zinc-200 dark:border-zinc-800">
                <div className="mb-4">
                  <h3 className="font-mono text-sm font-bold uppercase tracking-widest mb-1">BIOMETRIC LIVENESS</h3>
                  <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                    {digiVerified 
                      ? "Verification required for trusted network access" 
                      : "LOCKED: MAP LEGAL IDENTITY TO UNLOCK SCANNER"}
                  </p>
                </div>
                
                {digiVerified ? (
                   <FaceVerification onVerify={() => setLivenessVerified(true)} />
                ) : (
                   <div className="w-full h-[240px] bg-zinc-200/50 dark:bg-zinc-900/50 geometric-border rounded-xl flex items-center justify-center border-dashed">
                      <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">SCANNER UNAUTHORIZED</p>
                   </div>
                )}
              </div>

              <Button 
                variant="primary" 
                onClick={submitApplication}
                className="w-full uppercase font-mono tracking-widest font-bold h-14 text-sm"
                disabled={!(livenessVerified && digiVerified && (accountType !== 'ADMIN' || cin.length > 5)) || loading}
              >
                {loading ? "PROCESSING..." : (livenessVerified && digiVerified) 
                  ? (accountType === 'ADMIN' ? "INITIATE DIRECTOR VOTE" : "PROVISION ACCOUNT") 
                  : "AWAITING CLEARANCE"}
              </Button>
            </>
          )}

          {step === 4 && (
             <div className="text-center py-12 space-y-6">
                <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full mx-auto flex items-center justify-center geometric-border border-green-500/50">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                   <h2 className="font-display font-black text-2xl mb-2">APPLICATION SUBMITTED</h2>
                   <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest leading-relaxed">
                      {successMsg} <br/>
                      Our cryptographic ledger will notify you upon Director consensus.
                   </p>
                </div>
             </div>
          )}

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
