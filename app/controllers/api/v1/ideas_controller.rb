class Api::V1::IdeasController < Api::V1::ApiController
  def index
    @ideas = Idea.order("created_at DESC")
  end

  def create
    @idea = Idea.new(idea_params)
    render status: 400 unless @idea.save
  end

  def destroy
    @idea = Idea.find(params[:id])
    @idea.destroy
    render status: 204
  end

  def update
    byebug
  end

  private

  def idea_params
    params.permit(:title, :body)
  end
end
