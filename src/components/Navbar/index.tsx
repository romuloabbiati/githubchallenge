import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar bg-primary navbar-dark main-nav">
        <div className='container-fluid'>
            <Link to="/" className="nav-text">
                <h4>Github API</h4>
            </Link>
        </div>
    </nav>
  );
};

export default Navbar;
