import React from 'react';
import { Search, Trophy, GameController, Home } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const { authState, logout } = useAuth();
  
  return (
    <nav className="bg-dark-800 border-b border-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <Trophy className="text-yellow-500 mr-2" size={24} />
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                MCTIERS
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-2">
              <a href="#" className="nav-link active">
                <Home size={18} className="inline-block mr-1" />
                Home
              </a>
              <a href="#" className="nav-link">
                <Trophy size={18} className="inline-block mr-1" />
                Rankings
              </a>
              <a href="#" className="nav-link">
                <GameController size={18} className="inline-block mr-1" />
                Discords
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search player..."
                className="w-64 px-4 py-2 pl-10 bg-dark-700 border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
            
            {authState.isAuthenticated && (
              <button 
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Logout Admin
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;