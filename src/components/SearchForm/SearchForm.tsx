import React, { useState } from 'react';
import axios from 'axios';
import SearchResults from '../SearchResult/SearchResult';
import './SearchForm.css';

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm) {
      try {
        const response = await axios.get(
          `https://api.openfoodfacts.org/products?search_terms=${searchTerm}`
        );
        const products = response.data.products;
        setSearchResults(products);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    }
  };

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entrez un produit à rechercher"
          value={searchTerm}
          onChange={handleInputChange}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Rechercher
        </button>
      </form>
      <SearchResults products={searchResults} />
    </div>
  );
}

export default SearchForm;





