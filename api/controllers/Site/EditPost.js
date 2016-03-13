module.exports = function(req, res){


  res.view(
    'EditPost',
    {post: post}
  );


}
