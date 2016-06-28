var handlers = {
  createIdea: function() {
    var newIdeaTitleInput = $('#newTitle');
    var newIdeaBodyInput = $('#newBody');
    ideaList.createIdeaFromForm(newIdeaTitleInput.val(), newIdeaBodyInput.val());
    ideaService.createIdea(newIdeaTitleInput.val(), newIdeaBodyInput.val());
    newIdeaTitleInput.val('');
    newIdeaBodyInput.val('');
    view.drawIdeas();
  },
  deleteIdea: function(event) {
    var id = this.id;
    ideaService.deleteIdea(id);
    ideaList.deleteIdea(id)
    view.drawIdeas();
  },
  thumbsUpIdea: function() {
    var id = this.id;
    ideaService.thumbsUpIdea(id);
    view.drawIdeas();
  },
  thumbsDownIdea: function() {
    var id = this.id;
    ideaService.thumbsDownIdea(id);
    view.drawIdeas();
  }
}
