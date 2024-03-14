// RecipeSearchForm.js
import React, { useState } from 'react';
import '../styles/RecipeSearchForm.css'; // Import CSS file for styling

function RecipeSearchForm({ onSearch }) {
    const [query, setQuery] = useState('');
    const [dietOption, setDietOption] = useState(''); // State for selected diet option

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleDietChange = (event) => {
        setDietOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(query, dietOption); // Pass both query and diet option to the onSearch function
        setQuery(''); // Clear the search input after submitting
    };

    return (
        <form className="recipe-search-form" onSubmit={handleSubmit}>
            <select value={dietOption} onChange={handleDietChange} className="diet-select">
                <option value="">Select Diet Option</option>
                <option value="vegan">Vegan</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="carnivore">Carnivore</option>
                <option value="pescetarian">Pescetarian</option>
                <option value="keto">Keto</option>
                {/* Add more options as needed */}
            </select>
            <input
                type="text"
                placeholder="Search for recipes..."
                value={query}
                onChange={handleChange}
                className="search-input" // Add class for styling
            />
            <button type="submit" className="search-button">Search</button>
        </form>
    );
}

export default RecipeSearchForm;
