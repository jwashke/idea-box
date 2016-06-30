var handlers = {
  createIdea: function() {
    var newIdeaTitle = $('#newTitle');
    var newIdeaBody = $('#newBody');
    var newIdeaTags = $('#newTags')
    ideaService.createIdea(newIdeaTitle.val(), newIdeaBody.val(), newIdeaTags.val());
    newIdeaTitle.val('');
    newIdeaBody.val('');
    newIdeaTags.val('');
  },
  delegateClick: function(event) {
    var target = event.target;
    var id = target.id
    if (target.className.includes('deleteButton')) {
      this.deleteIdea(id);
    } else if (target.className.includes('thumbsUpButton')) {
      this.thumbsUpIdea(id);
    } else if (target.className.includes('thumbsDownButton')) {
      this.thumbsDownIdea(id);
    } else if (target.className.includes('ideaTitle')) {
      $(target).attr('contenteditable', 'true');
    } else if (target.className.includes('ideaBody')) {
      $(target).attr('contenteditable', 'true');
    }
  },
  delegateFocusout: function(event) {
    var target = event.target
    var id = event.target.parentElement.id
    var value = event.target.innerText
    ideaList.editIdea(id, target, value);
  },
  searchIdeas: function(searchTerm) {
    var $ideas = $('.idea-info')
    $ideas.each(function(index, idea) {
      $idea = $(idea);
      var inTitle = $idea.children('h4')[0].innerText.includes(searchTerm);
      var inBody = $idea.children('p')[0].innerText.includes(searchTerm);
      inTitle || inBody ? $idea.show() : $idea.hide();
    })
  },
  deleteIdea: function(id) {
    ideaService.deleteIdea(id);
    ideaList.deleteIdea(id)
    view.drawIdeas();
  },
  thumbsUpIdea: function(id) {
    ideaService.thumbsUpIdea(id);
    ideaList.thumbsUpIdea(id);
    view.drawIdeas();
  },
  thumbsDownIdea: function(id) {
    ideaService.thumbsDownIdea(id);
    ideaList.thumbsDownIdea(id);
    view.drawIdeas();
  }
}
