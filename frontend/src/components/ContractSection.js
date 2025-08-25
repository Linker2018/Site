import React, { useState, useEffect } from 'react';

const ContractSection = () => {
  const [config, setConfig] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Load config from backend or local config
    fetch('/config.json')
      .then(res => res.json())
      .then(data => setConfig(data))
      .catch(err => console.log('Config loading error:', err));
  }, []);

  const copyToClipboard = async () => {
    if (!config?.token?.contractAddress) return;
    
    try {
      await navigator.clipboard.writeText(config.token.contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  if (!config) return null;

  return (
    <section className="section-padding bg-gradient-to-b from-black to-gray-900/50">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-4 glow-text">CONTRACT</h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Smart contract address on Binance Smart Chain (BSC)
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-700 hover:border-crypto-gold rounded-2xl p-8 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex-1 text-left">
                <p className="text-gray-400 text-sm mb-2">Contract Address:</p>
                <p className="text-white font-mono text-lg break-all">
                  {config.token.contractAddress}
                </p>
              </div>
              
              <button
                onClick={copyToClipboard}
                className={`ml-4 px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${
                  copied 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 text-black hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-300'
                }`}
              >
                {copied ? (
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                    <span>Copied!</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                    </svg>
                    <span>Copy</span>
                  </div>
                )}
              </button>
            </div>
          </div>
          
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <div className="text-crypto-gold text-2xl font-bold mb-2">BSC</div>
              <p className="text-gray-400 text-sm">Binance Smart Chain</p>
            </div>
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <div className="text-crypto-gold text-2xl font-bold mb-2">BEP-20</div>
              <p className="text-gray-400 text-sm">Token Standard</p>
            </div>
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <div className="text-crypto-gold text-2xl font-bold mb-2">$PULS</div>
              <p className="text-gray-400 text-sm">Token Symbol</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractSection;