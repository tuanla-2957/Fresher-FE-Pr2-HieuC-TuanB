import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Layout/Header/Header';
import Header from './components/Layout/Footer/Footer';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from './actions/auth.action';

function App() {
  const dispatch = useDispatch();
  const { isAuthenticate } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [isAuthenticate]);

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
