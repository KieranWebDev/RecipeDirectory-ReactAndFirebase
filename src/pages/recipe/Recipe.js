import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

//styles
import './recipe.css';

export default function Recipe() {
  const { id } = useParams();
  const url = `http://localhost:3000/recipes/${id}`;

  const { data: recipe, isPending, error } = useFetch(url);
  return (
    <div>
      {isPending && <p className="loading">loading...</p>}
      {error && <p className="error">sorry, no data</p>}
      {recipe && (
        <div>
          <h1> {recipe.title}</h1>
          <h3>{recipe.ingredients}</h3>
          <p>{recipe.method}</p>
          <p>{recipe.cookingTime}</p>
        </div>
      )}
    </div>
  );
}
