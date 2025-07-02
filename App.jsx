import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Boutique from "./pages/Boutique";
import Blog from "./pages/Blog";
import Elearning from "./pages/Elearning";
import Login from "./pages/Login";
import AuteurDashboard from "./pages/AuteurDashboard";
import HistoireDetail from "./pages/HistoireDetail";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/elearning" element={<Elearning />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auteur/:pseudo" element={<AuteurDashboard />} />
        <Route path="/histoire/:slug" element={<HistoireDetail />} />
      </Routes>
    </Router>
  );
}