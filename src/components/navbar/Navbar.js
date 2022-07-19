import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
//styles
import './navbar.css';

//components
import SearchBar from '../searchBar/Searchbar';

export default function Navbar() {
  const { color } = useTheme();

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
