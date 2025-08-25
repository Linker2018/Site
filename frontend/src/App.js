import React from 'react';
import './App.css';

// Import components
import {
  Header,
  HeroSection,
  ContractSection,
  WhereToBuy,
  AboutSection,
  RoadmapSection,
  Footer
} from './components';

// Main App Component
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ContractSection />
      <WhereToBuy />
      <AboutSection />
      <RoadmapSection />
      <Footer />
    </div>
  );
}

export default App;