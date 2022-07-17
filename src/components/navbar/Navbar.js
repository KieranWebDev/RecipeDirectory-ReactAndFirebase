import { Link } from 'react-router-dom';

//styles
import './navbar.css';

//components
import SearchBar from '../searchBar/Searchbar';

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link className="logo" to="/">
          <h1> Cooking Ninja</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}
