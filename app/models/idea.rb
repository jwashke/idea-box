class Idea < ActiveRecord::Base
  validates :title, presence: true

  enum quality: %w(swill plausible genius)

  def cycle_quality_up
    self.plausible! if self.swill?
    self.genius! if self.plausible?
  end

  def cycle_quality_down
    self.plausible! if self.genius?
    self.swill! if self.plausible?
  end
end
