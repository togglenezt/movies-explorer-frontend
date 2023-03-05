import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import movieImage from '../../images/card-saved.png';

const movies = [
  { _id: 1, image: movieImage, nameRU: '33 слова о дизайне', duration: '1ч 42м', saved: true },
  { _id: 2, image: movieImage, nameRU: '34 слова о дизайне', duration: '1ч 42м', saved: false },
  { _id: 3, image: movieImage, nameRU: '35 слов о дизайне', duration: '1ч 42м', saved: false },
];

function SavedMovies() {
  return (
    <section className="movies">
      <Header />
      <SearchForm />
      <MoviesCardList cards={movies} isSavedFilms={true} />
      <Footer />
    </section>
  );
}

export default SavedMovies;
