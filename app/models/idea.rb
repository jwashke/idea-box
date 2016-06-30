class Idea < ActiveRecord::Base
  validates :title, presence: true
  has_many :idea_tags
  has_many :tags, through: :idea_tags

  enum quality: %w(swill plausible genius)

  def cycle_quality_up
    self.genius! if self.plausible?
    self.plausible! if self.swill?
  end

  def cycle_quality_down
    self.swill! if self.plausible?
    self.plausible! if self.genius?
  end

  def find_or_create_tags(tags)
    tags.each do |tag|
      self.tags << Tag.where(name: tag).first_or_create
    end
    self.save
  end
end
