json.ideas @ideas do |idea|
  json.id idea.id
  json.title idea.title
  json.body idea.body
  json.quality idea.quality
  json.created_at idea.created_at
  json.tags idea.tags do |tag|
    json.name tag.name
  end
end
