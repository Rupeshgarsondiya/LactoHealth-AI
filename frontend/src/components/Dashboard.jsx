import React, { useState } from 'react';

export default function LactoHealthDashboard() {
  const [showMilkForm, setShowMilkForm] = useState(false);
  const [showDiseaseForm, setShowDiseaseForm] = useState(false);
  const [milkFormData, setMilkFormData] = useState({});
  const [diseaseFormData, setDiseaseFormData] = useState({});

  // Dummy data
  const userData = {
    name: "John Farmer",
    totalCattle: 45,
    todaysMilkYield: 1247.5,
    averageYieldPerCattle: 27.7,
    mostCommonDisease: "Mastitis"
  };

  const milkPredictionData = {
    cowId: "COW-127",
    predictedYield: "28.5L",
    confidence: "94%",
    lastUpdate: "2 hours ago"
  };

  const diseasePredictionData = {
    cowId: "COW-089",
    riskLevel: "High",
    predictedDisease: "Mastitis",
    confidence: "87%",
    recommendation: "Immediate veterinary check recommended"
  };

  const handleMilkFormSubmit = (e) => {
    e.preventDefault();
    console.log('Milk prediction form submitted:', milkFormData);
    setShowMilkForm(false);
    setMilkFormData({});
  };

  const handleDiseaseFormSubmit = (e) => {
    e.preventDefault();
    console.log('Disease prediction form submitted:', diseaseFormData);
    setShowDiseaseForm(false);
    setDiseaseFormData({});
  };

  const StatCard = ({ title, value, subtitle, icon, bgColor }) => (
    <div className={`${bgColor} rounded-xl p-6 shadow-lg border border-opacity-20`}>
      <div className="flex items-center justify-between mb-4">
        <div className="text-3xl">{icon}</div>
      </div>
      <h3 className="text-2xl font-bold text-[#212121] mb-1">{value}</h3>
      <p className="text-[#212121]/70 font-medium">{title}</p>
      {subtitle && <p className="text-[#212121]/50 text-sm mt-1">{subtitle}</p>}
    </div>
  );

  if (showMilkForm) {
    return (
      <div className="min-h-screen bg-[#FAFAFA]">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-[#FFF8E1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
             <div className="flex items-center space-x-3">
                            <img
                                src="/Gemini_Generated_Image_k2hj1xk2hj1xk2hj.png"
                                alt="LactoHealth Logo"
                                className="w-12 h-12 rounded-full bg-white border-2 border-[#7CB342] object-contain"
                            />
                            <span className="text-2xl font-bold text-[#212121]">LactoHealth AI</span>
                        </div>
              <button 
                onClick={() => setShowMilkForm(false)}
                className="w-10 h-10 bg-[#FFF8E1] rounded-full flex items-center justify-center hover:bg-[#7CB342]/10 transition-colors"
              >
                <span className="text-xl">👤</span>
              </button>
            </div>
          </div>
        </header>

        {/* Milk Prediction Form */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-[#FFF8E1]">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-[#212121]">🥛 Milk Yield Prediction</h2>
              <button
                onClick={() => setShowMilkForm(false)}
                className="text-[#212121]/60 hover:text-[#B71C1C] transition-colors text-2xl"
              >
                ✕
              </button>
            </div>
            
            <form onSubmit={handleMilkFormSubmit} className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Cow ID</label>
                <input
                  type="text"
                  className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none"
                  placeholder="e.g., COW-127"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Breed</label>
                <select className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none">
                  <option>Holstein</option>
                  <option>Jersey</option>
                  <option>Guernsey</option>
                  <option>Ayrshire</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Age (Years)</label>
                <input
                  type="number"
                  className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none"
                  placeholder="e.g., 4"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Lactation Stage</label>
                <select className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none">
                  <option>Early</option>
                  <option>Mid</option>
                  <option>Late</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Days in Milk</label>
                <input
                  type="number"
                  className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none"
                  placeholder="e.g., 120"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Feed Intake (kg)</label>
                <input
                  type="number"
                  step="0.1"
                  className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none"
                  placeholder="e.g., 24.5"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Water Intake (L)</label>
                <input
                  type="number"
                  className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none"
                  placeholder="e.g., 85"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Body Weight (kg)</label>
                <input
                  type="number"
                  className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none"
                  placeholder="e.g., 650"
                />
              </div>

              <div className="md:col-span-2 flex gap-4 mt-6">
                <button
                  type="submit"
                  className="bg-[#7CB342] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#7CB342]/90 transition-colors"
                >
                  🔮 Predict Milk Yield
                </button>
                <button
                  type="button"
                  onClick={() => setShowMilkForm(false)}
                  className="border-2 border-[#5D4037] text-[#5D4037] px-8 py-3 rounded-lg font-semibold hover:bg-[#5D4037] hover:text-white transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (showDiseaseForm) {
    return (
      <div className="min-h-screen bg-[#FAFAFA]">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-[#FFF8E1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
             <div className="flex items-center space-x-3">
                            <img
                                src="/Gemini_Generated_Image_k2hj1xk2hj1xk2hj.png"
                                alt="LactoHealth Logo"
                                className="w-12 h-12 rounded-full bg-white border-2 border-[#7CB342] object-contain"
                            />
                            <span className="text-2xl font-bold text-[#212121]">LactoHealth AI</span>
                        </div>
              <button 
                onClick={() => setShowDiseaseForm(false)}
                className="w-10 h-10 bg-[#FFF8E1] rounded-full flex items-center justify-center hover:bg-[#7CB342]/10 transition-colors"
              >
                <span className="text-xl">👤</span>
              </button>
            </div>
          </div>
        </header>

        {/* Disease Prediction Form */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-[#FFF8E1]">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-[#212121]">🔍 Disease Risk Assessment</h2>
              <button
                onClick={() => setShowDiseaseForm(false)}
                className="text-[#212121]/60 hover:text-[#B71C1C] transition-colors text-2xl"
              >
                ✕
              </button>
            </div>
            
            <form onSubmit={handleDiseaseFormSubmit} className="grid md:grid-cols-3 gap-6">
              {/* Basic Information */}
              <div className="md:col-span-3 mb-4">
                <h3 className="text-xl font-bold text-[#212121] mb-4 border-b border-[#FFF8E1] pb-2">📋 Basic Information</h3>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Cow ID</label>
                <input type="text" className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none" placeholder="e.g., COW-089" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Breed</label>
                <select className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none">
                  <option>Holstein</option>
                  <option>Jersey</option>
                  <option>Guernsey</option>
                  <option>Ayrshire</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Age (Years)</label>
                <input type="number" className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none" placeholder="e.g., 5" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Parity</label>
                <input type="number" className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none" placeholder="e.g., 3" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Lactation Stage</label>
                <select className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none">
                  <option>Early</option>
                  <option>Mid</option>
                  <option>Late</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Days in Milk</label>
                <input type="number" className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none" placeholder="e.g., 180" />
              </div>

              {/* Nutrition & Feed */}
              <div className="md:col-span-3 mt-6 mb-4">
                <h3 className="text-xl font-bold text-[#212121] mb-4 border-b border-[#FFF8E1] pb-2">🌾 Nutrition & Feed</h3>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Feed Intake (kg)</label>
                <input type="number" step="0.1" className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none" placeholder="e.g., 23.5" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Water Intake (L)</label>
                <input type="number" className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none" placeholder="e.g., 90" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Dry Matter Intake (kg)</label>
                <input type="number" step="0.1" className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none" placeholder="e.g., 22.0" />
              </div>

              {/* Behavior & Activity */}
              <div className="md:col-span-3 mt-6 mb-4">
                <h3 className="text-xl font-bold text-[#212121] mb-4 border-b border-[#FFF8E1] pb-2">🚶 Behavior & Activity</h3>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Rumination Time (min)</label>
                <input type="number" className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none" placeholder="e.g., 480" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Lying Time (hr)</label>
                <input type="number" step="0.1" className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none" placeholder="e.g., 12.5" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Standing Time (hr)</label>
                <input type="number" step="0.1" className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none" placeholder="e.g., 10.2" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Steps Count</label>
                <input type="number" className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none" placeholder="e.g., 3500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Activity Level</label>
                <select className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none">
                  <option>Low</option>
                  <option>Moderate</option>
                  <option>High</option>
                </select>
              </div>

              {/* Health Metrics */}
              <div className="md:col-span-3 mt-6 mb-4">
                <h3 className="text-xl font-bold text-[#212121] mb-4 border-b border-[#FFF8E1] pb-2">❤️ Health Metrics</h3>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Body Temperature (°C)</label>
                <input type="number" step="0.1" className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none" placeholder="e.g., 38.5" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Heart Rate (bpm)</label>
                <input type="number" className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none" placeholder="e.g., 65" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Respiration Rate</label>
                <input type="number" className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none" placeholder="e.g., 25" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Body Weight (kg)</label>
                <input type="number" className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none" placeholder="e.g., 625" />
              </div>

              {/* Environmental Factors */}
              <div className="md:col-span-3 mt-6 mb-4">
                <h3 className="text-xl font-bold text-[#212121] mb-4 border-b border-[#FFF8E1] pb-2">🌡️ Environmental Factors</h3>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Environment Temp (°C)</label>
                <input type="number" step="0.1" className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none" placeholder="e.g., 28.5" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Humidity (%)</label>
                <input type="number" className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none" placeholder="e.g., 75" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">THI Index</label>
                <input type="number" step="0.1" className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none" placeholder="e.g., 72.5" />
              </div>

              {/* Milk Quality */}
              <div className="md:col-span-3 mt-6 mb-4">
                <h3 className="text-xl font-bold text-[#212121] mb-4 border-b border-[#FFF8E1] pb-2">🥛 Milk Quality</h3>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Milking Frequency</label>
                <input type="number" className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none" placeholder="e.g., 2" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Milk Fat (%)</label>
                <input type="number" step="0.01" className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none" placeholder="e.g., 3.75" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Milk Protein (%)</label>
                <input type="number" step="0.01" className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none" placeholder="e.g., 3.25" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Milk Lactose (%)</label>
                <input type="number" step="0.01" className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none" placeholder="e.g., 4.85" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Somatic Cell Count</label>
                <input type="number" className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none" placeholder="e.g., 150000" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#212121] mb-2">Conductivity (mS/cm)</label>
                <input type="number" step="0.01" className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none" placeholder="e.g., 4.25" />
              </div>

              <div className="md:col-span-3 flex gap-4 mt-8">
                <button
                  type="submit"
                  className="bg-[#7CB342] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#7CB342]/90 transition-colors"
                >
                  🔍 Assess Disease Risk
                </button>
                <button
                  type="button"
                  onClick={() => setShowDiseaseForm(false)}
                  className="border-2 border-[#5D4037] text-[#5D4037] px-8 py-3 rounded-lg font-semibold hover:bg-[#5D4037] hover:text-white transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-[#FFF8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
                            <img
                                src="/Gemini_Generated_Image_k2hj1xk2hj1xk2hj.png"
                                alt="LactoHealth Logo"
                                className="w-12 h-12 rounded-full bg-white border-2 border-[#7CB342] object-contain"
                            />
                            <span className="text-2xl font-bold text-[#212121]">LactoHealth AI</span>
                        </div>
            <div className="w-10 h-10 bg-[#FFF8E1] rounded-full flex items-center justify-center hover:bg-[#7CB342]/10 transition-colors cursor-pointer">
              <span className="text-xl">👤</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Message */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#212121] mb-2">
            Welcome back, {userData.name}! 👋
          </h1>
          <p className="text-xl text-[#212121]/70">Here's what's happening on your farm today</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Cattle Count"
            value={userData.totalCattle}
            icon="🐄"
            bgColor="bg-[#FFF8E1]"
          />
          <StatCard
            title="Today's Total Milk Yield"
            value={`${userData.todaysMilkYield}L`}
            icon="🥛"
            bgColor="bg-[#1976D2]/5"
          />
          <StatCard
            title="Average Yield per Cattle"
            value={`${userData.averageYieldPerCattle}L`}
            subtitle="per day"
            icon="📊"
            bgColor="bg-[#7CB342]/5"
          />
          <StatCard
            title="Most Common Disease"
            value={userData.mostCommonDisease}
            subtitle="3 cases detected"
            icon="⚠️"
            bgColor="bg-[#B71C1C]/5"
          />
        </div>

        {/* Prediction Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Milk Yield Prediction Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-[#FFF8E1]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#212121] flex items-center">
                <span className="mr-3 text-3xl">🥛</span>
                Milk Yield Prediction
              </h2>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center p-4 bg-[#1976D2]/5 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-[#212121]/70">Cow ID</p>
                  <p className="text-lg font-bold text-[#212121]">{milkPredictionData.cowId}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-[#212121]/70">Predicted Yield</p>
                  <p className="text-2xl font-bold text-[#1976D2]">{milkPredictionData.predictedYield}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-[#7CB342]/5 rounded-lg">
                  <p className="text-sm font-medium text-[#212121]/70">Confidence</p>
                  <p className="text-lg font-bold text-[#7CB342]">{milkPredictionData.confidence}</p>
                </div>
                <div className="p-3 bg-[#FBC02D]/5 rounded-lg">
                  <p className="text-sm font-medium text-[#212121]/70">Last Update</p>
                  <p className="text-sm font-medium text-[#212121]">{milkPredictionData.lastUpdate}</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowMilkForm(true)}
              className="w-full bg-[#7CB342] text-white py-3 rounded-lg font-semibold hover:bg-[#7CB342]/90 transition-colors flex items-center justify-center"
            >
              <span className="mr-2">📝</span>
              Enter Data for Prediction
            </button>
          </div>

          {/* Disease Prediction Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-[#FFF8E1]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#212121] flex items-center">
                <span className="mr-3 text-3xl">🔍</span>
                Disease Risk Assessment
              </h2>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center p-4 bg-[#B71C1C]/5 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-[#212121]/70">Cow ID</p>
                  <p className="text-lg font-bold text-[#212121]">{diseasePredictionData.cowId}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-[#212121]/70">Risk Level</p>
                  <p className="text-2xl font-bold text-[#B71C1C]">{diseasePredictionData.riskLevel}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="p-3 bg-[#FBC02D]/5 rounded-lg">
                  <p className="text-sm font-medium text-[#212121]/70">Predicted Disease</p>
                  <p className="text-lg font-bold text-[#212121]">{diseasePredictionData.predictedDisease}</p>
                </div>
                <div className="p-3 bg-[#7CB342]/5 rounded-lg">
                  <p className="text-sm font-medium text-[#212121]/70">Confidence</p>
                  <p className="text-lg font-bold text-[#7CB342]">{diseasePredictionData.confidence}</p>
                </div>
              </div>
              
              <div className="p-4 bg-[#FFF8E1] rounded-lg border border-[#FBC02D]/20">
                <p className="text-sm font-medium text-[#212121]/70 mb-1">Recommendation</p>
                <p className="text-sm text-[#212121]">{diseasePredictionData.recommendation}</p>
              </div>
            </div>

            <button
              onClick={() => setShowDiseaseForm(true)}
              className="w-full bg-[#B71C1C] text-white py-3 rounded-lg font-semibold hover:bg-[#B71C1C]/90 transition-colors flex items-center justify-center"
            >
              <span className="mr-2">🩺</span>
              Enter Data for Assessment
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}