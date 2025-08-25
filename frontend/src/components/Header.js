import React, { useState, useEffect } from 'react';

const Header = () => {
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
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Social Icons */}
          <div className="flex items-center space-x-6">
            <div className="text-2xl font-bold glow-text">$PULS</div>
            
            {/* Social Media Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href={config.links.telegramGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-crypto-gold transition-colors p-2 rounded-full hover:bg-gray-800"
                title="Telegram Group"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.54 7.26c-.11.5-.4.62-.81.39l-2.25-1.66-1.08 1.04c-.12.12-.22.22-.45.22l.16-2.26 4.13-3.73c.18-.16-.04-.25-.28-.09l-5.1 3.21-2.2-.69c-.48-.15-.49-.48.1-.71l8.6-3.32c.4-.15.75.09.62.69z"/>
                </svg>
              </a>
              
              <a 
                href={config.links.telegramBot}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-crypto-gold transition-colors p-2 rounded-full hover:bg-gray-800"
                title="Telegram Bot"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.54 7.26c-.11.5-.4.62-.81.39l-2.25-1.66-1.08 1.04c-.12.12-.22.22-.45.22l.16-2.26 4.13-3.73c.18-.16-.04-.25-.28-.09l-5.1 3.21-2.2-.69c-.48-.15-.49-.48.1-.71l8.6-3.32c.4-.15.75.09.62.69z"/>
                </svg>
              </a>
              
              <a 
                href={config.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-crypto-gold transition-colors p-2 rounded-full hover:bg-gray-800"
                title="Twitter/X"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              <a 
                href={config.links.whitePaper}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-crypto-gold transition-colors p-2 rounded-full hover:bg-gray-800"
                title="White Paper"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Buy Button */}
          <a
            href={config.links.buyToken}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Buy $PULS
          </a>
        </div>

        {/* Mobile Social Icons */}
        <div className="md:hidden flex justify-center space-x-6 mt-3 pt-3 border-t border-gray-800">
          <a 
            href={config.links.telegramGroup}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-crypto-gold transition-colors p-2 rounded-full hover:bg-gray-800"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.54 7.26c-.11.5-.4.62-.81.39l-2.25-1.66-1.08 1.04c-.12.12-.22.22-.45.22l.16-2.26 4.13-3.73c.18-.16-.04-.25-.28-.09l-5.1 3.21-2.2-.69c-.48-.15-.49-.48.1-.71l8.6-3.32c.4-.15.75.09.62.69z"/>
            </svg>
          </a>
          
          <a 
            href={config.links.telegramBot}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-crypto-gold transition-colors p-2 rounded-full hover:bg-gray-800"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.54 7.26c-.11.5-.4.62-.81.39l-2.25-1.66-1.08 1.04c-.12.12-.22.22-.45.22l.16-2.26 4.13-3.73c.18-.16-.04-.25-.28-.09l-5.1 3.21-2.2-.69c-.48-.15-.49-.48.1-.71l8.6-3.32c.4-.15.75.09.62.69z"/>
            </svg>
          </a>
          
          <a 
            href={config.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-crypto-gold transition-colors p-2 rounded-full hover:bg-gray-800"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          
          <a 
            href={config.links.whitePaper}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-crypto-gold transition-colors p-2 rounded-full hover:bg-gray-800"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;