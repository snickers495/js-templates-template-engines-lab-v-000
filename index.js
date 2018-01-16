function createPost(){
  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value
  var postText = document.getElementById("postText").value;
  var postTemplate = document.getElementById("post-template").innerHTML
  var templateFn = _.template(postTemplate)
}
