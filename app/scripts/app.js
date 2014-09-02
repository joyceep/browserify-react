/** @jsx React.DOM */


/**
 * React Setup
 * assign react to a global variable to enable react dev tools
 */
var React = require('react');
window.React = React;
var Backbone = require('backbone');
var Router = require('./router.js');
var TweetList = require('./ui/TweetList.js');
var Tweets = require('./collections/Tweets.js');
var TweetCreator = require('./ui/CreateTweet.js');

var radio = require('radio');
/** assign Backbone.$ manually */
Backbone.$ = $;


var TwitterClient = React.createClass({

  getDefaultProps: function () {
    return { tweets: [] }
  },

  componentDidMount: function () {
    var router = new Router({ TwitterClient: this });
    Backbone.history.start();
    radio('new-tweet').subscribe(function (tweet) {
      this.props.tweets.add(tweet);
    }.bind(this));
    // do collection fetch here
  },

  handleClick: function () {
    alert('hello react');
  },

  render: function () {
    console.log('has tweets', this.props.tweets);
    return (
      <div className="container">
      <header onClick={this.handleClick}><h1>Twitter Client</h1></header>
      { /* pass tweets collection here later */ }

      <div className="row">
      <div className="col-lg-7">
        <TweetList tweets={this.props.tweets} />
      </div>

      <div className="col-lg-5">
        <TweetCreator />
      </div>

      </div>
      </div>
    );

  }
});

window.tweets = new Tweets([{
  name: 'albert',
  status: 'Gilas Pilipinas #puso',
  tweetId: 49,
  isFavorited: false,
  id: 1
}, {
  name: 'gerard',
  status: 'alahu akbar! Kill the Christian Babies! #allah',
  tweetId: 666,
  isFavorited: true,
  id: 2
}, {
  name: 'aaron',
  status: 'dongabontakaran! #iamthebest',
  tweetId: 69,
  isFavorited: false,
  id: 3
}]);

/** render main app */
React.renderComponent(<TwitterClient tweets={window.tweets} />, document.body);
