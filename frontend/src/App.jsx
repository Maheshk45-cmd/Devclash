import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { NetworkPage } from './pages/NetworkPage';
import { CompaniesPage } from './pages/CompaniesPage';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-[#0D0D0D] text-black dark:text-white font-sans antialiased selection:bg-[#FF7A00] selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/network" element={<NetworkPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          {/* Phase 1/2 placeholders */}
          <Route path="*" element={<div className="pt-32 px-4 text-center font-mono">Page not found (Routing Placeholder)</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}



export default App;
