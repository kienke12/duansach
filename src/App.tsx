import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/layout/user";
import HomePage from "./pages/homepage";
import Productdetail from "./components/productdetail";
import Signup from "./components/layout/signin-signup/signup";

import AdminLayout from "./components/layout/admin";
import Signinn from "./components/layout/signin-signup/sign-in";
import Home from "./components/layout/admin/Dashboard/home";

import Additemm from "./components/layout/admin/Dashboard/add";
import Updateitemm from "./components/layout/admin/Dashboard/update";

// 1. Khai báo router react-router-dom

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          
          {/* Layout */}
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Signinn />} />
          <Route index element={<HomePage />} />
          <Route path="product/:id" element={<Productdetail />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Home />} />
          <Route path="add" element={<Additemm />} />
          <Route path="product/:id" element={<Updateitemm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
