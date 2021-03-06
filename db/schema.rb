# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160630002648) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "idea_tags", force: :cascade do |t|
    t.integer  "idea_id"
    t.integer  "tag_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "idea_tags", ["idea_id"], name: "index_idea_tags_on_idea_id", using: :btree
  add_index "idea_tags", ["tag_id"], name: "index_idea_tags_on_tag_id", using: :btree

  create_table "ideas", force: :cascade do |t|
    t.string   "title"
    t.text     "body"
    t.integer  "quality",    default: 0
    t.boolean  "active",     default: true
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

  create_table "tags", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "idea_tags", "ideas"
  add_foreign_key "idea_tags", "tags"
end
