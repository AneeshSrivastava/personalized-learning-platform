import React from "react";
import { Link } from "react-router-dom";

interface CardItemProps {
  _id: string;
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  tags: string[];
  summary: string;
  level: string;
  topic: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const CardItem = (props: CardItemProps) => {
  return (
    <li className="cards__item">
      <Link className="cards__item__link" to={props.url}>
        <figure className="cards__item__pic-wrap" data-category={props.topic}>
          <img
            className="cards__item__img"
            alt={props.title}
            src={props.thumbnail}
          />
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{props.title}</h5>
          <p className="cards__item__summary">{props.description}</p>
          <div className="level-tag">
            <span>{props.level}</span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CardItem;
