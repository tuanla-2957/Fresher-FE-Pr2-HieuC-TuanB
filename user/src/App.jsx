import React from "react";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./actions/auth.action";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./containers/Home/Home";
import AboutUs from "./containers/About-us/AboutUs";
import Product from "./containers/Product/Product";
import Post from "./containers/Post/Post";
import Blog from "./containers/Blog/Blog";
import Profile from "./containers/Profile/Profile";
import ProfileOrder from "./containers/Profile/pages/ProfileOrder/ProfileOrder";
import ProfileAccount from "./containers/Profile/pages/ProfileAccount/ProfileAccount";
import PrivateRoute from "./components/PrivateRoute";
import ProfilePassword from "./containers/Profile/pages/ProfilePassword/ProfilePassword";
import ShopCart from "./containers/Shop-cart/ShopCart";
import ProductDetail from "./components/Product/ProductDetail/ProductDetail";
import OrderResult from "./containers/Order-result/OrderResult";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticate } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [isAuthenticate]);

  return (
    <div className='App'>
      <Toaster position='top-center' reverseOrder={false} />
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:productId' element={<ProductDetail />} />
          <Route path='/post' element={<Post />} />
          <Route path='/blog' element={<Blog />} />
          <Route element={<PrivateRoute />}>
            <Route path='/cart' element={<ShopCart />} />
            <Route path='/order-result' element={<OrderResult />} />
            <Route path='/profile/dashboard' element={<Profile />} />
            <Route path='/profile/order' element={<ProfileOrder />} />
            <Route path='/profile/account' element={<ProfileAccount />} />
            <Route path='/profile/password' element={<ProfilePassword />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
