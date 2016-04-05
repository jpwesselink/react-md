import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classnames from 'classnames';

import { InkHOC } from '../Inks';

class ListTile extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    component: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]).isRequired,
    className: PropTypes.string,
    children: PropTypes.node,

    // Injected from InkHOC
    inks: PropTypes.node.isRequired,
  };

  render() {
    const { component, inks, className, children, ...props } = this.props;
    return React.createElement(component, {
      role: 'button',
      ...props,
      className: classnames('md-list-tile', className),
    }, [inks, children]);
  }
}

export default InkHOC(ListTile);
