class Idea < ActiveRecord::Base
  validates :title, presence: true

  enum :quality %w(swill, plausible, genius)
end
