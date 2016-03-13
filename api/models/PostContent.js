/**
 * PostContent.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var marked = require('marked');

module.exports = {

  attributes: {

    intro: {
      type: 'text'
    },

    body: {
      type: 'text'
    }

  }

};
