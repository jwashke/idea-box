var view = {
  displayIdeas: function() {
    $('.ideas').empty();
    $.getJSON("/api/v1/ideas").then(function(response) {
      var ideas = response.ideas
      ideas.forEach(function(idea) {
        $('.ideas').append(
          "<div class='col-xs-12 idea-info idea-" + idea.id + "'>" +
            "<h4>" + idea.title + "</h4>" +
            "<p>" + idea.body + "</p>" +
            "<p>" + idea.quality + "</p>" +
          "</div>"
        );
      });
    })
  }
}
