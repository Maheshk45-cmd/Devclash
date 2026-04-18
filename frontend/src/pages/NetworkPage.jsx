import React, { useState } from 'react';
import { Search, SlidersHorizontal, UserPlus, Check, X } from 'lucide-react';
import { Button } from '../components/shared/Button';

// Mock data due to missing GET endpoints in backend
const MOCK_CONNECTIONS = [
  { id: 1, name: 'ALEX CHEN', role: 'SYS_ADMIN', company: 'NEXUS CORP', status: 'ONLINE', avatar: 'AC' },
  { id: 2, name: 'SARAH JENKINS', role: 'LEAD_DEV', company: 'HIREX_CORE', status: 'OFFLINE', avatar: 'SJ' },
  { id: 3, name: 'MICHAEL WANG', role: 'PRODUCT_OP', company: 'GLOBAL_NET', status: 'ONLINE', avatar: 'MW' },
];

const MOCK_REQUESTS = [
  { id: 11, name: 'DAVID ROTH', role: 'SECURITY', company: 'CYBER_SEC', message: 'Requesting access to your professional network node.' }
];

export function NetworkPage() {
  const [activeTab, setActiveTab] = useState('CONNECTIONS');

  return (
    <main className="min-h-screen bg-white dark:bg-[#0D0D0D] px-4 pt-32 pb-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Header */}
        <header className="mb-12 border-b geometric-border border-zinc-200 dark:border-zinc-800 pb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="flex items-center space-x-4 mb-2">
              <div className="w-4 h-4 bg-[#FF7A00] rounded-sm" />
              <h1 className="font-display font-bold text-4xl tracking-tighter uppercase">NETWORK INTERFACE</h1>
            </div>
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest pl-8">
              Manage your connected nodes and peer relationships
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 font-mono text-right md:border-l geometric-border border-zinc-200 dark:border-zinc-800 md:pl-6">
             <div>
               <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">TOTAL_NODES</p>
               <p className="text-2xl font-bold">{MOCK_CONNECTIONS.length}</p>
             </div>
             <div>
               <p className="text-[10px] text-[#FF7A00] uppercase tracking-widest mb-1">PENDING_REQ</p>
               <p className="text-2xl font-bold">{MOCK_REQUESTS.length}</p>
             </div>
          </div>
        </header>

        {/* Tab Navigation */}
        <div className="flex space-x-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {['CONNECTIONS', 'REQUESTS', 'FOLLOWING', 'FOLLOWERS'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-colors geometric-border whitespace-nowrap
                ${activeTab === tab 
                  ? 'bg-black text-white dark:bg-white dark:text-black border-transparent' 
                  : 'bg-transparent text-zinc-500 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex space-x-2 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input 
              type="text" 
              placeholder="QUERY NODE DIRECTORY..." 
              className="w-full h-12 pl-12 pr-4 bg-transparent geometric-border rounded-xl font-mono text-xs uppercase placeholder-zinc-400 focus:outline-none focus:border-[#FF7A00] transition-colors border-zinc-200 dark:border-zinc-800"
            />
          </div>
          <Button variant="outline" className="w-12 px-0 rounded-xl">
             <SlidersHorizontal className="w-4 h-4" />
          </Button>
        </div>

        {/* Content Area */}
        {activeTab === 'CONNECTIONS' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MOCK_CONNECTIONS.map(conn => (
              <div key={conn.id} className="bg-zinc-50 dark:bg-[#151515] p-5 rounded-2xl geometric-border border-zinc-200 dark:border-zinc-800 hover:border-[#FF7A00] transition-colors group">
                 <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-display font-medium">
                      {conn.avatar}
                    </div>
                    <div className={`w-2 h-2 rounded-full ${conn.status === 'ONLINE' ? 'bg-green-500' : 'bg-zinc-400'}`} />
                 </div>
                 <h3 className="font-display font-bold text-lg leading-tight uppercase">{conn.name}</h3>
                 <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-4">
                   {conn.role} // {conn.company}
                 </p>
                 <div className="flex space-x-2 w-full">
                    <Button variant="outline" size="sm" className="flex-1 text-[10px]">MESSAGE</Button>
                 </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'REQUESTS' && (
           <div className="space-y-4 max-w-3xl">
             {MOCK_REQUESTS.map(req => (
               <div key={req.id} className="flex flex-col sm:flex-row items-center justify-between p-4 bg-zinc-50 dark:bg-[#151515] rounded-xl geometric-border border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center space-x-4 mb-4 sm:mb-0 w-full sm:w-auto">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF7A00]/20 text-[#FF7A00] flex items-center justify-center font-display font-bold">
                      {req.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-mono text-sm font-bold uppercase tracking-wider">{req.name}</h3>
                      <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">{req.role} @ {req.company}</p>
                      <p className="font-sans text-sm text-zinc-600 dark:text-zinc-400 mt-1">"{req.message}"</p>
                    </div>
                  </div>
                  <div className="flex space-x-2 w-full sm:w-auto">
                    <Button variant="outline" className="w-12 h-12 p-0 flex items-center justify-center rounded-xl border-zinc-200 dark:border-zinc-800 hover:text-red-500 hover:border-red-500 group">
                      <X className="w-4 h-4 cursor-pointer" />
                    </Button>
                    <Button variant="primary" className="h-12 px-6 rounded-xl font-mono text-xs">
                      AUTHORIZE
                    </Button>
                  </div>
               </div>
             ))}
           </div>
        )}

      </div>
    </main>
  );
}
