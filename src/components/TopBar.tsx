import '../App.css'
import { Link } from 'react-router-dom';

function TopBar() {

    //const {Products} = useGetProduts();

  return (
    <nav className="TopBar">
      <div className="TopBar-brand">
        <a href="#" className="TopBar-logo">Abarrotes Ecommerce</a>
      </div>
      <div className="TopBar-links">
      <Link to="/" className="TopBar-link">Home</Link>
        <a href="#" className="TopBar-link">Products</a>
        <a href="#" className="TopBar-link">About</a>
      </div>
    </nav>
  );
}

export default TopBar;