import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Campus Navigator
      </Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/universities">Universities</Link>
      </div>
    </nav>
  );
}

export default Navbar;