import React , {PureComponent} from "react";
import {Main} from "../Main/Main.jsx";

export class App extends PureComponent{
  constructor(props) {
    super(props);
  }
  render() {
    const {films} = this.props;

    return <Main films={films}/>;
  }
}
