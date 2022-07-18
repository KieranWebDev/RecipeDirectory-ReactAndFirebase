import { Link } from 'react-router-dom';
import { useContext } from 'react';

//styles
import './navbar.css';

//components
import SearchBar from '../searchBar/Searchbar';
import { ThemeContext } from '../../context/ThemeContext';

export default function Navbar() {
  const { color } = useContext(ThemeContext);

  return (
    <div className="navbar" style={{ background: color }}>
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
