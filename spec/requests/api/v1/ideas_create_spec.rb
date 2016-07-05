require "rails_helper"

RSpec.describe "POST /api/v1/ideas" do
  context "with required params" do
    it "returns 200 and creates a new idea in the database" do
      title = "Idea Title"
      body = "Idea Body"
      tags = ["tag"]

      post "/api/v1/ideas", format: :json, title: title, body: body, tags: tags

      expect(response.status).to eq(200)

      expect(Idea.count).to eq(1)
      expect(Idea.first.title).to eq("Idea Title")
      expect(Idea.first.body).to eq("Idea Body")
    end
  end
end
