import { useEffect, useState } from 'react';
import { projectFireStore } from '../../assets/firebase/config';

//components
import RecipeList from '../../components/RecipeList/RecipeList';

//styles
import './home.css';

// custom hook for fetching data from json server
// import { useFetch } from '../../hooks/useFetch.js';

export default function Home() {
  //  CUSTOM HOOK FOR IMPORTING DATA FROM JSON SERVER- WAS USED BEFORE IMPLEMENTING FIREBASE
  // const {
  //   data: recipes,
  //   isPending,
  //   error,
  // } = useFetch(`http://localhost:3000/recipes`);

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFireStore.collection('recipes').onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError('No recipes to load');
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            // console.log(doc)
            results.push({ ...doc.data(), id: doc.id });
          });
          setData(results);
          setIsPending(false);
        }
      },
      (err) => {
        setError(err.message);
        setIsPending(false);
      }
    );

    return () => unsub();
  }, []);

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
