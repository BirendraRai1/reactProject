//import SignUp from "./pages/SignUp";
// import Counter from "./pages/SignUp/counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import authSlice from "../src/redux/slices/authSlice.js";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import Header from "./pages/Common/Components/Header.jsx";
import Footer from "./pages/Common/Components/Footer.jsx";
import Home from "./pages/Common/Home/Home.jsx";
import Login from "./pages/Common/Components/Login/Login.jsx";
import ResetPassword from "./pages/Common/Components/Reset Password/reset_password.jsx";
import About from "./pages/Common/About/About.jsx";
import Solution from "./pages/Common/Solution/Solution.jsx";
import CaseStudy from "./pages/Common/CaseStudy/CaseStudy.jsx";
import ContactUs from "./pages/Common/ContactUs/ContactUs.jsx";
import FAQ from "./pages/Common/FAQ/FAQ.jsx";
import Team from "./pages/Common/Team/Team.jsx";

//Admin Panel
import Dashboard from "./pages/ControlPanel/Dashboard/Dasboard.jsx";
import BusinessDetails from "./pages/ControlPanel/Registration/BusinessDetails.jsx";
import AdminLayout from "./pages/ControlPanel/AdminLayout.jsx";
import PersonalInfo from "./pages/ControlPanel/Registration/PersonalInfo.jsx";
import SellerCodeDetails from "./pages/ControlPanel/Registration/SellerCodeDetails.jsx";
import BankDetails from "./pages/ControlPanel/Registration/BankDetails.jsx";
import Orders from "./pages/ControlPanel/Orders/Orders.jsx";
import MyBrands from "./pages/ControlPanel/MyBrands/MyBrands.jsx";
import AddBrands from "./pages/ControlPanel/MyBrands/AddBrands.jsx";
import EditBrands from "./pages/ControlPanel/MyBrands/EditBrands.jsx";
import ProductList from "./pages/ControlPanel/Product/ProductList.jsx";
import AddProduct from "./pages/ControlPanel/Product/AddProduct.jsx";

// {authToken == "" ? import '../../../assets/css/sb-admin-2.min.css' : '' }

function App() {

  const authToken = useSelector((store)=>store.authState.userToken);

  return (
    <>
      {/* <SignUp></SignUp> */}
      {/* <Counter></Counter> */}
      {authToken == "" ? (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/reset_password/:id/:token"
                element={<ResetPassword />}
              />
              <Route path="/about" element={<About />} />
              <Route path="/solution" element={<Solution />} />
              <Route path="/case-study" element={<CaseStudy />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/team" element={<Team />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route
              path="/vendor/my-brands"
              element={<AdminLayout content={<MyBrands />} />}
            />
            <Route
              path="/vendor/add-brand"
              element={<AdminLayout content={<AddBrands />} />}
            />
            <Route
              path="/vendor/edit-brand"
              element={<AdminLayout content={<EditBrands />} />}
            />
            <Route
              path="/vendor/personal-info"
              element={<AdminLayout content={<PersonalInfo />} />}
            />
            <Route
              path="/vendor/dashboard"
              element={<AdminLayout content={<Dashboard />} />}
            />
            <Route
              path="/vendor/business-details"
              element={<AdminLayout content={<BusinessDetails />} />}
            />
            <Route
              path="/vendor/seller-code-details"
              element={<AdminLayout content={<SellerCodeDetails />} />}
            />
            <Route
              path="/vendor/bank-details"
              element={<AdminLayout content={<BankDetails />} />}
            />
            <Route
              path="/vendor/orders"
              element={<AdminLayout content={<Orders />} />}
            />
            <Route
              path="/vendor/login"
              element={<><Header /><Login /></>}
            />
            <Route
              path="/vendor/product-list"
              element={<AdminLayout content={<ProductList />} />}
            />
            <Route
              path="/vendor/add-product"
              element={<AdminLayout content={<AddProduct />} />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
