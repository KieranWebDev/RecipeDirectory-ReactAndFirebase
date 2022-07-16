import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
//styles
import './App.css';

//pages
import Home from '../src/pages/home/Home';
import Create from '../src/pages/create/Create';
import Recipe from '../src/pages/recipe/Recipe';
import Search from '../src/pages/search/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
