function createPost() {
  
    ////Blog Values///
    var postTitle = document.getElementById("postTitle").value;
    var postAuthor = document.getElementById("postAuthor").value
    var postText = document.getElementById("postText").value;

    ////Template/////
    var postTemplate = document.getElementById("post-template").innerHTML;
    var postTemplateFn = _.template(postTemplate);
    var pageTemplate = document.getElementById("page-template").innerHTML;
    var pageTemplateFn = _.template(pageTemplate);
    var commentsTemplate = document.getElementById("comments-template").innerHTML;
    var commentsTemplateFn = _.template(commentsTemplate);

    var main = document.getElementsByTagName("main")[0];
    main.innerHTML += pageTemplateFn();
    var postTemplateHTML = postTemplateFn({ 'postTitle': postTitle, 'postAuthor': postAuthor; 'postText': postText });
    var postDiv = postDiv = document.getElementById("post");
    postDiv.innerHTML += postTemplateHTML;
    var postFooter = document.querySelector('footer');
    postFooter.innerHTML = commentsTemplateFn();
}

function postComment(){
  var commenter = document.getElementById("commenterName").value
  var comment = document.getElementById("commenterText").value
}
