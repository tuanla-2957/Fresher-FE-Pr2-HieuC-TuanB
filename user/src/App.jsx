import React from 'react';
import Footer from './components/Layout/Header/Header';
import Header from './components/Layout/Footer/Footer';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from './actions/auth.action';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import Home from './containers/Home/Home';
import AboutUs from './containers/About-us/AboutUs';
import Product from './containers/Product/Product';
import Post from './containers/Post/Post';
import Blog from './containers/Blog/Blog';

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
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/product' element={<Product />} />
          <Route path='/post' element={<Post />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
