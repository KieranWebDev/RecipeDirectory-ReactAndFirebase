import { useParams } from 'react-router-dom';
// import { useFetch } from '../../hooks/useFetch';
import { useTheme } from '../../hooks/useTheme';
import { useEffect, useState } from 'react';
import { projectFireStore } from '../../assets/firebase/config';
import { Helmet } from 'react-helmet';

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
    const unsub = projectFireStore
      .collection('recipes')
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setRecipe(doc.data());
        } else {
          setIsPending(false);
          setError('could not find that recipe.');
        }
      });
    return () => unsub();
  }, [id]);

  function handleClick() {
    projectFireStore.collection('recipes').doc(id).update({
      title: 'Very basic edit functionality',
    });
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Recipe</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
            {/* <button onClick={handleClick}>Update me</button> */}
          </div>
        )}
      </div>
    </>
  );
}
