import React, { useState, useEffect } from 'react';
import './App.css';

// Header Component
const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold glow-text">$PULS</div>
          </div>
          <button className="btn-primary">
            Buy $PULS
          </button>
        </div>
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0xCAAE2A2F939F51d97CdFa9A86e79e3F085b799f3";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1639322537228-f710d846310a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWlufGVufDB8fHx8MTc1MzkwNjE5MXww&ixlib=rb-4.1.0&q=85)'
        }}
      />
      <div className="container-custom text-center relative z-10">
        <p className="text-crypto-gold text-lg mb-4 animate-fade-in">Learn about $PULS</p>
        <h1 className="text-8xl md:text-9xl font-black mb-8 glow-text animate-slide-up">
          TUTORIAL
        </h1>
        <p className="text-gray-400 text-lg mb-4">ca: {contractAddress}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <button className="btn-primary text-xl px-12 py-4">
            Buy $PULS
          </button>
          <button className="btn-secondary">
            AI Agent
          </button>
        </div>
        <div className="bg-gray-900/50 rounded-lg p-6 max-w-md mx-auto backdrop-blur-sm">
          <p className="text-gray-400 mb-2">Token address:</p>
          <div className="flex items-center justify-between bg-gray-800 rounded p-3">
            <span className="font-mono text-sm text-gray-300 truncate mr-2">
              {contractAddress}
            </span>
            <button 
              onClick={copyToClipboard}
              className="text-crypto-gold hover:text-yellow-400 transition-colors text-sm"
            >
              {copied ? '✓ Copied' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Exchange Listings Component
const ExchangeListings = () => {
  const exchanges = [
    { name: 'KuCoin', url: 'https://www.kucoin.com/trade/TUT-USDT' },
    { name: 'Binance', url: 'https://www.binance.com/en/trade/TUT_USDT' },
    { name: 'Gate.io', url: 'https://www.gate.io/signup?ch=signupTUT' },
    { name: 'Bitget', url: 'https://www.bitget.com/spot/TUTUSDT' },
    { name: 'Four.meme', url: 'https://four.meme/token/0xcaae2a2f939f51d97cdfa9a86e79e3f085b799f3' },
    { name: 'Pancakeswap', url: 'https://pancakeswap.finance/?outputCurrency=0xCAAE2A2F939F51d97CdFa9A86e79e3F085b799f3' }
  ];

  return (
    <section className="section-padding bg-gray-900/30">
      <div className="container-custom text-center">
        <h2 className="text-6xl font-black mb-4 text-white">GET IT</h2>
        <h3 className="text-4xl font-bold mb-16 text-gray-300">NOW ON:</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {exchanges.map((exchange, index) => (
            <a
              key={index}
              href={exchange.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-gray-700 hover:border-crypto-gold"
            >
              <div className="text-xl font-bold text-white">{exchange.name}</div>
            </a>
          ))}
        </div>
        <div className="mt-16">
          <p className="text-6xl font-black glow-text animate-pulse-slow">WAGMI!</p>
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-8 text-white">WHAT IS THIS ABOUT?</h2>
          <h3 className="text-2xl font-bold mb-8 glow-text">REAL OG TUTORIAL TOKEN IS $PULS</h3>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h4 className="text-xl font-bold text-gray-300">
              A year ago dev recorded the first tutorial for BNB chain on how to launch a token.
            </h4>
            <h4 className="text-xl font-bold text-gray-300">
              This OG token was on testnet, now it is on the mainnet! Tutorial is a memecoin created by real Builders
            </h4>
            <div className="space-y-4">
              <button className="btn-secondary">
                Go to X
              </button>
              <p className="text-gray-400">Watch the video</p>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-8 text-center">
            <div 
              className="w-full h-64 bg-cover bg-center rounded-lg mb-4 flex items-center justify-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1639754390580-2e7437267698?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxjcnlwdG9jdXJyZW5jeXxlbnwwfHx8fDE3NTM5NTUzMTl8MA&ixlib=rb-4.1.0&q=85)'
              }}
            >
              <div className="bg-black/70 rounded-full p-4">
                <svg className="w-12 h-12 text-crypto-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <p className="text-gray-400 text-sm">Guide to Creating Your Own BEP20 Token on BNB Chain</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Roadmap Section Component (without mascot)
const RoadmapSection = () => {
  const roadmapData = [
    {
      quarter: "🔮 Q2 2025",
      items: ["Launch of Tutorial Agent v1", "Launch of Learning platform", "BNB AI Hackathon Ambition", "Strategic Partnerships"]
    },
    {
      quarter: "📡 Q3 2025", 
      items: ["Integration of AI Agents with APIs & Data Feeds", "Ecosystem Integrations & Partnerships", "AI TikTok generator tool", "Smarter, More Intuitive AI Agent Upgrades"]
    },
    {
      quarter: "🌍 Q4 2025",
      items: ["Expanded Terminal Capabilities", "Global Campaigns, Web3 Summits & Events", "AI-Powered Content Generation", "Enterprise & Institutional Adoption"]
    },
    {
      quarter: "🛠 2026",
      items: ["TBA", "TBA", "TBA", "TBA"]
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-900/50 to-black relative">
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1639762681485-074b7f938ba0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxibG9ja2NoYWlufGVufDB8fHx8MTc1MzkwNjE5MXww&ixlib=rb-4.1.0&q=85)'
        }}
      />
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <p className="text-crypto-gold text-lg mb-4">We are on the</p>
          <h2 className="text-6xl md:text-8xl font-black mb-4 text-white">ROAD</h2>
          <h2 className="text-6xl md:text-8xl font-black mb-4 text-white">MAP</h2>
          <p className="text-gray-400 text-lg">to heaven.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {roadmapData.map((phase, index) => (
            <div key={index} className="bg-gray-900/70 rounded-lg p-6 backdrop-blur-sm border border-gray-700 hover:border-crypto-gold transition-all duration-300">
              <h4 className="font-bold text-xl mb-6 glow-text">{phase.quarter}</h4>
              <ul className="space-y-4">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300 text-sm leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4">
            <button className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="container-custom text-center">
        <div className="mb-4">
          <button className="btn-secondary">
            Tutorial Learn App
          </button>
        </div>
        <p className="text-gray-500 text-sm">
          © 2025 $PULS Token. Built for the community.
        </p>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ExchangeListings />
      <AboutSection />
      <RoadmapSection />
      <Footer />
    </div>
  );
}

export default App;