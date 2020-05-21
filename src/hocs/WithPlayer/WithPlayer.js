import React, {PureComponent} from 'react';

const withPlayer = (Component) => {
  class WithPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {}
    }
  }
};
