import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
