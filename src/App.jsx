import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Universities from "./pages/Universities";
import WitsPage from "./pages/WitsPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/university/wits" element={<WitsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;