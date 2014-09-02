/** @jsx React.DOM */

'use strict';

var React = require('react');

var FavoriteButton = React.createClass({
  getInitialState: function () {
    return { isFavorited: false };
  },

  handleClick: function () {
    this.setState({ isFavorited: !this.state.isFavorited });
  },

  componentDidMount: function () {
    // set initial state on mount
    this.setState({ isFavorited: this.props.isFavorited });
  },

  render: function () {
    var text = this.state.isFavorited ? 'Favorited' : 'Favorite';
    return (
      <button onClick={this.handleClick} className="btn btn-primary">{text}</button>
    )
  }
});

module.exports = FavoriteButton;
