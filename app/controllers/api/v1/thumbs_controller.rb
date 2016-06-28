class Api::V1::ThumbsController < Api::V1::ApiController
  def create
    @idea = Idea.find(params[:id])
    @idea.cycle_quality_up
    @idea.save
    render status: 204
  end
end
