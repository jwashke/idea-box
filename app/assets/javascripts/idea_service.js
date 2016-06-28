var ideaService = {
  getIdeas: function() {
    $.getJSON("/api/v1/ideas").then(function(response) {
      var ideas = response.ideas
      ideas.forEach(function(idea) {
        $('.ideas').append(
          "<div class='col-xs-12 idea-info idea-" + idea.id + "'>" +
            "<h4 class='icon-title'>" + idea.title + "</h4> " +
            "<a class='icon-button delete-button pull-right delete-" + idea.id + "' id='" + idea.id + "'><i class='fa fa-times fa-lg'></i></a>" +
            "<p>" + idea.body + "</p>" +
            "<p>Quality: " + idea.quality +
            "    <a class='icon-button thumbs-up-" + idea.id + "' id='" + idea.id + "'><i class='fa fa-thumbs-up fa-lg'></i></a>" +
            "    <a class='icon-button thumbs-down-" + idea.id + "' id='" + idea.id + "'><i class='fa fa-thumbs-down fa-lg'></i></a></p>" +
          "<br><hr class='idea-line'><br></div>"
        );
        view.setupIdeaListeners(idea.id);
      });
    });
  },
  createIdea: function(title, body) {
    $.post(
      "/api/v1/ideas",
      {
        title: title,
        body: body
      }
    );
  },
  deleteIdea: function(id) {
    var url = '/api/v1/ideas/' + id
    $.ajax({
      url: url,
      type: 'DELETE'
    });
  },
  thumbsUpIdea: function(id) {
    console.log('up: ' + id);
  },
  thumbsDownIdea: function(id) {
    console.log('down: ' + id);
  }
}
