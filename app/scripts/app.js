/** @jsx React.DOM */

var React = require('react');
var Backbone = require('backbone');

// enables react dev tools
window.React = React;

var TweetList = require('./ui/TweetList.js');


var TwitterClient = React.createClass({

  componentDidMount: function () {

  },

  handleClick: function () {
    alert('hello react');
  },

  render: function () {

    return (
      <div className="container">
        <header onClick={this.handleClick}><h1>Twitter Client</h1></header>
        { /* pass tweets collection here later */ }

        <div clas="row">
          <div className="col-lg-7">
            <TweetList/>
          </div>

          <div className="col-lg-5">
            <p>Tweet Handler Goes Here</p>
          </div>

        </div>
      </div>
    );

  }
});



React.renderComponent(<TwitterClient />, document.body);

