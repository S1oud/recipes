// RecipeCard.js
import React from 'react';
import '../components/RecipeCard.css'; // Import CSS file for styling

function RecipeCard({ recipe }) {
    return (
        <div className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
        </div>
    );
}

export default RecipeCard;
