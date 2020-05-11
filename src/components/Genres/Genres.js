import React from "react";
import {connect} from "react-redux";

import {ActionCreator} from "../../actions";

const genres = ["All genres", "Comedies", "Crime", "Documentary", "Dramas", "Horror", "Kids & Family", "Romance", "Sci-Fi", "Thrillers"];

const Genres = ({genre, onChangeGenre}) => {
  const handleClick = (e, item) => {
    e.preventDefault();
    onChangeGenre(item);
  };

  return <ul className="catalog__genres-list">
    {
      genres.map((item, i) =>
        <li className={`catalog__genres-item ${genre === item ? "catalog__genres-item--active" : ""}`}
            key={`genre-${i}`}>
          <a href="#" className="catalog__genres-link" onClick={(e) => handleClick(e, item)}>{item}</a>
        </li>
      )
    }
  </ul>;
};

const mapStateToProps = state => ({
  genre: state.genre
});

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre: (genre) => dispatch(ActionCreator.setGenre(genre)),
});

export {Genres};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Genres);
