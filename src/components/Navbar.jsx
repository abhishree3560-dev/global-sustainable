import { Link } from "react-router-dom";
// import "./Navbar.css";

function Navbar({ darkMode, setDarkMode }) {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success px-4 sticky-top">

<button
  className="btn btn-outline-light"
  onClick={() => setDarkMode(!darkMode)}
>
  {darkMode ? "☀️ Light" : "🌙 Dark"}
</button>

      <Link className="navbar-brand fw-bold" to="/">
        🌱 Global Sustainable Development
      </Link>




      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
         data-bs-target="#menu"
        >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="menu">
       <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/goals">Goals</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/activities">Activities</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
