import React from 'react';
import './ProjectCard.scss';

const ProjectCard = ({ id, title, desc, img, link }) => {
  return (
    <article className="card" key={id}>
      <div className="w-full h-full flex justify-center img-bg">
        <img
          className="card__background"
          src={img}
          alt={title}
        />
      </div>

      <div className="card__content flow">
        <div className="card__content--container flow">
          <h2 className="card__title text-3xl md:text-4xl">{title}</h2>
          <p className="card__description">
            {desc}
          </p>
        </div>
        <a className="card__button" href={link} target="_blank" rel="noopener noreferrer">Link</a>
      </div>
    </article>
  );
};

export default ProjectCard;