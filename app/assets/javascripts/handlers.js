var handlers = {
  createIdea: function() {
    var newIdeaTitleInput = $('#newTitle');
    var newIdeaBodyInput = $('#newBody');
    ideaService.createIdea(newIdeaTitleInput.val(), newIdeaBodyInput.val());
    newIdeaTitleInput.val('');
    newIdeaBodyInput.val('');
  },
  deleteIdea: function(event) {
    var id = event.currentTarget.id;
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
  },
  delegateClick: function(event) {
    var target = event.target;
    var id = target.id
    if (target.className.includes('deleteButton')) {
      ideaService.deleteIdea(id);
      ideaList.deleteIdea(id)
      view.drawIdeas();
    } else if (target.className.includes('thumbsUpButton')) {
      ideaService.thumbsUpIdea(id);
      ideaList.thumbsUpIdea(id);
      view.drawIdeas();
    } else if (target.className.includes('thumbsDownButton')) {
      ideaService.thumbsDownIdea(id);
      ideaList.thumbsDownIdea(id);
      view.drawIdeas();
    }
  }
}
