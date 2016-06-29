var handlers = {
  createIdea: function() {
    var newIdeaTitleInput = $('#newTitle');
    var newIdeaBodyInput = $('#newBody');
    ideaService.createIdea(newIdeaTitleInput.val(), newIdeaBodyInput.val());
    newIdeaTitleInput.val('');
    newIdeaBodyInput.val('');
  },
  delegateClick: function(event) {
    var target = event.target;
    var id = target.id
    if (target.className.includes('deleteButton')) {
      ideaService.deleteIdea(id);
      ideaList.deleteIdea(id)
      view.drawIdeas();
    } else if (target.className.includes('thumbsUpButton')) {
      ideaService.thumbsUpIdea(id);
      ideaList.thumbsUpIdea(id);
      view.drawIdeas();
    } else if (target.className.includes('thumbsDownButton')) {
      ideaService.thumbsDownIdea(id);
      ideaList.thumbsDownIdea(id);
      view.drawIdeas();
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
      if ($idea.children('h4')[0].innerText.includes(searchTerm) || $idea.children('p')[0].innerText.includes(searchTerm)) {
        $idea.show();
      } else {
        $idea.hide();
      }
    })
  }
}
