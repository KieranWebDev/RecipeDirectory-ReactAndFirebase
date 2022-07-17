import { useLocation } from 'react-router-dom';
import RecipeList from '../../components/RecipeList/RecipeList';
import { useFetch } from '../../hooks/useFetch';
//styles
import './search.css';

export default function Search() {
  //this gets the query string ?=q. it will get this once the user presses enter on the search.
  const queryString = useLocation().search;
  //parses data.- not sure how this works yet
  const queryParams = new URLSearchParams(queryString);
  //this gets us the value of the query parameter
  const query = queryParams.get('q');
  //pass query into url after ?=
  const url = `http://localhost:3000/recipes?q=${query}`;
  //calling and using the useFetch hook
  const { error, isPending, data } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">loading...</p>}
      {/* we cam reuse the recipeList component here */}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
