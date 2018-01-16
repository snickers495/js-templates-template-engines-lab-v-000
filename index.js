function createPost() {

  ////Blog Values///
  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value
  var postText = document.getElementById("postText").value;

  ////Template/////
  var postTemplate = document.getElementById("post-template").innerHTML;
  var postTemplateFn = _.template(postTemplate);
  var pageTemplate = document.getElementById("post-template").innerHTML;
  var pageTemplateFn = _.template(pageTemplate);
  
  var postDiv = document.getElementById("post");
  var templateHTML = templateFn({ 'postTitle': postTitle, 'postAuthor': postAuthor; 'postText': postText });
  postDiv.innerHTML += templateHTML;
}
