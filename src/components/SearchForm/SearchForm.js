import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ onSearchMovies }) {
  console.log(onSearchMovies);
  return (
    <section className="search">
      <form className="search__form">
        <label className="search__label" htmlFor="search-input"></label>
        <input
          className="search__input"
          id="search-input"
          type="text"
          placeholder="Фильм"
          required></input>
        <button className="search__button" onClick={onSearchMovies} type="submit"></button>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
