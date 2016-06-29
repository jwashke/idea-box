var view = {
  displayIdeas: function() {
    ideaService.getIdeas();
  },
  drawIdeas: function() {
    $('.ideas').empty();
    ideaList.ideas.forEach(function(idea) {
      idea.html = "<div class='col-xs-12 idea-info idea-" + idea.id + "'>" +
            "<h4 class='icon-title'>" + idea.title + "</h4> " +
            "<div class=idea-'" + idea.id + "'><a class='icon-button delete-button pull-right delete-" + idea.id + "' id='" + idea.id + "'><i id='" + idea.id + "'class='fa fa-times fa-lg deleteButton'></i></a></div>" +
            "<p>" + idea.body + "</p>" +
            "<p>Quality: " + idea.quality +
            "<br><a class='icon-button thumbs-up-" + idea.id + "' id='" + idea.id + "'><i id='" + idea.id + "' class='fa fa-thumbs-up fa-lg thumbsUpButton'></i></a>" +
            "    <a class='icon-button thumbs-down-" + idea.id + "' id='" + idea.id + "'><i id='" + idea.id + "' class='fa fa-thumbs-down fa-lg thumbsDownButton'></i></a></p>" +
          "<br><hr class='idea-line'><br></div>";
      $('.ideas').append(idea.html);
    });
  },
  setupListeners: function() {
    this.setupSubmitListener();
  },
  setupSubmitListener: function() {
    $('#submit').click(handlers.createIdea);
  },
  setupIdeaListener: function() {
    $('.ideas').click(function(event) {
      handlers.delegateClick(event);
    })
  }
}
