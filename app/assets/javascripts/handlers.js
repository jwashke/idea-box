var handlers = {
  createIdea: function() {
    var newIdeaTitleInput = $('#newTitle');
    var newIdeaBodyInput = $('#newBody');
    console.log(newIdeaTitleInput.val());
    console.log(newIdeaBodyInput.val());
    //ideas.createIdea(newIdeaTitleInput.val(), newIdeaBodyInput.val());
    newIdeaTitleInput.val('');
    newIdeaBodyInput.val('');
    view.displayIdeas();
  }
}
