/** @jsx React.DOM */

'use strict';

var React = require('react');
var Tweet = require('./Tweet.js');

var TweetList = React.createClass({
  render: function () {
    var sampleStatus = "javascript, it's the best!";
    var tweets = <Tweet name="gerard" status={sampleStatus} tweetId="1" isFavorited="false" />
    return (
      <section className="tweetlist">{tweets}</section>
    );
  }
});

module.exports = TweetList;
