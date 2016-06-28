require 'rails_helper'

feature "User can visit root path to view ideas", js: true do
  xscenario "They fill in the form to create a new idea" do
    visit '/'

    fill_in :newTitle, with: "Idea Title"
    fill_in :newBody, with: "Idea Body"
    click_button "Submit"

    Capybara.default_max_wait_time = 100

    within(".idea-info") do
      expect(page).to have_content("Idea Title")
      expect(page).to have_content("Idea Body")
      expect(page).to have_content("swill")
    end
  end
end

def wait_for_ajax_to_finish
  Timeout.timeout(Capybara.default_max_wait_time) do
    loop until finished_all_ajax_requests?
  end
end

def finished_all_ajax_requests?
  page.evaluate_script('jQuery.active').zero?
end

# On the application's root, the user should:
#
# See a list of all existing ideas,
# including the title, body, and quality for each idea.
# Idea bodies longer than 100 characters
# should be truncated to the nearest word.
# Ideas should appear in descending chronological order
# (with the most recently created idea at the top).
