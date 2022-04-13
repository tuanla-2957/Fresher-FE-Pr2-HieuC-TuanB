import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/Products/components/ProductDetail";
import Login from "./pages/Login";
import { isUserLoggedIn } from "./actions";

import "./App.scss";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticate } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [isAuthenticate]);

  return (
    <div class='App'>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:productId' element={<ProductDetails />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
