/** @jsx React.DOM */

'use strict';

var React = require('react');
var Tweet = require('./Tweet.js');

var TweetList = React.createClass({

  componentDidMount: function () {
    this.props.tweets.on('add remove reset', function () {
      console.log('triggered listener');
      this.forceUpdate();
    }.bind(this));
  },

  render: function () {
    var sampleStatus = "javascript, it's the best!";
    var tweets = this.props.tweets.map(function (tweet) {
      //return <Tweet name={tweet.get('name')} status={tweet.get('status')} tweetId={tweet.get('id')} isFavorited={tweet.get('isFavorited')} />
      /** pass model instead **/
      return <Tweet model={tweet} />
    });

    return (
      <section className="tweetlist">{tweets}</section>
    );
  }
});

module.exports = TweetList;
