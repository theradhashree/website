import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import HomePage from "./pages/HomePage";
import MyAccount from "./pages/MyAccount";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product-details" element={<ProductDetails />} />
      <Route path="/my-account" element={<MyAccount />} />
    </Routes>
  );
}

export default App;
