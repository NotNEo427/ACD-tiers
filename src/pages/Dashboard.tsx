import React, { useState } from 'react';
import { Trophy, Swords, Box, Heart, FlaskRound as Flask, Flame, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';
import TierList from '../components/TierList';
import { GAME_MODE_FILTERS, KITS } from '../constants';
import KitIcon from '../components/KitIcon';
import { Kit } from '../types';
import { cn } from '../utils/cn';

const ICONS = {
  Trophy,
  Swords,
  Box,
  Heart,
  Flask,
  Flame,
  Globe
};

const Dashboard: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState('overall');
  const [selectedKit, setSelectedKit] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0B0E13] text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex overflow-x-auto gap-4 pb-4">
            {GAME_MODE_FILTERS.map((mode) => {
              const Icon = ICONS[mode.icon as keyof typeof ICONS];
              return (
                <button
                  key={mode.id}
                  onClick={() => setSelectedMode(mode.id)}
                  className={cn(
                    "flex flex-col items-center min-w-[100px] p-4 rounded-lg transition-colors",
                    selectedMode === mode.id
                      ? "bg-gray-700 text-white"
                      : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
                  )}
                >
                  <Icon className="mb-2" size={24} />
                  <span className="text-sm font-medium">{mode.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4 mb-8">
          {KITS.map((kit) => (
            <button
              key={kit.id}
              onClick={() => setSelectedKit(kit.id)}
              className={cn(
                "kit-icon transition-colors",
                selectedKit === kit.id
                  ? "bg-gray-700 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
              )}
            >
              <KitIcon kit={kit.id as Kit} size={32} />
              <h3 className="mt-2 text-sm text-center">{kit.name}</h3>
            </button>
          ))}
        </div>
        
        <TierList selectedMode={selectedMode} selectedKit={selectedKit} />
      </main>
    </div>
  );
};

export default Dashboard;