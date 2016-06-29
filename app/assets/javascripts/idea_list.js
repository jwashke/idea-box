var ideaList = {
  ideas: [],
  sorted: false,
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
    idea.thumbsUp();
  },
  thumbsDownIdea: function(id) {
    var idea = this.ideas.find(function(idea) {
      return idea.id === parseInt(id);
    });
    idea.thumbsDown();
  },
  editIdea: function(id, target, value) {
    var idea = this.ideas.find(function(idea) {
      return idea.id === parseInt(id);
    });
    idea.editIdea(target, value);
  },
  orderIdeas: function() {
    if (this.sorted === false) {
      this.ideas.sort(function(a, b) {
        if (a.quality < b.quality) //sort string ascending
          return -1;
        if (a.quality > b.quality)
          return 1;
        return 0 //default return value (no sorting)
      })
      this.sorted = true;
    } else {
      this.ideas.reverse();
    }
  }
}
