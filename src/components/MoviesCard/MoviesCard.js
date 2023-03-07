import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {
  return (
    <li className="card">
      <div className="card__container">
        <div className="card__info-container">
          <h2 className="card__text">{props.title}</h2>
          <span className="card__time">{props.duration}</span>
        </div>
        {props.moviesList === "all" ? (
          <button
            className={`card__save-button ${props.isMovieSaved ? "card__save-button_active" : ""
              }`}
            type="button"
          />
        ) : (
          <button
            className="card__delete-button"
            type="button"
          />
        )}
      </div>
      <img
        className="card__image"
        alt={props.title}
        src={props.movieImage}
      />
    </li>
  );
}

export default MoviesCard;
