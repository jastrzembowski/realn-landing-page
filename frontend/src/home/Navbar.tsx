import { Link } from "react-router-dom";
import logo from "../images/logorealn.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="realn"></img>
      </Link>
      <aside>
        <Link to="/dla-agentow">
          <button>Dla agentów</button>
        </Link>
        <Link to="/contact">
          <button>Dowiedz się więcej</button>
        </Link>
      </aside>
    </div>
  );
}
