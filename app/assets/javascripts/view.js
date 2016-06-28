var view = {
  displayIdeas: function() {
    ideaService.getIdeas();
  },
  drawIdeas: function() {
    $('.ideas').empty();
    ideaList.ideas.forEach(function(idea) {
      $('.ideas').append(idea.html);
      view.setupIdeaListeners(idea.id);
    });
  },
  setupListeners: function() {
    this.setupSubmitListener();
  },
  setupSubmitListener: function() {
    $('#submit').click(handlers.createIdea);
  },
  setupIdeaListeners: function(id) {
    this.setupDeleteListener(id);
    this.setupThumbsUpListener(id);
    this.setupThumbsDownListener(id);
  },
  setupDeleteListener: function(id) {
    var buttonId = '.delete-' + id;
    $(buttonId).click(handlers.deleteIdea);
  },
  setupThumbsUpListener: function(id) {
    var buttonId = '.thumbs-up-' + id;
    $(buttonId).click(handlers.thumbsUpIdea);
  },
  setupThumbsDownListener: function(id) {
    var buttonId = '.thumbs-down-' + id;
    $(buttonId).click(handlers.thumbsDownIdea);
  }
}
