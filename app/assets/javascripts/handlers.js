var handlers = {
  createIdea: function() {
    var newIdeaTitleInput = $('#newTitle');
    var newIdeaBodyInput = $('#newBody');
    ideaService.createIdea(newIdeaTitleInput.val(), newIdeaBodyInput.val());
    newIdeaTitleInput.val('');
    newIdeaBodyInput.val('');
    view.displayIdeas();
  },
  deleteIdea: function(event) {
    var id = this.id;
    ideaService.deleteIdea(id);
    view.displayIdeas();
  },
  thumbsUpIdea: function() {
    var id = this.id;
    ideaService.thumbsUpIdea(id);
    view.displayIdeas();
  },
  thumbsDownIdea: function() {
    var id = this.id;
    ideaService.thumbsDownIdea(id);
    view.displayIdeas();
  }
}
