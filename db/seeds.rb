# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
def create_ideas
  20.times do
    idea = Idea.create(
      title: "#{Faker::Hacker.ingverb} the #{Faker::Hacker.adjective} #{Faker::Hacker.noun}",
      body: "#{Faker::Hacker.say_something_smart}",
      quality: rand(0..2)
    )
    idea.tags = get_tags
    idea.save
  end
end

def get_tags
  tags_array = []
  rand(1..4).times do
    tag = Tag.where(name: "#{Faker::Hacker.abbreviation}").first_or_create
    tags_array.push(tag)
  end
  tags_array
end

create_ideas
