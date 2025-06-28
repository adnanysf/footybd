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
      const winner = Math.random() > 0.5 ? selectedTeam1 : selectedTeam2;
      setPrediction(`Predicted winner: ${winner}`);
    } else {
      setPrediction("Please select two different teams");
    }
  };

  return (
    <div style={{height:"200vh"}} className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex flex-col items-center ">
      {/* Header with glassmorphism effect */}
      <div className="backdrop-blur-sm bg-white/10 border-b border-white/20 w-full flex items-center justify-center">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-5xl font-bold text-center text-white mb-2 w-full">
            FootyBD
          </h1>
          <p className="text-center text-blue-200 text-lg">
            Your Ultimate BPL Dashboard
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{border:"10px solid red"}} className="container mx-auto px-6 py-12 w-full h-full flex flex-col items-center">
        <div style={{border:"10px solid black"}} className="flex flex-row gap-8 mb-16 w-full h-1/2">
          {/* Left Side - Tables */}
          <div className="w-1/2 space-y-8">
            {/* League Table */}
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <h2 className="text-2xl font-bold text-white">League Table</h2>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30">
                <p className="text-purple-200 text-center">League table data will go here...</p>
              </div>
            </div>

            {/* Top Scorers */}
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <h2 className="text-2xl font-bold text-white">Top Scorers</h2>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
                <p className="text-blue-200 text-center">Top scorers data will go here...</p>
              </div>
            </div>

            {/* Upcoming Matches */}
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <h2 className="text-2xl font-bold text-white">Upcoming Matches</h2>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-orange-500/30">
                <p className="text-orange-200 text-center">Upcoming matches data will go here...</p>
              </div>
            </div>
          </div>

          {/* Right Side - Match Predictor */}
          <div className="w-full">
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl top-8 transition-all duration-300">
              <div className="flex items-center justify-center mb-8">
                <h2 className="text-2xl font-bold text-white">Match Predictor</h2>
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
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full shadow-lg">
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
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-500 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
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
        <div className="flex gap-8 w-full justify-center items-center">
          <div className="w-1/2">
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center mb-8">
                <h2 className="text-2xl font-bold text-white">Search Players & Teams</h2>
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


        </div>
      </div>
    </div>
  );
}
