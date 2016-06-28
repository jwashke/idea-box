var view = {
  displayIdeas: function() {
    $('.ideas').empty();
    ideaService.getIdeas();
  },
  setupListeners: function() {
    this.setupSubmitListener();
  },
  setupSubmitListener() {
    $('#submit').click(handlers.createIdea);
  },
  setupDeleteListener(id) {
    var buttonId = '#' + id
    $(buttonId).click(handlers.deleteIdea);
  }
}
