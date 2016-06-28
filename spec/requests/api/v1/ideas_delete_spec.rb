require "rails_helper"

RSpec.describe "DELETE /api/v1/ideas" do
  context "with required params" do
    it "returns 204 no content and deletes the idea from the database" do
      idea = create(:idea)

      delete "/api/v1/ideas/#{idea.id}", format: :json

      expect(response.status).to eq(204)

      expect(Idea.count).to eq(0)
    end
  end
end
