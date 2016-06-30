var view = {
  displayIdeas: function() {
    ideaService.getIdeas();
  },
  drawIdeas: function() {
    $('.ideas').empty();
    $('.tags').empty();
    $('.tags').append("<span class='label label-pill label-danger pill-tag'>all</span>");
    tagList.tags.forEach(function(tag) {
      $('.tags').append(tag.html);
    });
    ideaList.ideas.forEach(function(idea) {
      $('.ideas').append(idea.html());
    });
  },
  setupListeners: function() {
    this.setupSubmitListener();
    this.setupSearchListener();
    this.setupOrderListeners();
  },
  setupSubmitListener: function() {
    $('#submit').click(handlers.createIdea);
  },
  setupIdeaListeners: function() {
    $('.ideas').click(function(event) {
      handlers.delegateClick(event);
    });
    $('.ideas').focusout(function(event) {
      handlers.delegateFocusout(event);
    });
    $('.tags').click(function(event) {
      handlers.tagClick(event);
    })
  },
  setupSearchListener: function() {
    $('#searchBar').on('input', function() {
      var searchTerm = this.value;
      handlers.searchIdeas(searchTerm);
    });
    $('#clearSearch').on('click', function() {
      $('#searchBar').val('');
      $('#searchBar').trigger('input');
    })
  },
  setupOrderListeners: function() {
    $('.orderGroup').on('click', function() {
      if (event.target.innerText === "Ascending") {
        event.target.innerText = "Descending"
      } else {
        event.target.innerText = "Ascending"
      }
      ideaList.orderIdeas();
      view.drawIdeas();
    })
  },
  showAllIdeas: function() {
    ideaList.ideas.forEach(function(idea) {
      $idea = $('#' + idea.id);
      $idea.show();
    });
  },
  filterIdeasByTag: function(text) {
    ideaList.ideas.forEach(function(idea) {
      $idea = $('#' + idea.id)
      var ideaTagsInclude = idea.tags.filter(function(tag) {
        return tag.name == text;
      }).length > 0
      ideaTagsInclude ? $idea.show() : $idea.hide();
    });
  }
}
