import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { GITHUB_REPO_NAME } from "./constants";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path={`/${GITHUB_REPO_NAME}`} element={<Navigate to="/" />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
