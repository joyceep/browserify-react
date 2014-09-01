/** @jsx React.DOM */

'use strict';

var FavoriteButton = React.createClass({
  getInitialState: function () {
    return { isFavorited: false };
  },

  handleClick: function () {
    this.setState({ isFavorited: !this.state.isFavorited });
  },

  render: function () {

    var text = this.state.isFavorited ? 'favorited' : 'favorite';

    return (
      <button onClick={this.handleClick} className="btn btn-primary">{text}</button>
    )
  }
});

module.exports = FavoriteButton;
