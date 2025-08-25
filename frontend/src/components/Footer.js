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
                className="text-gray-400 hover:text-crypto-gold transition-colors p-2 bg-gray-800 hover:bg-gray-700 rounded-xl"
                title="Telegram Group"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-.962 6.502-.448 1.645-.9 2.87-2.34.45l-.9-.83c-.194-.02-.369-.053-.542-.1-.47-.131-.94-.26-1.41-.39-.94-.26-1.88-.52-2.82-.78-.47-.13-.94-.26-1.41-.39l-.9-.83c-1.44-2.42-.892-1.195-.44.45 0 0-.783-4.604-.962-6.502-.016-.166.004-.38.02-.472a.506.506 0 0 1 .17-.325c.145-.117.366-.142.466-.14zm-5.407 2.198c-.872.199-.87.197-.87.197-.002-.001.18-.204.87-.197z"/>
                </svg>
              </a>
              
              <a 
                href={config.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-crypto-gold transition-colors p-2 bg-gray-800 hover:bg-gray-700 rounded-full"
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
                className="text-gray-400 hover:text-crypto-gold transition-colors p-2 bg-gray-800 hover:bg-gray-700 rounded-xl"
                title="Telegram Bot"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.78 1.63l-.28.1A12.05 12.05 0 0 0 1.73 9.5a12.05 12.05 0 0 0 7.77 7.77l.28.1.28-.1A12.05 12.05 0 0 0 17.83 9.5a12.05 12.05 0 0 0-7.77-7.77L9.78 1.63zM12 5c.83 0 1.5.67 1.5 1.5S12.83 8 12 8s-1.5-.67-1.5-1.5S11.17 5 12 5zm0 4c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2s-2-.9-2-2v-6c0-1.1.9-2 2-2z"/>
                </svg>
              </a>
              
              <a 
                href={config.links.whitePaper}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-crypto-gold transition-colors p-2 bg-gray-800 hover:bg-gray-700 rounded-full"
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