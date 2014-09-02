/** @jsx React.DOM */

'use strict';

var React = require('react');
var Model = require('backbone').Model;
var radio = require('radio');

var TweetCreator = React.createClass({
  getInitialState: function () {
    return { isFavorited: false };
  },

  sendTweet: function () {
    console.log(this.state);
    var tweet = new Model(this.state);
    radio('new-tweet').broadcast(tweet);
  },

  handleChange: function (e) {
    console.log('handling Change', e.target.id, e.target.value, e.target);
    var obj = {};
    obj[e.target.id] = e.target.value;
    this.setState(obj);
  },

  render: function () {

    return (
      <section>
        <div class="">
          <input type="text" id="name" onChange={this.handleChange} className="form-control" placeholder="Username" />
          <textarea ref="status" id="status" onChange={this.handleChange} placeholder="Status" className="form-control" />
          <button className="btn btn-primary" onClick={this.sendTweet}>Send Tweet</button>
        </div>
      </section>
    );
  }
});

module.exports = TweetCreator;
