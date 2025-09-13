import React, { useState, useEffect } from 'react';
export default function LactoHealthLanding() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const keyBenefits = [
        {
            icon: "❤️",
            title: "Improved Herd Health",
            description: "AI-powered systems proactively detect and facilitate early diagnosis of mastitis, ketosis, and feed deficiencies with critical health alerts."
        },
        {
            icon: "⏰",
            title: "Reduced Farm Labor",
            description: "Management tools enhance automated processes and decrease manual labor. Accurate detection replaces observations and automates milking processes."
        },
        {
            icon: "📈",
            title: "Increased Profitability",
            description: "Results include boosting herd fertility, improving health, optimizing milking processes, increasing milk solids, and better herd planning."
        },
        {
            icon: "🎯",
            title: "Higher Pregnancy Rate",
            description: "Cow monitoring tools provide timely and accurate heat detection for improving herd fertility and optimized lactation intervals."
        }
    ];

    const features = [
        {
            title: "Milk Yield Prediction",
            description: "Accurate per-animal daily estimates using advanced AI models",
            icon: "📊"
        },
        {
            title: "Health & Disease Alerts",
            description: "Early detection of mastitis, digestive issues, and stress indicators",
            icon: "🛡️"
        },
        {
            title: "Animal Insights Dashboard",
            description: "Detailed profiles with trends, risk status, and actionable recommendations",
            icon: "🧠"
        },
        {
            title: "Farm Management System",
            description: "Comprehensive overview of herd performance and feed utilization",
            icon: "💾"
        },
        {
            title: "Data Export & Reports",
            description: "Download daily, weekly, or monthly farm reports for strategic planning",
            icon: "📄"
        },
        {
            title: "Easy Data Integration",
            description: "Manual entry, CSV upload, or IoT sensor integration capabilities",
            icon: "📤"
        }
    ];

    const workflowSteps = [
        { number: "01", title: "Data Collection", desc: "Upload animal and feed data or connect IoT sensors" },
        { number: "02", title: "AI Analysis", desc: "Advanced algorithms predict milk yield and identify health risks" },
        { number: "03", title: "Real-time Monitoring", desc: "View insights and receive instant alerts on your dashboard" },
        { number: "04", title: "Action & Optimization", desc: "Export reports and implement data-driven farm improvements" }
    ];

    return (
        <div className="min-h-screen bg-[#FAFAFA]">
            {/* Header */}
            <header className="bg-[#FAFAFA] shadow-sm sticky top-0 z-50 border-b border-[#FFF8E1]">
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

                        <nav className="hidden md:flex items-center space-x-8">
                            <a href="#solutions" className="text-[#212121] hover:text-[#7CB342] font-medium">Solutions</a>
                            <a href="#technology" className="text-[#212121] hover:text-[#7CB342] font-medium">Technology</a>
                            <a href="#about" className="text-[#212121] hover:text-[#7CB342] font-medium">About</a>
                            <a href="#contact" className="text-[#212121] hover:text-[#7CB342] font-medium">Contact</a>
                            <button className="bg-[#7CB342] text-white px-6 py-2 rounded-lg hover:bg-[#7CB342]/90 font-medium">
                                Get Demo
                            </button>
                        </nav>
                    </div>
                </div>
            </header>


            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#FFF8E1] to-[#FAFAFA] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <h1 className="text-5xl lg:text-6xl font-bold text-[#212121] leading-tight mb-6">
                                Automating
                                <span className="block text-[#7CB342]">Dairy Farms</span>
                            </h1>
                            <p className="text-xl text-[#212121]/70 mb-8 leading-relaxed">
                                AI-powered cattle monitoring and milk prediction technology for modern dairy farm management.
                                Optimize productivity with data-driven insights.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-[#7CB342] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#7CB342]/90 transition-colors flex items-center justify-center">
                                    Try Demo
                                    <span className="ml-2">▶️</span>
                                </button>
                                <button className="border-2 border-[#5D4037] text-[#5D4037] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#5D4037] hover:text-white transition-colors">
                                    Upload Data
                                </button>
                            </div>
                        </div>
                        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <div className="relative">
                                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-[#FFF8E1]">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-xl font-bold text-[#212121]">🐄 Farm Dashboard</h3>
                                        <div className="flex space-x-2">
                                            <div className="w-3 h-3 bg-[#B71C1C] rounded-full"></div>
                                            <div className="w-3 h-3 bg-[#FBC02D] rounded-full"></div>
                                            <div className="w-3 h-3 bg-[#7CB342] rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-4 bg-[#1976D2]/10 rounded-lg border border-[#1976D2]/20">
                                            <div className="flex items-center space-x-3">
                                                <span className="text-2xl">🥛</span>
                                                <span className="text-sm text-[#212121]/80 font-medium">Total Milk Today</span>
                                            </div>
                                            <span className="font-bold text-[#1976D2] text-xl">1,247L</span>
                                        </div>
                                        <div className="flex items-center justify-between p-4 bg-[#7CB342]/10 rounded-lg border border-[#7CB342]/20">
                                            <div className="flex items-center space-x-3">
                                                <span className="text-2xl">✅</span>
                                                <span className="text-sm text-[#212121]/80 font-medium">Healthy Animals</span>
                                            </div>
                                            <span className="font-bold text-[#7CB342] text-xl">42/45</span>
                                        </div>
                                        <div className="flex items-center justify-between p-4 bg-[#B71C1C]/10 rounded-lg border border-[#B71C1C]/20">
                                            <div className="flex items-center space-x-3">
                                                <span className="text-2xl">⚠️</span>
                                                <span className="text-sm text-[#212121]/80 font-medium">Health Alerts</span>
                                            </div>
                                            <span className="font-bold text-[#B71C1C] text-xl">3</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 p-3 bg-[#FFF8E1] rounded-lg">
                                        <div className="text-sm text-[#212121]/70 space-y-1">
                                            <div className="flex items-center space-x-2">
                                                <span className="w-2 h-2 bg-[#B71C1C] rounded-full"></span>
                                                <span>Cow #089 - Health Check Required</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <span className="w-2 h-2 bg-[#FBC02D] rounded-full"></span>
                                                <span>Cow #127 - Feed Adjustment Needed</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#7CB342] to-[#1976D2] text-white px-4 py-2 rounded-lg text-sm font-medium">
                                    🔴 Live AI Monitoring
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Benefits Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#212121] mb-4">Reasons to Choose LactoHealth AI</h2>
                        <p className="text-xl text-[#212121]/70">Advanced technology delivering measurable results for modern dairy farms</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {keyBenefits.map((benefit, idx) => (
                            <div key={idx} className="bg-[#FFF8E1] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-[#FBC02D]/20">
                                <div className="mb-6 text-6xl group-hover:scale-110 transition-transform">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#212121] mb-4">{benefit.title}</h3>
                                <p className="text-[#212121]/70 leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Features */}
            <section id="technology" className="py-20 bg-[#FAFAFA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#212121] mb-4">Advanced Management System</h2>
                        <p className="text-xl text-[#212121]/70 max-w-3xl mx-auto">
                            The most advanced, user-friendly dairy farm management software with AI-powered capabilities and real-time monitoring.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <div key={idx} className="group hover:bg-white p-6 rounded-xl transition-all duration-300 border border-transparent hover:border-[#7CB342]/20 hover:shadow-lg">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-[#212121] mb-3">{feature.title}</h3>
                                <p className="text-[#212121]/70">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#212121] mb-4">How It Works</h2>
                        <p className="text-xl text-[#212121]/70">Simple, efficient workflow for maximum farm productivity</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {workflowSteps.map((step, idx) => (
                            <div key={idx} className="text-center">
                                <div className="relative">
                                    <div className="w-24 h-24 bg-[#7CB342] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">
                                        {step.number}
                                    </div>
                                    {idx < workflowSteps.length - 1 && (
                                        <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-[#7CB342]/30 -translate-y-0.5"></div>
                                    )}
                                </div>
                                <h3 className="text-xl font-bold text-[#212121] mb-4">{step.title}</h3>
                                <p className="text-[#212121]/70">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mobile App Section */}
            <section className="py-20 bg-[#FFF8E1]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-[#212121] mb-6">Smart Herd Management is Now Mobile</h2>
                            <p className="text-xl text-[#212121]/70 mb-8">
                                The LactoHealth mobile app provides real-time herd monitoring and management from any location with an internet connection.
                            </p>
                            <div className="space-y-4 mb-8">
                                {[
                                    "📱 Real-time notifications and alerts",
                                    "🌐 Remote monitoring capabilities",
                                    "⚡ Instant access to farm data",
                                    "📊 Mobile-optimized dashboard"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center space-x-3">
                                        <span className="text-2xl text-[#7CB342]">✅</span>
                                        <span className="text-[#212121]/80">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="bg-[#7CB342] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#7CB342]/90 transition-colors shadow-lg">
                                📱 Download App
                            </button>
                        </div>
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-[#7CB342]/10 to-[#1976D2]/10 p-12 rounded-2xl border border-[#7CB342]/20">
                                <div className="text-8xl mb-6">📱</div>
                                <h3 className="text-2xl font-semibold text-[#212121] mb-4">Mobile Dashboard</h3>
                                <p className="text-[#212121]/70 text-lg">Monitor your farm anytime, anywhere</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Demo Section */}
            <section className="py-20 bg-[#FAFAFA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#212121] mb-4">See It In Action</h2>
                        <p className="text-xl text-[#212121]/70">Watch how LactoHealth AI transforms farm management</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto border border-[#FFF8E1]">
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="p-6 bg-[#1976D2]/5 rounded-xl border border-[#1976D2]/20 text-center">
                                <div className="text-4xl mb-4">📊</div>
                                <h3 className="font-semibold text-[#212121] mb-2">Data Upload</h3>
                                <p className="text-sm text-[#212121]/70">Cow #127 data uploaded</p>
                            </div>
                            <div className="p-6 bg-[#7CB342]/5 rounded-xl border border-[#7CB342]/20 text-center">
                                <div className="text-4xl mb-4">🧠</div>
                                <h3 className="font-semibold text-[#212121] mb-2">AI Analysis</h3>
                                <p className="text-sm text-[#212121]/70">Predicting 28.5L milk yield</p>
                            </div>
                            <div className="p-6 bg-[#B71C1C]/5 rounded-xl border border-[#B71C1C]/20 text-center">
                                <div className="text-4xl mb-4">⚠️</div>
                                <h3 className="font-semibold text-[#212121] mb-2">Health Alert</h3>
                                <p className="text-sm text-[#212121]/70">Cow #089 flagged for checkup</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="bg-[#7CB342] text-white px-8 py-3 rounded-lg hover:bg-[#7CB342]/90 transition-colors font-semibold shadow-lg">
                                🎮 Try Interactive Demo
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#7CB342] to-[#1976D2]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Dairy Farm?</h2>
                    <p className="text-xl text-white/90 mb-8">
                        Join thousands of successful farmers using AI-powered technology to optimize their operations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-[#7CB342] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#FFF8E1] transition-colors shadow-lg">
                            🚀 Get Started Today
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#7CB342] transition-colors">
                            📅 Schedule Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#5D4037] text-white py-16 relative overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                    style={{
                        backgroundImage: `url('data:image/svg+xml;base64,${btoa(`
              <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="400" viewBox="0 0 1200 400">
                <defs>
                  <pattern id="grass" patternUnits="userSpaceOnUse" width="100" height="100">
                    <rect width="100" height="100" fill="#7CB342"/>
                    <path d="M10,90 Q15,70 20,90 M30,85 Q35,65 40,85 M50,95 Q55,75 60,95 M70,80 Q75,60 80,80" stroke="#6BA82C" stroke-width="2" fill="none"/>
                  </pattern>
                </defs>
                
                <!-- Sky -->
                <rect width="1200" height="200" fill="#E3F2FD"/>
                
                <!-- Clouds -->
                <ellipse cx="200" cy="80" rx="60" ry="25" fill="white" opacity="0.8"/>
                <ellipse cx="180" cy="85" rx="40" ry="20" fill="white" opacity="0.8"/>
                <ellipse cx="220" cy="85" rx="35" ry="18" fill="white" opacity="0.8"/>
                
                <ellipse cx="600" cy="60" rx="50" ry="20" fill="white" opacity="0.7"/>
                <ellipse cx="580" cy="65" rx="30" ry="15" fill="white" opacity="0.7"/>
                
                <ellipse cx="1000" cy="90" rx="55" ry="22" fill="white" opacity="0.6"/>
                <ellipse cx="980" cy="95" rx="35" ry="18" fill="white" opacity="0.6"/>
                
                <!-- Hills in background -->
                <path d="M0,180 Q300,160 600,170 T1200,165 L1200,400 L0,400 Z" fill="#8BC34A" opacity="0.6"/>
                
                <!-- Main grass field -->
                <rect x="0" y="200" width="1200" height="200" fill="url(#grass)" opacity="0.8"/>
                
                <!-- Foreground grass -->
                <path d="M0,200 Q200,190 400,200 T800,195 T1200,200 L1200,250 L0,250 Z" fill="#7CB342" opacity="0.9"/>
                
                <!-- Trees -->
                <g opacity="0.7">
                  <!-- Tree 1 - Left -->
                  <rect x="80" y="140" width="8" height="50" fill="#5D4037"/>
                  <circle cx="84" cy="135" r="25" fill="#4CAF50"/>
                  <circle cx="75" cy="140" r="18" fill="#4CAF50"/>
                  <circle cx="93" cy="140" r="20" fill="#4CAF50"/>
                  
                  <!-- Tree 2 - Right -->
                  <rect x="1050" y="120" width="10" height="60" fill="#5D4037"/>
                  <circle cx="1055" cy="115" r="30" fill="#4CAF50"/>
                  <circle cx="1045" cy="125" r="22" fill="#4CAF50"/>
                  <circle cx="1065" cy="125" r="25" fill="#4CAF50"/>
                  
                  <!-- Smaller trees in background -->
                  <rect x="300" y="155" width="6" height="35" fill="#5D4037"/>
                  <circle cx="303" cy="150" r="18" fill="#4CAF50"/>
                  
                  <rect x="800" y="150" width="7" height="40" fill="#5D4037"/>
                  <circle cx="803.5" cy="145" r="20" fill="#4CAF50"/>
                </g>
                
                <!-- Farm buildings -->
                <g opacity="0.6">
                  <!-- Barn -->
                  <rect x="950" y="160" width="80" height="40" fill="#B71C1C"/>
                  <polygon points="950,160 990,130 1030,160" fill="#8D1616"/>
                  <rect x="965" y="175" width="15" height="25" fill="#5D4037"/>
                  <rect x="1000" y="170" width="20" height="30" fill="#424242"/>
                  
                  <!-- Silo -->
                  <rect x="1040" y="140" width="20" height="60" fill="#9E9E9E"/>
                  <ellipse cx="1050" cy="140" rx="10" ry="5" fill="#757575"/>
                </g>
                
                <!-- Cows scattered across the field -->
                <g opacity="0.8">
                  <!-- Cow 1 - Foreground left -->
                  <g transform="translate(150, 230)">
                    <ellipse cx="25" cy="30" rx="35" ry="20" fill="white"/>
                    <ellipse cx="10" cy="25" rx="18" ry="15" fill="white"/>
                    <!-- Legs -->
                    <rect x="8" y="45" width="4" height="20" fill="#212121"/>
                    <rect x="18" y="45" width="4" height="20" fill="#212121"/>
                    <rect x="35" y="45" width="4" height="20" fill="#212121"/>
                    <rect x="45" y="45" width="4" height="20" fill="#212121"/>
                    <!-- Head -->
                    <circle cx="5" cy="22" r="3" fill="#212121"/>
                    <!-- Spots -->
                    <circle cx="30" cy="25" r="5" fill="#212121" opacity="0.8"/>
                    <circle cx="18" cy="32" r="3" fill="#212121" opacity="0.8"/>
                    <circle cx="40" cy="35" r="4" fill="#212121" opacity="0.8"/>
                    <!-- Tail -->
                    <path d="M55,35 Q65,30 60,45" stroke="#212121" stroke-width="2" fill="none"/>
                  </g>
                  
                  <!-- Cow 2 - Center background -->
                  <g transform="translate(500, 210)">
                    <ellipse cx="20" cy="25" rx="25" ry="15" fill="white"/>
                    <ellipse cx="8" cy="20" rx="12" ry="10" fill="white"/>
                    <!-- Legs -->
                    <rect x="6" y="35" width="3" height="15" fill="#212121"/>
                    <rect x="12" y="35" width="3" height="15" fill="#212121"/>
                    <rect x="25" y="35" width="3" height="15" fill="#212121"/>
                    <rect x="32" y="35" width="3" height="15" fill="#212121"/>
                    <!-- Head -->
                    <circle cx="3" cy="18" r="2" fill="#212121"/>
                    <!-- Spots -->
                    <circle cx="22" cy="22" r="3" fill="#212121" opacity="0.8"/>
                    <circle cx="15" cy="28" r="2" fill="#212121" opacity="0.8"/>
                    <circle cx="28" cy="30" r="2.5" fill="#212121" opacity="0.8"/>
                  </g>
                  
                  <!-- Cow 3 - Right middle -->
                  <g transform="translate(750, 220)">
                    <ellipse cx="22" cy="28" rx="30" ry="18" fill="white"/>
                    <ellipse cx="10" cy="23" rx="15" ry="12" fill="white"/>
                    <!-- Legs -->
                    <rect x="8" y="40" width="3" height="18" fill="#212121"/>
                    <rect x="15" y="40" width="3" height="18" fill="#212121"/>
                    <rect x="30" y="40" width="3" height="18" fill="#212121"/>
                    <rect x="37" y="40" width="3" height="18" fill="#212121"/>
                    <!-- Head -->
                    <circle cx="4" cy="20" r="2.5" fill="#212121"/>
                    <!-- Spots -->
                    <circle cx="25" cy="24" r="4" fill="#212121" opacity="0.8"/>
                    <circle cx="16" cy="30" r="2.5" fill="#212121" opacity="0.8"/>
                    <circle cx="35" cy="32" r="3" fill="#212121" opacity="0.8"/>
                  </g>
                  
                  <!-- Cow 4 - Far background -->
                  <g transform="translate(350, 195)">
                    <ellipse cx="15" cy="20" rx="20" ry="12" fill="white"/>
                    <ellipse cx="6" cy="16" rx="8" ry="6" fill="white"/>
                    <!-- Legs -->
                    <rect x="5" y="28" width="2" height="12" fill="#212121"/>
                    <rect x="10" y="28" width="2" height="12" fill="#212121"/>
                    <rect x="20" y="28" width="2" height="12" fill="#212121"/>
                    <rect x="25" y="28" width="2" height="12" fill="#212121"/>
                    <!-- Spots -->
                    <circle cx="18" cy="18" r="2" fill="#212121" opacity="0.8"/>
                    <circle cx="12" cy="22" r="1.5" fill="#212121" opacity="0.8"/>
                  </g>
                  
                  <!-- Cow 5 - Grazing right -->
                  <g transform="translate(650, 240)">
                    <ellipse cx="20" cy="25" rx="25" ry="15" fill="white"/>
                    <ellipse cx="12" cy="35" rx="12" ry="8" fill="white"/> <!-- Head down grazing -->
                    <!-- Legs -->
                    <rect x="10" y="35" width="3" height="15" fill="#212121"/>
                    <rect x="17" y="35" width="3" height="15" fill="#212121"/>
                    <rect x="28" y="35" width="3" height="15" fill="#212121"/>
                    <rect x="35" y="35" width="3" height="15" fill="#212121"/>
                    <!-- Head -->
                    <circle cx="8" cy="38" r="2" fill="#212121"/>
                    <!-- Spots -->
                    <circle cx="22" cy="22" r="3" fill="#212121" opacity="0.8"/>
                    <circle cx="15" cy="26" r="2" fill="#212121" opacity="0.8"/>
                    <circle cx="28" cy="28" r="2.5" fill="#212121" opacity="0.8"/>
                  </g>
                </g>
                
                <!-- Fence -->
                <g opacity="0.4">
                  <line x1="0" y1="250" x2="1200" y2="250" stroke="#5D4037" stroke-width="2"/>
                  <line x1="0" y1="260" x2="1200" y2="260" stroke="#5D4037" stroke-width="2"/>
                  <!-- Fence posts -->
                  <rect x="100" y="245" width="4" height="20" fill="#5D4037"/>
                  <rect x="250" y="245" width="4" height="20" fill="#5D4037"/>
                  <rect x="400" y="245" width="4" height="20" fill="#5D4037"/>
                  <rect x="550" y="245" width="4" height="20" fill="#5D4037"/>
                  <rect x="700" y="245" width="4" height="20" fill="#5D4037"/>
                  <rect x="850" y="245" width="4" height="20" fill="#5D4037"/>
                  <rect x="1000" y="245" width="4" height="20" fill="#5D4037"/>
                </g>
                
                <!-- Grass details in foreground -->
                <g opacity="0.6">
                  <!-- Tall grass patches -->
                  <path d="M50,280 Q55,260 60,285 Q58,270 65,290 Q63,275 70,295" stroke="#7CB342" stroke-width="2" fill="none"/>
                  <path d="M200,285 Q205,265 210,290 Q208,275 215,295 Q213,280 220,300" stroke="#7CB342" stroke-width="2" fill="none"/>
                  <path d="M900,275 Q905,255 910,280 Q908,265 915,285 Q913,270 920,290" stroke="#7CB342" stroke-width="2" fill="none"/>
                  <path d="M1100,280 Q1105,260 1110,285 Q1108,270 1115,290 Q1113,275 1120,295" stroke="#7CB342" stroke-width="2" fill="none"/>
                </g>
              </svg>
            `)}')`
                    }}
                />

                {/* Dark overlay to ensure text readability */}
                <div className="absolute inset-0 bg-[#5D4037]/70"></div>

                {/* Footer content with higher z-index */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="md:col-span-2">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-12 h-12  rounded-lg flex items-center justify-center shadow-lg">
                                    <img
                                        src="/Gemini_Generated_Image_k2hj1xk2hj1xk2hj.png"
                                        alt="LactoHealth Logo"
                                        className="w-12 h-12 rounded-full bg-white border-2 border-[#7CB342] object-contain"
                                    />
                                </div>
                                <span className="text-2xl font-bold text-white">LactoHealth AI</span>
                            </div>
                            <p className="text-white/95 mb-6 max-w-md leading-relaxed font-medium">
                                Advanced AI-powered dairy farm management technology for the modern agricultural industry.
                                Optimize your operations with intelligent monitoring and predictive analytics.
                            </p>
                            <div className="bg-[#7CB342] text-white px-4 py-2 rounded-full text-sm inline-block shadow-lg">
                                🏆 Hackathon MVP 2025
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-6 text-lg text-white">Solutions</h3>
                            <div className="space-y-3">
                                <a href="#" className="block text-white/90 hover:text-white transition-colors font-medium">🥛 Milk Prediction</a>
                                <a href="#" className="block text-white/90 hover:text-white transition-colors font-medium">🔍 Health Monitoring</a>
                                <a href="#" className="block text-white/90 hover:text-white transition-colors font-medium">📊 Farm Analytics</a>
                                <a href="#" className="block text-white/90 hover:text-white transition-colors font-medium">📱 Mobile App</a>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-6 text-lg text-white">Support</h3>
                            <div className="space-y-3">
                                <a href="#" className="block text-white/90 hover:text-white transition-colors font-medium">📚 Documentation</a>
                                <a href="#" className="block text-white/90 hover:text-white transition-colors font-medium">🎓 Training</a>
                                <a href="#" className="block text-white/90 hover:text-white transition-colors font-medium">💬 Support Center</a>
                                <a href="#" className="block text-white/90 hover:text-white transition-colors font-medium">📧 Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-white/30 mt-12 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-white/90 text-sm font-medium">
                                © 2025 LactoHealth AI. All rights reserved. | Prototype for research and farm productivity support.
                            </p>
                            <div className="flex space-x-6 mt-4 md:mt-0">
                                <a href="#" className="text-white/90 hover:text-white transition-colors text-sm font-medium">🔒 Privacy</a>
                                <a href="#" className="text-white/90 hover:text-white transition-colors text-sm font-medium">📋 Terms</a>
                                <a href="#" className="text-white/90 hover:text-white transition-colors text-sm font-medium">⚖️ Legal</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}