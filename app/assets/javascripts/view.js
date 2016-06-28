var view = {
  displayIdeas: function() {
    $('.ideas').empty();
    ideaService.getIdeas();
  }
}
