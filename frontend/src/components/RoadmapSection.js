import React, { useState, useEffect } from 'react';

const RoadmapSection = () => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    // Load config from backend or local config
    fetch('/config.json')
      .then(res => res.json())
      .then(data => setConfig(data))
      .catch(err => console.log('Config loading error:', err));
  }, []);

  if (!config) return null;

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
          <p className="text-crypto-gold text-lg mb-4">{config.content.roadmapSubtitle}</p>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black mb-4 text-white">{config.content.roadmapTitle}</h2>
          <p className="text-gray-400 text-lg">{config.content.roadmapTagline}</p>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {config.roadmap.map((phase, index) => (
            <div 
              key={index} 
              className="bg-gray-900/70 rounded-2xl p-8 backdrop-blur-sm border border-gray-700 hover:border-crypto-gold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <h4 className="font-bold text-2xl mb-6 glow-text text-center">{phase.quarter}</h4>
              <ul className="space-y-4">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300 leading-relaxed flex items-start">
                    <span className="text-crypto-gold mr-3 mt-1">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gray-900/70 rounded-2xl p-6 max-w-md mx-auto backdrop-blur-sm border border-gray-700">
            <h4 className="text-xl font-bold glow-text mb-3">Join Our Journey</h4>
            <p className="text-gray-300 mb-4">Be part of the DeFi 2.0 revolution</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={config.links.telegramGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm px-6 py-3"
              >
                Join Community
              </a>
              <a
                href={config.links.telegramBot}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-6 py-3"
              >
                Start Staking
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;