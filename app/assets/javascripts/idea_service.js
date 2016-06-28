var ideaService = {
  getIdeas: function() {
    $.getJSON("/api/v1/ideas").then(function(response) {
      var ideas = response.ideas
      ideas.forEach(function(idea) {
        $('.ideas').append(
          "<div class='col-xs-12 idea-info idea-" + idea.id + "'>" +
            "<h4>" + idea.title + "</h4>" +
            "<p>" + idea.body + "</p>" +
            "<p>" + idea.quality + "</p>" +
            "<a id='" + idea.id + "'>Delete</a>" +
          "</div>"
        );
        view.setupDeleteListener(idea.id);
      });
    });
  },
  createIdea: function(title, body) {
    $.post(
      "api/v1/ideas",
      {
        title: title,
        body: body
      }
    );
    console.log('making new idea!');
  }
}
