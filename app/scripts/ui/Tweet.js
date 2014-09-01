/** @jsx React.DOM */

'use strict';

var React = require('react');
var FavoriteButton = require('./FavoriteButton.js');

var Tweet = React.createClass({

  render: function () {

    return (
      <article>
        <h4>{this.props.name}</h4>
        <p>{this.props.status}</p>
        <div><FavoriteButton tweetId={this.props.tweetId} isFavorited={this.props.isFavorited} /> </div>
      </article>
    )
  }

});

module.exports = Tweet;
