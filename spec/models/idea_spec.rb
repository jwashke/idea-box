require 'rails_helper'

RSpec.describe Idea, type: :model do
  describe "validations" do
    it { is_expected.to validate_presence_of(:title) }
  end

  describe "#quality" do
    it "defaults to swill" do
      idea = create(:idea)

      expect(idea.quality).to eq("swill")
    end
  end

  describe "#swill?" do
    context "the idea quality is swill" do
      it "returns true" do
        idea = create(:idea)

        expect(idea.swill?).to eq(true)
      end
    end

    context "the idea quality is not swill" do
      it "returns false" do
        idea = create(:plausible_idea)

        expect(idea.swill?).to eq(false)
      end
    end
  end

  describe "#swill!" do
    context "the idea quality is not swill" do
      it "changes the quality to swill" do
        idea = create(:plausible_idea)

        idea.swill!
        expect(idea.quality).to eq("swill")
      end
    end

    context "the idea quality is already swill" do
      it "does not change the idea quality" do
        idea = create(:idea)

        idea.swill!
        expect(idea.quality).to eq("swill")
      end
    end
  end

  describe "#plausible?" do
    context "the idea quality is plausible" do
      it "returns true" do
        idea = create(:plausible_idea)

        expect(idea.plausible?).to eq(true)
      end
    end

    context "the idea quality is not plausible" do
      it "returns false" do
        idea = create(:idea)

        expect(idea.plausible?).to eq(false)
      end
    end
  end

  describe "#plausible!" do
    context "the idea quality is not plausible" do
      it "changes the quality to plausible" do
        idea = create(:idea)

        idea.plausible!
        expect(idea.quality).to eq("plausible")
      end
    end

    context "the idea quality is already plausible" do
      it "does not change the idea quality" do
        idea = create(:plausible_idea)

        idea.plausible!
        expect(idea.quality).to eq("plausible")
      end
    end
  end

  describe "#genius?" do
    context "the idea quality is genius" do
      it "returns true" do
        idea = create(:genius_idea)

        expect(idea.genius?).to eq(true)
      end
    end

    context "the idea quality is not genius" do
      it "returns false" do
        idea = create(:idea)

        expect(idea.genius?).to eq(false)
      end
    end
  end

  describe "#genius!" do
    context "the idea quality is not genius" do
      it "changes the quality to genius" do
        idea = create(:genius_idea)

        idea.genius!
        expect(idea.quality).to eq("genius")
      end
    end

    context "the idea quality is already genius" do
      it "does not change the idea quality" do
        idea = create(:genius_idea)

        idea.genius!
        expect(idea.quality).to eq("genius")
      end
    end
  end

  describe "#cycle_quality_up" do
    context "with quality swill" do
      it "changes the quality to plausible" do
        idea = create(:idea)

        idea.cycle_quality_up
        expect(idea.quality).to eq("plausible")
      end
    end

    context "with quality plausible" do
      it "changes the quality to genius" do
        idea = create(:plausible_idea)

        idea.cycle_quality_up
        expect(idea.quality).to eq("genius")
      end
    end

    context "with quality genius" do
      it "does not change the quality" do
        idea = create(:genius_idea)

        idea.cycle_quality_up
        expect(idea.quality).to eq("genius")
      end
    end
  end

  describe "#cycle_quality_down" do

  end
end
