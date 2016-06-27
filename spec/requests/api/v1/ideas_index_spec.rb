require "rails_helper"

RSpec.describe "GET /api/v1/ideas" do
  it "returns all ideas with their title, body, quality, and created at attribute" do
    idea1 = create(:idea)
    idea2 = create(:idea)

    get "/api/v1/ideas", format: :json
    parsed_json = JSON.parse(response.body)
    recieved_ideas = parsed_json["ideas"]

    expect(response.status).to eq(200)
    expect(recieved_ideas.count).to eq(2)

    expect(recieved_ideas.first["title"]).to eq(idea2.title)
    expect(recieved_ideas.first["body"]).to eq(idea2.body)
    expect(recieved_ideas.first["quality"]).to eq(idea2.quality)
  end
end
