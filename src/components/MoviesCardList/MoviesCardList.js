import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import testMovieImage from "../../images/card-saved.png";

import './MoviesCardList.css';

function MoviesCardList(props) {
  return (
    <section className="cards">
      <ul className="cards__list">
        <MoviesCard
          title="33 слова о дизайне"
          isMovieSaved={true}
          duration="1ч 47м"
          movieImage={testMovieImage}
          moviesList={props.moviesList}
        />
        <MoviesCard
          title="33 слова о дизайне"
          isMovieSaved={false}
          duration="1ч 47м"
          movieImage={testMovieImage}
          moviesList={props.moviesList}
        />
        <MoviesCard
          title="33 слова о дизайне"
          isMovieSaved={false}
          duration="1ч 47м"
          movieImage={testMovieImage}
          moviesList={props.moviesList}
        />
        <MoviesCard
          title="33 слова о дизайне"
          isMovieSaved={true}
          duration="1ч 47м"
          movieImage={testMovieImage}
          moviesList={props.moviesList}
        />
      </ul>
      <div className="cards__button-container">
        <button className="cards__button">Ещё</button>
      </div>
    </section >
  );
}

export default MoviesCardList;
