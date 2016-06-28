var ideaList = {
  ideas: [],
  createIdeaFromAjax: function(idea) {

  },
  createIdeaFromForm: function(title, body) {
    var idea = {
      title: title,
      body: body
    }
    idea.html =
      "<div class='col-xs-12 idea-info idea-" + idea.id + "'>" +
        "<h4 class='icon-title'>" + idea.title + "</h4> " +
        "<a class='icon-button delete-button pull-right delete-" + idea.id + "' id='" + idea.id + "'><i class='fa fa-times fa-lg'></i></a>" +
        "<p>" + idea.body + "</p>" +
        "<p>Quality: " + idea.quality +
        "<br><a class='icon-button thumbs-up-" + idea.id + "' id='" + idea.id + "'><i class='fa fa-thumbs-up fa-lg'></i></a>" +
        "    <a class='icon-button thumbs-down-" + idea.id + "' id='" + idea.id + "'><i class='fa fa-thumbs-down fa-lg'></i></a></p>" +
      "<br><hr class='idea-line'><br></div>";
      this.ideas.push(idea);
  },
  deleteIdea: function(id) {
    var index;
    this.ideas.some(function(idea, i) {
      if (idea.id === parseInt(id)) {
        index = i;
        return true;
      }
    })
    this.ideas.splice(index, 1);
  }
}
