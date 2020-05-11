import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {SmallMovieCard} from "../SmallMovieCard/SmallMovieCard.jsx";
import {connect} from "react-redux";

class CatalogMoviesList extends PureComponent {
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
    const {films, genre} = this.props;
    return <div className="catalog__movies-list">
      {films.filter(film => genre !== "All genres" ? film.genre === genre : true).map(item => {
        return <SmallMovieCard key={`film-${item.id}`} film={item} onHover={this._itemHoverHandler.bind(this, item)}/>
      })}
    </div>;
  }
}

CatalogMoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  })),
};

const mapStateToProps = state => ({
  genre: state.genre
});

export {CatalogMoviesList}

export default connect(
  mapStateToProps,
)(CatalogMoviesList);
