/**
 * ArchiveController
 *
 * @description :: Server-side logic for managing Archives
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  view: function(req, res){
    var limit = 5,
        page = req.params.page ? req.params.page : 1;

    Post.find({
        draft: {not: true}
      })
      .sort('id DESC')
      .paginate({page: page, limit: limit})
      .exec(function(err, posts){
        res.view('archive', {
          page: page,
          posts: posts
        });
      });

  },

  pager: function(req, res){
    var counts = {
      before: false,
      after: false
    };

    Post.count({
        id: {'>': req.params.id}
      })
      .exec(function(err, count){
        counts.after = count;
        returnCounts();
      });

    Post.count({
        id: {'<': req.params.id}
      })
      .exec(function(err, count){
        counts.before = count;
        returnCounts();
      });

    function returnCounts(){
      if (counts.before && counts.after) res.json(counts);
      else return false;
    }
  }

};
