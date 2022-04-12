import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Layout/Header/Header';
import Header from './components/Layout/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
