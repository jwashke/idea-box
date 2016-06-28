class Idea < ActiveRecord::Base
  validates :title, presence: true

  enum quality: %w(swill plausible genius)

  def cycle_quality_up
    self.genius! if self.plausible?
    self.plausible! if self.swill?
  end

  def cycle_quality_down
    self.swill! if self.plausible?
    self.plausible! if self.genius?
  end
end
