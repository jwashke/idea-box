var ideaService = {
  getIdeas: function() {
    $.getJSON("/api/v1/ideas").then(function(response) {
      var ideas = response.ideas
      ideas.forEach(function(idea) {
        idea.html =
          "<div class='col-xs-12 idea-info idea-" + idea.id + "'>" +
            "<h4 class='icon-title'>" + idea.title + "</h4> " +
            "<a class='icon-button delete-button pull-right delete-" + idea.id + "' id='" + idea.id + "'><i id='" + idea.id + "'class='fa fa-times fa-lg deleteButton'></i></a>" +
            "<p>" + idea.body + "</p>" +
            "<p>Quality: " + idea.quality +
            "<br><a class='icon-button thumbs-up-" + idea.id + "' id='" + idea.id + "'><i id='" + idea.id + "' class='fa fa-thumbs-up fa-lg thumbsUpButton'></i></a>" +
            "    <a class='icon-button thumbs-down-" + idea.id + "' id='" + idea.id + "'><i id='" + idea.id + "' class='fa fa-thumbs-down fa-lg thumbsDownButton'></i></a></p>" +
          "<br><hr class='idea-line'><br></div>";
          ideaList.ideas.push(idea)
      });
      view.drawIdeas();
    });
  },
  createIdea: function(title, body) {
    $.post(
      "/api/v1/ideas",
      {
        title: title,
        body: body
      }
    ).then(function(response) {
      var idea = {
        id: response.id,
        title: title,
        body: body,
        quality: response.quality
      }
      ideaList.ideas.unshift(idea);
      view.drawIdeas();
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
    var url = '/api/v1/thumbs?id=' + id
    $.ajax({
      url: url,
      type: 'POST'
    });
  },
  thumbsDownIdea: function(id) {
    var url = '/api/v1/thumbs?id=' + id
    $.ajax({
      url: url,
      type: 'DELETE'
    });
  }
}
