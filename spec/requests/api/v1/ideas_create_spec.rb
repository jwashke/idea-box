require "rails_helper"

RSpec.describe "POST /api/v1/ideas" do
  scenario "with required params" do
    it "returns 204 no content and creates a new idea in the database" do

      post "/api/v1/ideas", format: :json, title: "Idea Title", body: "Idea Body"

      expect(response.status).to eq(204)

      expect(Idea.count).to eq(1)
      expect(Idea.first.title).to eq("Idea Title")
      expect(Idea.first.body).to eq("Idea Body")
    end
  end

  scenario "with missing params" do
    it "responds with 400 and an item is not created" do
      post "/api/v1/ideas", format: :json, title: "Idea Title", body: "Idea Body"

      expect(response.status).to eq(400)

      expect(Idea.count).to eq(0)
    end
  end
end
