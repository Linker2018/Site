import React, { useState, useEffect } from 'react';

const HeroSection = () => {
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
    <section className="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1639322537228-f710d846310a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWlufGVufDB8fHx8MTc1MzkwNjE5MXww&ixlib=rb-4.1.0&q=85)'
        }}
      />
      <div className="container-custom text-center relative z-10">
        <p className="text-crypto-gold text-lg mb-4 animate-fade-in">{config.content.heroSubtitle}</p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 glow-text animate-slide-up">
          {config.content.heroTitle}
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <a 
            href={config.links.buyToken}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xl px-12 py-4"
          >
            Buy $PULS
          </a>
          <a 
            href={config.links.telegramBot}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Staking Bot
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;