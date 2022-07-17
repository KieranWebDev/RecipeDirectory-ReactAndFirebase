import { useFetch } from '../../hooks/useFetch.js';

import './home.css';
export default function Home() {
  const {
    data: recipes,
    isPending,
    error,
  } = useFetch(`http://localhost:3000/recipes`);

  return (
    <div className="home">
      {error && <p className="error">Sorry, could not get that data</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipes &&
        recipes.map((recipe) => <h2 key={recipe.id}>{recipe.title}</h2>)}
    </div>
  );
}
