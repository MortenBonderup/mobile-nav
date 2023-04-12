import "./App.css";
import "./styles.css";
import Navbar from "./components/Navbar";
import Forside from "./pages/Forside";
import Omos from "./pages/Omos";
import Kontakt from "./pages/Kontakt";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Forside />} />
          <Route path="/omos" element={<Omos />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
