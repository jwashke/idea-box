var Idea = function(id, title, body, quality, tags) {
  this.id = id,
  this.title = title,
  this.body = body,
  this.quality = quality,
  this.tags = tags
};

Idea.prototype.thumbsUp = function() {
  if (this.quality === "plausible")
    this.quality = "genius";
  if (this.quality === "swill")
    this.quality = "plausible";
}

Idea.prototype.thumbsDown = function() {
  if (this.quality === "plausible")
    this.quality = "swill";
  if (this.quality === "genius")
    this.quality = "plausible";
}

Idea.prototype.editIdea = function(target, value) {
  if (target.className.includes('ideaTitle')) {
    if (this.title !== value && value.trim().length > 0) {
      this.title = value;
      ideaService.editIdea(this.id, value, 'title');
    } else {
      target.innerText = this.title;
    }
  } else if (target.className.includes('ideaBody')) {
    if (this.body !== value  && value.trim().length > 0) {
      this.body = value;
      ideaService.editIdea(this.id, value, 'body');
    } else {
      target.innerText = this.body;
    }
  }
}

Idea.prototype.html = function() {
  var html =  "<div id = '" + this.id + "'class='col-xs-12 idea-info idea-" + this.id + "'>" +
              "<h4 class='ideaTitle icon-title'>" + this.title + "</h4> " +
              "<a class='icon-button delete-button pull-right delete-" + this.id + "' id='" + this.id + "'><i id='" + this.id + "'class='fa fa-times fa-lg deleteButton'></i></a>" +
              "<p class='ideaBody'>" + this.body + "</p>" +
              "<p>Quality: " + this.quality +
              "<br><a class='icon-button thumbs-up-" + this.id + "' id='" + this.id + "'><i id='" + this.id + "' class='fa fa-thumbs-up fa-lg thumbsUpButton'></i></a>" +
              "    <a class='icon-button thumbs-down-" + this.id + "' id='" + this.id + "'><i id='" + this.id + "' class='fa fa-thumbs-down fa-lg thumbsDownButton'></i></a></p>"
  this.tags.forEach(function(tag) {
    html = html + "<span class='label label-pill label-primary pill-tag'>" + tag.name + "</span>"
  })
  html = html + "<br><hr class='idea-line'><br></div>"
  return html;
}
