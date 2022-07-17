import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

//styles
import './create.css';

export default function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);

  //custom GET/POST hook
  const url = `http://localhost:3000/recipes`;
  const { postData, data } = useFetch(url, 'POST');

  //browswerRouter hook
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    postData({
      title,
      method,
      cookingTime: `${cookingTime} minutes`,
      ingredients,
    });
    console.log(title, method, cookingTime, ingredients);
  }

  //redirect user to homepage when we get response
  useEffect(() => {
    if (data) {
      navigate('/');
    }
  }, [data, navigate]);

  function handleAdd(e) {
    e.preventDefault();
    //.trim - removes any whitespace from string
    const ing = newIngredient.trim();
    // checks to see if there is a repeat value of ingredients. If there isn't then code will fire.
    if (ing && !ingredients.includes(ing)) {
      // spreads previous ingredients and adds new ingredient to array
      //this also works:
      // setIngredients([...prevIngredients, ing])
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }

    setNewIngredient('');
  }

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
        </label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />

        {/* ingredients go here */}
        <label>
          <span>Recipe Ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
            />
            <button className="button" onClick={handleAdd}>
              Add
            </button>
          </div>
        </label>
        {/* maps through ing and add , to each when displayed */}
        <p>
          Current ingredients:
          {ingredients.map((i) => (
            <em key={i}>{i}, </em>
          ))}
        </p>

        <label>
          <span>Recipe method:</span>
        </label>
        <textarea
          onChange={(e) => setMethod(e.target.value)}
          value={method}
          required
        />
        <label>
          <span>Cooking time (minutes):</span>
        </label>
        <input
          type="number"
          onChange={(e) => setCookingTime(e.target.value)}
          value={cookingTime}
          required
        />
        <button className="button">Submit</button>
      </form>
    </div>
  );
}
