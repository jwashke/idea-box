FactoryGirl.define do
  factory :idea do
    sequence :title do |n|
      "Idea title 1"
    end
    body "Idea body"

    factory :plausible_idea do
      quality 1
    end

    factory :genius_idea do
      quality 2
    end
  end
end
