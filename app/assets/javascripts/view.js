var view = {
  displayIdeas: function() {
    ideaService.getIdeas();
  },
  drawIdeas: function() {
    $('.ideas').empty();
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
  }
}
