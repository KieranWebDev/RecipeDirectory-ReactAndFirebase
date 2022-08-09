import './recipeList.css';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { projectFireStore } from '../../assets/firebase/config';

import Trashcan from '../../assets/trashcan.svg';

export default function RecipeList({ recipes }) {
  const { mode } = useTheme();

  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>;
  }

  const handleClick = (id) => {
    projectFireStore.collection('recipes').doc(id).delete();
  };

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div className={`card ${mode}`} key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make </p>
          <div>{recipe.tagLine}</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
          <img
            className="delete"
            src={Trashcan}
            alt="delete-item"
            onClick={() => handleClick(recipe.id)}
          ></img>
        </div>
      ))}
    </div>
  );
}
