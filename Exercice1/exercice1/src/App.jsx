import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Etoiles from "./pages/Etoiles";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/etoiles">Étoiles</Link>
            </li>
          </ul>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/etoiles" element={<Etoiles />} />
      </Routes>
    </div>
  );
}

export default App;
