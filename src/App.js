import React from "react";
import "./index"
import Home from "./Components/Home";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import Products from "./Components/Products";
import FeaturedProducts from "./Components/FeaturedProducts";
import NewProducts from "./Components/NewProducts";
import Users from "./Components/Users";
import Admin from "./Components/Admin";
import UserDetails from "./Components/UserDetails";
import NoMatch from "./Components/NoMatch";
import OrderSummary from "./Components/OrderSummary";

import { Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <div>
      <NavBar />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />

        {/* nested routes */}

        <Route path="products" element={<Products />}>
          {/* start showing index page for element Products */}
          <Route index element={<FeaturedProducts />} />
          {/* end of showing index page for element Products */}
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>

        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route path="*" element={<NoMatch />} />

      </Routes>
    </div>
  )
}

export default App;