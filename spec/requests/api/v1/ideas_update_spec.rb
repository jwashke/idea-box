require "rails_helper"

RSpec.describe "POST /api/v1/ideas" do
  context "with field of title" do
    it "returns 200 and edits the idea in the database" do
      idea = create(:idea)
      title = "updated title"

      patch "/api/v1/ideas/#{idea.id}", format: :json, value: title, field: 'title'

      expect(response.status).to eq(200)

      expect(Idea.count).to eq(1)
      expect(Idea.first.title).to eq("updated title")
    end
  end
end
