import '../App.css'
import { Link } from 'react-router-dom';

function TopBar() {


  return (
    <nav className="TopBar">
      <div className="TopBar-brand">
        <a href="#" className="TopBar-logo">Abarrotes Ecommerce</a>
      </div>
      <div className="TopBar-links">
      <Link to="/" className="TopBar-link">Home</Link>
      </div>
    </nav>
  );
}

export default TopBar;