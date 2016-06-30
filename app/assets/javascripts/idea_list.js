var ideaList = {
  ideas: [],
  sortedDesc: false,
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
    var idea = this.findIdea(id);
    idea.thumbsUp();
  },
  thumbsDownIdea: function(id) {
    var idea = this.findIdea(id);
    idea.thumbsDown();
  },
  editIdea: function(id, target, value) {
    var idea = this.findIdea(id);
    idea.editIdea(target, value);
  },
  orderIdeas: function() {
    if (this.sortedDesc === false) {
      this.sortIdeas();
      this.sortedDesc = true;
    } else {
      this.sortIdeas();
      this.ideas = this.ideas.reverse();
      this.sortedDesc = false;
    }
  },
  sortIdeas: function() {
    this.ideas.sort(function(a, b) {
      if (a.quality < b.quality)
        return -1;
      if (a.quality > b.quality)
        return 1;
      return 0
    })
  },
  findIdea: function(id) {
    return this.ideas.find(function(idea) {
      return idea.id === parseInt(id);
    });
  }
}
