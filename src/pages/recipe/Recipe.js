import { useParams } from 'react-router-dom';
// import { useFetch } from '../../hooks/useFetch';
import { useTheme } from '../../hooks/useTheme';
import { useEffect, useState } from 'react';
import { projectFireStore } from '../../assets/firebase/config';

//styles
import './recipe.css';

export default function Recipe() {
  // const url = `http://localhost:3000/recipes/${id}`;
  // const { data: recipe, isPending, error } = useFetch(url);
  const { id } = useParams();

  const { mode } = useTheme();

  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);
    projectFireStore
      .collection('recipes')
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setRecipe(doc.data());
        } else {
          setIsPending(false);
          setError('could not find that recipe.');
        }
      });
  }, [id]);

  return (
    <div className={`recipe ${mode}`}>
      {isPending && <p className="loading">loading...</p>}
      {error && <p className="error">sorry, no data</p>}
      {recipe && (
        <div>
          <h2 className="page-title"> {recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className={`recipe ${mode}`}>{recipe.method}</p>
        </div>
      )}
    </div>
  );
}
