import React from 'react';
import { Search, MapPin, Users, Globe, Building2 } from 'lucide-react';
import { Button } from '../components/shared/Button';

// Mock data
const MOCK_COMPANIES = [
  { id: 1, name: 'NEXUS CORP', industry: 'CYBERSECURITY', location: 'TOKYO, JP', employees: '500-1000', verified: true },
  { id: 2, name: 'HIREX_CORE', industry: 'HR TECH', location: 'SAN FRANCISCO, CA', employees: '50-200', verified: true },
  { id: 3, name: 'SILICON ROBOTICS', industry: 'AI HARDWARE', location: 'BERLIN, DE', employees: '1-50', verified: false },
  { id: 4, name: 'QUANTUM DATA', industry: 'DATA SCIENCE', location: 'LONDON, UK', employees: '1000+', verified: true },
];

export function CompaniesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0D0D0D] px-4 pt-32 pb-16">
      <div className="max-w-6xl mx-auto">
        
        <header className="mb-12 border-b geometric-border border-zinc-200 dark:border-zinc-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center space-x-4 mb-2">
              <div className="w-4 h-4 bg-black dark:bg-white rounded-sm" />
              <h1 className="font-display font-bold text-4xl tracking-tighter uppercase">COMPANIES</h1>
            </div>
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest pl-8">
              Discover and evaluate corporate entities
            </p>
          </div>
          
          <Button variant="primary" className="font-mono text-xs h-12">
            REGISTER ENTITY
          </Button>
        </header>

        {/* Action Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
           <div className="relative flex-1">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
             <input 
               type="text" 
               placeholder="SEARCH BY NAME OR ID..." 
               className="w-full h-12 pl-12 pr-4 bg-transparent geometric-border rounded-xl font-mono text-xs uppercase placeholder-zinc-400 focus:outline-none focus:border-[#FF7A00] transition-colors border-zinc-200 dark:border-zinc-800"
             />
           </div>
           
           <div className="flex space-x-2">
             <select className="h-12 px-4 bg-transparent geometric-border rounded-xl font-mono text-xs uppercase border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-[#FF7A00]">
                <option>ALL INDUSTRIES</option>
                <option>CYBERSECURITY</option>
                <option>HR TECH</option>
             </select>
             <select className="h-12 px-4 bg-transparent geometric-border rounded-xl font-mono text-xs uppercase border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-[#FF7A00]">
                <option>SORT: RELEVANCE</option>
                <option>SORT: SIZE</option>
             </select>
           </div>
        </div>

        {/* Company Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MOCK_COMPANIES.map(company => (
            <div key={company.id} className="group p-6 bg-transparent geometric-border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-[#FF7A00] transition-colors">
               <div className="flex justify-between items-start mb-6">
                 <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-900 rounded-xl flex items-center justify-center border geometric-border border-zinc-200 dark:border-zinc-800 group-hover:bg-[#FF7A00]/5 transition-colors">
                    <Building2 className="w-6 h-6 text-zinc-400 group-hover:text-[#FF7A00] transition-colors" />
                 </div>
                 {company.verified && (
                   <span className="inline-flex items-center space-x-1 border geometric-border border-green-500/30 text-green-500 bg-green-500/10 px-2 py-1 rounded-full font-mono text-[9px] uppercase tracking-widest font-bold">
                     <span>VERIFIED</span>
                   </span>
                 )}
               </div>
               
               <h3 className="font-display font-bold text-2xl uppercase mb-1">{company.name}</h3>
               <p className="font-mono text-xs text-[#FF7A00] uppercase tracking-widest mb-6 font-bold">{company.industry}</p>
               
               <div className="flex items-center space-x-6 font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-6 border-y geometric-border border-zinc-100 dark:border-zinc-900 py-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-3 h-3" />
                    <span>{company.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-3 h-3" />
                    <span>{company.employees}</span>
                  </div>
               </div>

               <div className="flex items-center justify-between">
                  <Button variant="outline" size="sm" className="font-mono text-xs">
                     FOLLOW
                  </Button>
                  <Button variant="ghost" size="sm" className="font-mono text-xs">
                     VIEW DATA
                  </Button>
               </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
