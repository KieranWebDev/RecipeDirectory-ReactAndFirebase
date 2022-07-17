import { useState } from 'react';

//styles
import './create.css';

export default function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(title, method, cookingTime);
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
