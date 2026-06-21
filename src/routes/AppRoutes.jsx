import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Orders from "../pages/Orders";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import ForgotPassword from "../pages/ForgotPassword";
import OTPVerification from "../pages/OTPVerification";
import ResetPassword from "../pages/ResetPassword";
import AIAssistant from "../pages/AIAssistant";
import Checkout from "../pages/Checkout";
import Payment from "../pages/Payment";
import OrderSuccess from "../pages/OrderSuccess";
import AdminDashboard from "../pages/AdminDashboard";
import AddProduct from "../pages/AddProduct";
import ManageUsers from "../pages/ManageUsers";
import ManageOrders from "../pages/ManageOrders";
import ManageProducts from "../pages/ManageProducts";
import CategoryProducts from "../pages/CategoryProducts";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />
        <Route
  path="/category/:category"
  element={<CategoryProducts />}
/>
<Route
  path="/admin/products"
  element={<ManageProducts />}
/>
        <Route path="/cart" element={<Cart />} />

        <Route
          path="/wishlist"
          element={<Wishlist />}
        />
        <Route
  path="/checkout"
  element={<Checkout />}
/>
        <Route
  path="/ai-assistant"
  element={<AIAssistant />}
/>
        <Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>
<Route
  path="/admin"
  element={<AdminDashboard />}
/>
<Route
  path="/category/:category"
  element={<Products />}
/>

<Route
  path="/otp-verification"
  element={<OTPVerification />}
/>
<Route
  path="/payment"
  element={<Payment />}
/>

<Route
  path="/order-success"
  element={<OrderSuccess />}
/>

<Route path="/reset-password" element={<ResetPassword />} />
<Route
  path="/admin/add-product"
  element={<AddProduct />}
/>

<Route
  path="/admin/users"
  element={<ManageUsers />}
/>

<Route
  path="/admin/orders"
  element={<ManageOrders />}
/>

        <Route path="/orders" element={<Orders />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
        
        <Route path="/ai" element={<AIAssistant />} />
        
        

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;