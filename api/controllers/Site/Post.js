module.exports = function(req, res){

  Post.findOne({id: req.params.id})
    .populate('content')
    .exec(function(err, post){
      res.view('post', {post: post});
    });

}
