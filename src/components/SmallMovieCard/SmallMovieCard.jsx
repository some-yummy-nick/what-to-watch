import React from "react";
import PropTypes from "prop-types";
import {VideoPlayer} from "../VideoPlayer/VideoPlayer.jsx"
export const SmallMovieCard = (props) => {
  const {film, onHover} = props;
  return <article className="small-movie-card catalog__movies-card" onMouseOver={onHover}>
      <VideoPlayer src={film.video} poster={film.image}/>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">{film.name}</a>
    </h3>
  </article>;
};

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    video: PropTypes.string
  }),
  onHover: PropTypes.func
};
