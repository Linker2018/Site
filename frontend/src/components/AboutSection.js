import React, { useState, useEffect } from 'react';

const AboutSection = () => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    // Load config from backend or local config
    fetch('/config.json')
      .then(res => res.json())
      .then(data => setConfig(data))
      .catch(err => console.log('Config loading error:', err));
  }, []);

  if (!config) return null;

  // Split description into paragraphs
  const paragraphs = config.content.aboutDescription.split('\n\n');

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">{config.content.aboutTitle}</h2>
          <h3 className="text-xl md:text-2xl font-bold mb-8 glow-text">{config.content.aboutSubtitle}</h3>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            {paragraphs.map((paragraph, index) => (
              <div key={index} className="text-gray-300 text-lg leading-relaxed">
                {paragraph}
              </div>
            ))}
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href={config.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Follow on X
              </a>
              <a
                href={config.links.whitePaper}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Read Whitepaper
              </a>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/70 rounded-lg p-6 backdrop-blur-sm border border-gray-700 hover:border-crypto-gold transition-colors">
              <div className="text-crypto-gold text-3xl mb-4">🤖</div>
              <h4 className="font-bold text-white mb-2">Telegram Bot</h4>
              <p className="text-gray-400 text-sm">Easy staking and asset management through our Telegram bot</p>
            </div>
            
            <div className="bg-gray-900/70 rounded-lg p-6 backdrop-blur-sm border border-gray-700 hover:border-crypto-gold transition-colors">
              <div className="text-crypto-gold text-3xl mb-4">💎</div>
              <h4 className="font-bold text-white mb-2">NFT Bonuses</h4>
              <p className="text-gray-400 text-sm">Exclusive NFTs boost earnings and grant special privileges</p>
            </div>
            
            <div className="bg-gray-900/70 rounded-lg p-6 backdrop-blur-sm border border-gray-700 hover:border-crypto-gold transition-colors">
              <div className="text-crypto-gold text-3xl mb-4">📈</div>
              <h4 className="font-bold text-white mb-2">High APY</h4>
              <p className="text-gray-400 text-sm">Up to 360% annual percentage yield for stakers</p>
            </div>
            
            <div className="bg-gray-900/70 rounded-lg p-6 backdrop-blur-sm border border-gray-700 hover:border-crypto-gold transition-colors">
              <div className="text-crypto-gold text-3xl mb-4">🔗</div>
              <h4 className="font-bold text-white mb-2">DeFi 2.0</h4>
              <p className="text-gray-400 text-sm">Next-generation DeFi with gamification and multi-tier rewards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;