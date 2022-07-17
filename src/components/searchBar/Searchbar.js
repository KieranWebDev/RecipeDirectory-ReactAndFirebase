import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//styles
import './searchBar.css';

export default function Searchbar() {
  const [userSearch, setUserSearch] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/search?q=${userSearch}`);
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          onChange={(e) => setUserSearch(e.target.value)}
          required
        />
      </form>
    </div>
  );
}
