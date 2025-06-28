'use client';
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selectedTeam1, setSelectedTeam1] = useState("");
  const [selectedTeam2, setSelectedTeam2] = useState("");
  const [prediction, setPrediction] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const teams = ["Arsenal", "Chelsea", "Liverpool", "Manchester City", "Manchester United", "Tottenham"];

  const handlePredict = () => {
    if (selectedTeam1 && selectedTeam2 && selectedTeam1 !== selectedTeam2) {
      // Simple random prediction for demo
      const winner = Math.random() > 0.5 ? selectedTeam1 : selectedTeam2;
      setPrediction(`Predicted winner: ${winner}`);
    } else {
      setPrediction("Please select two different teams");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header with glassmorphism effect */}
      <div className="backdrop-blur-sm bg-white/10 border-b border-white/20">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-5xl font-bold text-center text-white mb-2">
            FootyBD
          </h1>
          <p className="text-center text-purple-200 text-lg">
            Your Ultimate Football Dashboard
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-row gap-8 mb-16">
          {/* Left Side - Tables */}
          <div className="w-1/2 space-y-8">
            {/* League Table */}
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mr-4"></div>
                <h2 className="text-2xl font-bold text-white">League Table</h2>
                <div className="w-12 h-1 bg-gradient-to-r from-pink-400 to-purple-400 ml-4"></div>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30">
                <p className="text-purple-200 text-center">League table data will go here...</p>
              </div>
            </div>

            {/* Top Scorers */}
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-blue-400 mr-4"></div>
                <h2 className="text-2xl font-bold text-white">Top Scorers</h2>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-green-400 ml-4"></div>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
                <p className="text-blue-200 text-center">Top scorers data will go here...</p>
              </div>
            </div>

            {/* Upcoming Matches */}
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-red-400 mr-4"></div>
                <h2 className="text-2xl font-bold text-white">Upcoming Matches</h2>
                <div className="w-12 h-1 bg-gradient-to-r from-red-400 to-orange-400 ml-4"></div>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-orange-500/30">
                <p className="text-orange-200 text-center">Upcoming matches data will go here...</p>
              </div>
            </div>
          </div>

          {/* Right Side - Match Predictor */}
          <div className="w-1/2">
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl sticky top-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center mb-8">
                <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mr-4"></div>
                <h2 className="text-2xl font-bold text-white">Match Predictor</h2>
                <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 ml-4"></div>
              </div>
              
              {/* Team Selection */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-purple-200">Select Team 1:</label>
                  <select 
                    value={selectedTeam1} 
                    onChange={(e) => setSelectedTeam1(e.target.value)}
                    className="w-full p-4 bg-black/30 backdrop-blur-sm border border-purple-500/50 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="" className="bg-slate-800">Choose a team...</option>
                    {teams.map(team => (
                      <option key={team} value={team} className="bg-slate-800">{team}</option>
                    ))}
                  </select>
                </div>

                <div className="text-center py-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg">
                    <span className="text-white font-bold text-xl">VS</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 text-purple-200">Select Team 2:</label>
                  <select 
                    value={selectedTeam2} 
                    onChange={(e) => setSelectedTeam2(e.target.value)}
                    className="w-full p-4 bg-black/30 backdrop-blur-sm border border-purple-500/50 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="" className="bg-slate-800">Choose a team...</option>
                    {teams.map(team => (
                      <option key={team} value={team} className="bg-slate-800">{team}</option>
                    ))}
                  </select>
                </div>

                <button 
                  onClick={handlePredict}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                >
                  🔮 Predict Winner
                </button>

                {prediction && (
                  <div className="mt-6 p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/50 rounded-xl">
                    <p className="text-green-300 font-semibold text-center text-lg">{prediction}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="flex gap-8">
          {/* Right Side - Search Interface */}
          <div className="w-1/2">
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center mb-8">
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mr-4"></div>
                <h2 className="text-2xl font-bold text-white">Search Players & Teams</h2>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 ml-4"></div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-cyan-200">Search for a player or team:</label>
                  <input 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter player name or team name..."
                    className="w-full p-4 bg-black/30 backdrop-blur-sm border border-cyan-500/50 rounded-xl text-white placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <button 
                  onClick={() => {/* Handle search */}}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-cyan-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                >
                  🔍 Search
                </button>
              </div>
            </div>
          </div>

          {/* Left Side - Search Results/Table View */}
          <div className="w-1/2">
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center mb-8">
                <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mr-4"></div>
                <h2 className="text-2xl font-bold text-white">Search Results</h2>
                <div className="w-12 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 ml-4"></div>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-8 rounded-xl border border-emerald-500/30 min-h-[200px] flex items-center justify-center">
                {searchQuery ? (
                  <p className="text-emerald-200 text-center text-lg">Search results for "<span className="font-semibold text-emerald-300">{searchQuery}</span>" will appear here...</p>
                ) : (
                  <p className="text-emerald-200 text-center text-lg">Enter a search query to see results...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
