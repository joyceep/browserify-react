'use strict';

var Backbone = require('backbone');

var Router = Backbone.Router.extend({

  initialize: function (options) {
    this.TwitterClient = options.TwitterClient;
  },

  routes: {
    '': 'index'
  },

  index: function () {
    console.log('on index route', this.TwitterClient);
  }

});

module.exports = Router;
