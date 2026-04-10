import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage";
import FranchisePage from "./Pages/FranchisePage";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <div>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/franchise" element={<FranchisePage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;