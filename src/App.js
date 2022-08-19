import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inv from "./pages/Inv";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/inv" element={<Inv />} />
      </Routes>
    </Router>
  );
}

export default App;
