// App.js
import React, { useState } from 'react';
import RecipeSearchForm from './components/RecipeSearchForm';
import RecipeList from './components/RecipeList';
import './app.css'; // Import CSS file for styling

function App() {
    const [recipes, setRecipes] = useState([]);
    const API_KEY = 'f0299218d3de46dd89aac7d994b86bbb';

    const handleSearch = async (query, dietOption) => {
        try {
            let url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`;
            if (dietOption) {
                url += `&diet=${dietOption}`;
            }
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setRecipes(data.results);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    return (
        <div className="container">
            <h1>Recipe Search App</h1>
            <RecipeSearchForm onSearch={handleSearch} />
            <RecipeList recipes={recipes} />
        </div>
    );
}

export default App;
