import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import './SavedMovies.css';

function SavedMovies() {
  return (
    <section className="movies">
      <Header />
      <SearchForm />
      <MoviesCardList moviesList="saved"/>
      <Footer />
    </section>
  );
}

export default SavedMovies;
