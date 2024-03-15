import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { GITHUB_REPO_NAME } from "./constants";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path={`/${GITHUB_REPO_NAME}`} element={<Navigate to="/" />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
