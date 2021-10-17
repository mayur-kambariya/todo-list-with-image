class Task < ApplicationRecord
  belongs_to :project
  has_many :images, as: :imageable, dependent: :destroy

  accepts_nested_attributes_for :images, allow_destroy: true

  enum status: ["pending", "done", "canceled"]
end
