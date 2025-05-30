import React from 'react';
import Navbar from '../components/Navbar';
import TierList from '../components/TierList';
import { KITS } from '../constants';
import KitIcon from '../components/KitIcon';
import { Kit } from '../types';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0E13] text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4 mb-8">
          {KITS.map((kit) => (
            <div key={kit.id} className="kit-icon">
              <KitIcon kit={kit.id as Kit} size={32} />
              <h3 className="mt-2 text-sm text-center text-gray-300">{kit.name}</h3>
            </div>
          ))}
        </div>
        
        <TierList />
      </main>
    </div>
  );
};

export default Dashboard;