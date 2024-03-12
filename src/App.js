import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import HomePage from "./pages/HomePage";
import MyAccount from "./pages/MyAccount";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Brands from "./pages/Brands";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/Profile" element={<MyAccount />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Brands" element={<Brands />} />
      </Routes>
    </>
  );
}

export default App;
