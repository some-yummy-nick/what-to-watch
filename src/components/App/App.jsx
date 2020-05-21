import React from "react";
import {connect} from "react-redux";

import Main from "../Main/Main.jsx";

const App = ({films}) =>
  <Main films={films}/>;

const mapStateToProps = state => ({
  films: state.films
});

export {App};

export default connect(
  mapStateToProps,
)(App);
