// App.js
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Banner from './Banner';
import ProductSection from './ProductSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <ProductSection />
    </div>
  );
}

export default App;
