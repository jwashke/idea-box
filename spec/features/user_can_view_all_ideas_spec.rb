require 'rails_helper'

feature "User can visit root path to view ideas", :js => true do
  xit "displays all ideas with their title, body, and quality on the page" do
    idea1, idea2 = create_list(:idea, 2)

    visit '/'

    wait_for_ajax

    expect(page).to have_selector ".idea-info", count: 2

    within(".idea-#{idea1.id}") do
      expect(page).to have_content(idea1.title)
      expect(page).to have_content(idea1.body)
      expect(page).to have_content(idea1.quality)
    end

    within(".idea-#{idea2.id}") do
      expect(page).to have_content(idea2.title)
      expect(page).to have_content(idea2.body)
      expect(page).to have_content(idea2.quality)
    end
  end
end
# On the application's root, the user should:
#
# See a list of all existing ideas,
# including the title, body, and quality for each idea.
# Idea bodies longer than 100 characters
# should be truncated to the nearest word.
# Ideas should appear in descending chronological order
# (with the most recently created idea at the top).
