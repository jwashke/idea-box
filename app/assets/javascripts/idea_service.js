var ideaService = {
  getIdeas: function() {
    $.getJSON("/api/v1/ideas").then(function(response) {
      var ideas = response.ideas
      ideas.forEach(function(idea) {
        if (idea.body.length > 100)
          idea.body = idea.body.substring(0, 100).split(" ").slice(0, -1).join(" ") + "...";
        var newIdea = new Idea(idea.id, idea.title, idea.body, idea.quality, idea.tags)
        ideaList.ideas.push(newIdea)
      });
      view.drawIdeas();
    });
  },
  createIdea: function(title, body, tags) {
    tags = tags.split(/[,] ?/)
    $.post(
      "/api/v1/ideas",
      {
        title: title,
        body: body,
        tags: tags
      }
    ).then(function(response) {
      if (body.length > 100)
        body = body.substring(0, 100).split(" ").slice(0, -1).join(" ") + "...";
      var newIdea = new Idea(response.id, title, body, response.quality, tags)
      ideaList.ideas.unshift(newIdea);
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
