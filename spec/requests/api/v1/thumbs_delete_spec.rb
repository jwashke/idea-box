require "rails_helper"

RSpec.describe "DELETE /api/v1/thumbs/" do
  it "cycles the quality of the idea with given id down" do
    idea = create(:plausible_idea)

    delete "/api/v1/thumbs", format: :json, id: idea.id

    expect(response.status).to eq(204)

    updated_idea = Idea.last
    expect(updated_idea.quality).to eq("swill")
  end
end
