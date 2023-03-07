import React from 'react';
import photo from '../../images/myphoto.jpg';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__content">
          <h3 className="about-me__large-title">Никита</h3>
          <p className="about-me__info">Фронтенд-разработчик, 24 года</p>
          <p className="about-me__description">
            Сферу фронтэнд разработки выбрал потому, что она интересна мне с точки зрения 
            изучения новых фреймворков и библиотек, возможностей реализации задач различными способами, знакомств с интересными людьми, 
            перспективы. Отсутствия привязки к определённому месту жительства. Хочу развиваться в этом направлении, постоянно
            расширяя и углубляя свои знания.
          </p>
          <a
            href="https://github.com/togglenezt"
            className="about-me__link"
            target="_blank"
            rel="noreferrer">
            Github
          </a>
        </div>
        <img src={photo} alt="фото" className="about-me__photo" />
      </div>
    </section>
  );
}

export default AboutMe;
