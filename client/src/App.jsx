import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SellPage from "./pages/SellPage";
import BrowsePage from "./pages/BrowsePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/browse" element={<BrowsePage />} />
      </Routes>
    </Router>
  );
}

export default App;
