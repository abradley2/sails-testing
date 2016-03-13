/**
 * SiteController
 *
 * @description :: Server-side logic for managing Sites
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  Home: require('./Site/Home.js'),
  Archive: require('./Site/Archive.js'),
  Drafts: require('./Site/Drafts.js'),
  EditPost: require('./Site/EditPost.js'),
  Post: require('./Site/Post.js')

};
