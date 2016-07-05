require "rails_helper"

RSpec.describe "DELETE /api/v1/ideas" do
  context "with required params" do
    it "returns 204 no content and sets the idea to inactive" do
      idea = create(:idea)

      delete "/api/v1/ideas/#{idea.id}", format: :json

      expect(response.status).to eq(204)

      expect(Idea.first.active).to eq(false)
    end
  end
end
