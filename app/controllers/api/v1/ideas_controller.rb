class Api::V1::IdeasController < Api::V1::ApiController
  def index
    @ideas = Idea.order("created_at DESC")
  end
end
