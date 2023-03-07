import React from 'react';

import './Portfolio.css';
import arrow from '../../images/arrow.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className='portfolio__link-item'>
          <a
            href="https://togglenezt.github.io/how-to-learn/"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer">
            <p className="portfolio__text">Статичный сайт</p>
          </a>
          <img className="portfolio__image" src={arrow} alt="стрелка" />
        </li>
        <li className='portfolio__link-item'>
          <a
            href="https://togglenezt.github.io/russian-travel/"
            className="portfolio__link portfolio__link-border"
            target="_blank"
            rel="noreferrer">
            <p className="portfolio__text">Адаптивный сайт</p>
          </a>
          <img className="portfolio__image" src={arrow} alt="стрелка" />
        </li>
        <li className='portfolio__link-item'>
          <a
            href="https://github.com/togglenezt/react-mesto-auth"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer">
            <p className="portfolio__text">Одностраничное приложение</p>
          </a>
          <img className="portfolio__image" src={arrow} alt="стрелка" />
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
