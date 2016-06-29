var ideaService = {
  getIdeas: function() {
    $.getJSON("/api/v1/ideas").then(function(response) {
      var ideas = response.ideas
      ideas.forEach(function(idea) {
        if (idea.body.length > 100) {
          idea.body = idea.body.substring(0, 100).split(" ").slice(0, -1).join(" ") + "...";
        }
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
      if (idea.body.length > 100) {
        idea.body = idea.body.substring(0, 100).split(" ").slice(0, -1).join(" ") + "...";
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
  },
  editIdea: function(id, value, field) {
    var url = '/api/v1/ideas/' + id;
    $.ajax({
      url: url,
      type: 'PATCH',
      data: {
        field: field,
        value: value
      }
    })
  }
}
