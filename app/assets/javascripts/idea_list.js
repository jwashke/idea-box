var ideaList = {
  ideas: [],
  createIdeaFromAjax: function(idea) {

  },
  createIdeaFromForm: function(title, body) {
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
  },
  thumbsUpIdea: function(id) {
    var idea = this.ideas.find(function(idea) {
      return idea.id === parseInt(id);
    });
    if (idea.quality === "swill") {
      idea.quality = "plausible";
    } else if (idea.quality === "plausible") {
      idea.quality = "genius";
    }
  },
  thumbsDownIdea: function(id) {
    var idea = this.ideas.find(function(idea) {
      return idea.id === parseInt(id);
    });
    if (idea.quality === "genius") {
      idea.quality = "plausible";
    } else if (idea.quality === "plausible") {
      idea.quality = "swill";
    }
  },
  editIdea: function(id, target, value) {
    var idea = this.ideas.find(function(idea) {
      return idea.id === parseInt(id);
    });
    if (target.className.includes('ideaTitle')) {
      idea.title = value;
      ideaService.editIdea(id, value, 'title')
    } else if (target.className.includes('ideaBody')) {
      idea.body = value;
      ideaService.editIdea(id, value, 'body')
    }
  }
}
