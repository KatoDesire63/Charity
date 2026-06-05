import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Scholarship from "./pages/Scholarship";
import Donate from "./pages/Donate";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}