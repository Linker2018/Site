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

  const copyToClipboard = () => {
    if (config?.token?.contractAddress) {
      navigator.clipboard.writeText(config.token.contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!config) return null;

  return (
    <section className="section-padding bg-gray-900/30">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">CONTRACT ADDRESS</h2>
        
        <div className="bg-gray-900/70 rounded-lg p-8 max-w-2xl mx-auto backdrop-blur-sm border border-gray-700">
          <p className="text-gray-400 mb-4 text-lg">Smart Contract Address:</p>
          <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-800 rounded-lg p-4 gap-4">
            <span className="font-mono text-sm md:text-base text-gray-300 break-all">
              {config.token.contractAddress}
            </span>
            <button 
              onClick={copyToClipboard}
              className="btn-secondary px-6 py-2 text-sm whitespace-nowrap hover:scale-105 transition-transform"
            >
              {copied ? (
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                  </svg>
                  Copied!
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy
                </span>
              )}
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            BEP-20 Token on Binance Smart Chain (BSC)
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContractSection;