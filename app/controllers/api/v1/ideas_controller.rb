class Api::V1::IdeasController < Api::V1::ApiController
  def index
    @ideas = Idea.order("created_at DESC")
  end

  def create
    @idea = Idea.new(idea_params)
    if @idea.save
      render status: 204
    else
      render status: 400
    end
  end

<<<<<<< HEAD
  def destroy
    @idea = Idea.find(params[:id])
    @idea.destroy
    render status: 204
  end

=======
>>>>>>> master
  private

  def idea_params
    params.permit(:title, :body)
  end
end
