module.exports = function(req, res){
  Post.find({
    draft: true
  }).exec(function(err, posts){
    res.view('drafts',{
      posts: (posts ? posts : false)
    });
  });
}
