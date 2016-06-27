json.ideas @ideas do |idea|
  json.title idea.title
  json.body idea.body
  json.quality idea.quality
  json.created_at idea.created_at
end
