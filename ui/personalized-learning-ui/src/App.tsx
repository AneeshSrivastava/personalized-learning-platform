import { Link } from "react-router-dom";
import "./App.css"; // Make sure to import the CSS file

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to Personalized Learning Platform</h1>
      </header>

      <nav className="nav">
        <Link to="/login" className="btn">
          Login
        </Link>
        <span> | </span>
        <Link to="/register" className="btn">
          Register
        </Link>
      </nav>

      <footer className="footer">
        <p>&copy; 2024 My Learning Platform</p>
      </footer>
    </div>
  );
}

export default App;
