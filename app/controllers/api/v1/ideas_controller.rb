class Api::V1::IdeasController < Api::V1::ApiController
  def index
    @ideas = Idea.order("created_at DESC")
  end

  def create
    @idea = Idea.new(idea_params)
    @idea.find_or_create_tags(params[:tags])
    render status: 400 unless @idea.save
  end

  def destroy
    @idea = Idea.find(params[:id])
    @idea.destroy
    render status: 204
  end

  def update
    updatedField = {}
    updatedField[params[:field].to_sym] = params[:value]
    @idea = Idea.find(params[:id])
    @idea.update(updatedField)
  end

  private

  def idea_params
    params.permit(:title, :body)
  end
end
