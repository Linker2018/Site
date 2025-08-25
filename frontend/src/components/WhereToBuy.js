import React, { useState, useEffect } from 'react';

const WhereToBuy = () => {
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
    <section className="section-padding bg-gradient-to-b from-gray-900/50 to-black">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-4 text-white">GET IT</h2>
        <h3 className="text-2xl md:text-4xl font-bold mb-16 text-gray-300">NOW ON:</h3>
        
        <div className="max-w-md mx-auto">
          {config.exchanges.map((exchange, index) => (
            <a
              key={index}
              href={exchange.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-800 hover:bg-gray-700 rounded-2xl p-8 mb-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-gray-700 hover:border-crypto-gold"
            >
              <div className="flex items-center justify-center space-x-4">
                <svg className="w-8 h-8 text-crypto-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <div className="text-2xl font-bold text-white">{exchange.name}</div>
              </div>
              <p className="text-gray-400 text-sm mt-2">Click to trade $PULS</p>
            </a>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="bg-gray-900/70 rounded-2xl p-6 max-w-md mx-auto backdrop-blur-sm border border-gray-700">
            <h4 className="text-xl font-bold text-crypto-gold mb-3">Presale Information</h4>
            <p className="text-gray-300 text-lg mb-2">Price: <span className="text-white font-bold">$0.05</span></p>
            <p className="text-gray-300 text-lg">APY: <span className="text-white font-bold">Up to 360%</span></p>
          </div>
        </div>
        
        <div className="mt-12">
          <p className="text-4xl md:text-6xl font-black glow-text animate-pulse-slow">WAGMI!</p>
        </div>
      </div>
    </section>
  );
};

export default WhereToBuy;