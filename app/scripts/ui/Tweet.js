/** @jsx React.DOM */

'use strict';

var React = require('react');
var FavoriteButton = require('./FavoriteButton.js');
var radio = require('radio');
var Tweet = React.createClass({

  getInitialState: function () {
    return { isFavorited: false };
  },

  componentDidMount: function () {
    radio('sample').subscribe(function (data) {
      console.log('subscribed', data);
    });

    this.setState({ isFavorited: this.props.isFavorited });
    this.props.model.on('change', function (obj) {
      console.log('something changed', obj);
      //call save event here
    });
  },

  handleClick: function () {

    console.log('favorite clicking', this.refs.favoriteButton);
  },

  render: function () {
    var model = this.props.model;
    return (
      <article data-tweet-id={model.get('tweetId')}>
        <h4>{model.get('name')}</h4>
        <p>{model.get('status')}</p>
        <div><FavoriteButton model={model} /> </div>
      </article>
    )
  }

});

module.exports = Tweet;
