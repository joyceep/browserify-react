/** @jsx React.DOM */

'use strict';

var React = require('react');
var FavoriteButton = require('./FavoriteButton.js');
var radio = require('radio');
var Tweet = React.createClass({

  componentDidMount: function () {
    radio('sample').subscribe(function (data) {
      console.log('subscribed', data);
    });
  },

  render: function () {
    return (
      <article data-tweet-id={this.props.tweetId}>
        <h4>{this.props.name}</h4>
        <p>{this.props.status}</p>
        <div><FavoriteButton tweetId={this.props.tweetId} isFavorited={this.props.isFavorited} /> </div>
      </article>
    )
  }

});

module.exports = Tweet;
