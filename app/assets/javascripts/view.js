var view = {
  displayIdeas: function() {
    ideaService.getIdeas();
  },
  drawIdeas: function() {
    $('.ideas').empty();
    ideaList.ideas.forEach(function(idea) {
      idea.html = "<div id = '" + idea.id + "'class='col-xs-12 idea-info idea-" + idea.id + "'>" +
            "<h4 class='ideaTitle'>" + idea.title + "</h4> " +
            "<div class=idea-'" + idea.id + "'><a class='icon-button delete-button pull-right delete-" + idea.id + "' id='" + idea.id + "'><i id='" + idea.id + "'class='fa fa-times fa-lg deleteButton'></i></a></div>" +
            "<p class='ideaBody'>" + idea.body + "</p>" +
            "<p>Quality: " + idea.quality +
            "<br><a class='icon-button thumbs-up-" + idea.id + "' id='" + idea.id + "'><i id='" + idea.id + "' class='fa fa-thumbs-up fa-lg thumbsUpButton'></i></a>" +
            "    <a class='icon-button thumbs-down-" + idea.id + "' id='" + idea.id + "'><i id='" + idea.id + "' class='fa fa-thumbs-down fa-lg thumbsDownButton'></i></a></p>" +
          "<br><hr class='idea-line'><br></div>";
      $('.ideas').append(idea.html);
    });
  },
  setupListeners: function() {
    this.setupSubmitListener();
    this.setupSearchListener();
  },
  setupSubmitListener: function() {
    $('#submit').click(handlers.createIdea);
  },
  setupIdeaListeners: function() {
    $('.ideas').click(function(event) {
      handlers.delegateClick(event);
    });
    $('.ideas').focusout(function(event) {
      handlers.delegateFocusout(event);
    });
  },
  setupSearchListener: function() {
    $('#searchBar').on('input', function() {
      var searchTerm = this.value;
      handlers.searchIdeas(searchTerm);
    });
    $('#clearSearch').on('click', function() {
      $('#searchBar').val('');
      $('#searchBar').trigger('input');
    })
  }
}
