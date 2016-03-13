module.exports = function(req, res){

  Post.find()
    .sort('id DESC')
    .limit(1)
    .exec(function(err, posts){
      res.view(
        'homepage',
        ( posts ? {post: posts[0]} : {post: false} )
      );
    });
    
};
