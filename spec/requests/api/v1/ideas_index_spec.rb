require "rails_helper"

RSpec.describe "GET /api/v1/ideas" do
  it "returns all ideas with their title, body, quality, and created at attribute" do
    idea1 = create(:idea)
    idea2 = create(:idea)

    get "/api/v1/ideas", format: :json
    parsed_json = JSON.parse(response.body)

    expect(response.status).to eq(200)
    expect(parsed_json.count).to eq(2)

    recieved_idea1 = parsed_json.first

    expect(recieved_idea1.title).to eq(idea2.title)
    expect(recieved_idea1.body).to eq(idea2.body)
    expect(recieved_idea1.quality).to eq(idea2.quality)
  end
end
