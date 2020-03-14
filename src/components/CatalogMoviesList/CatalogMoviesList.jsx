import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {SmallMovieCard} from "../SmallMovieCard/SmallMovieCard.jsx";

export class CatalogMoviesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: {},
    };
  }

  _itemHoverHandler(item) {
    this.setState({
      activeCard: item
    });
  }

  render() {
    const {films} = this.props;
    return <div className="catalog__movies-list">
      {films.map((item, i) => {
        return <SmallMovieCard key={`film-${i}`} film={item} onHover={this._itemHoverHandler.bind(this, item)}/>
      })}
    </div>;
  }
}

CatalogMoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  })),
};
