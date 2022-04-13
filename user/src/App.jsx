import React from 'react';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Home from './containers/Home/Home';
import AboutUs from './containers/About-us/AboutUs';
import Product from './containers/Product/Product';
import Post from './containers/Post/Post';
import Blog from './containers/Blog/Blog';

function App() {
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
