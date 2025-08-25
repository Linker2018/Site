import React, { useState, useEffect } from 'react';

const Footer = () => {
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
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo & Description */}
          <div>
            <div className="text-2xl font-bold glow-text mb-4">$PULS</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {config.token.description}
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a
                href={config.links.buyToken}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-crypto-gold transition-colors text-sm"
              >
                Buy $PULS
              </a>
              <a
                href={config.links.whitePaper}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-crypto-gold transition-colors text-sm"
              >
                Whitepaper
              </a>
              <a
                href={config.links.telegramBot}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-crypto-gold transition-colors text-sm"
              >
                Staking Bot
              </a>
            </div>
          </div>
          
          {/* Social Media */}
          <div>
            <h4 className="text-white font-bold mb-4">Community</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href={config.links.telegramGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-crypto-gold transition-all duration-300 p-3 bg-gray-800 hover:bg-gray-700 rounded-full transform hover:scale-110"
                title="Telegram Group"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.54 7.26c-.11.5-.4.62-.81.39l-2.25-1.66-1.08 1.04c-.12.12-.22.22-.45.22l.16-2.26 4.13-3.73c.18-.16-.04-.25-.28-.09l-5.1 3.21-2.2-.69c-.48-.15-.49-.48.1-.71l8.6-3.32c.4-.15.75.09.62.69z"/>
                </svg>
              </a>
              
              <a 
                href={config.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-crypto-gold transition-all duration-300 p-3 bg-gray-800 hover:bg-gray-700 rounded-full transform hover:scale-110"
                title="Twitter/X"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              <a 
                href={config.links.telegramBot}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-crypto-gold transition-all duration-300 p-3 bg-gray-800 hover:bg-gray-700 rounded-full transform hover:scale-110"
                title="Telegram Bot"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.54 7.26c-.11.5-.4.62-.81.39l-2.25-1.66-1.08 1.04c-.12.12-.22.22-.45.22l.16-2.26 4.13-3.73c.18-.16-.04-.25-.28-.09l-5.1 3.21-2.2-.69c-.48-.15-.49-.48.1-.71l8.6-3.32c.4-.15.75.09.62.69z"/>
                </svg>
              </a>
              
              <a 
                href={config.links.whitePaper}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-crypto-gold transition-all duration-300 p-3 bg-gray-800 hover:bg-gray-700 rounded-full transform hover:scale-110"
                title="Whitepaper"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Pulsar Finance. Built for the DeFi 2.0 future.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Contract: {config.token.contractAddress}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;