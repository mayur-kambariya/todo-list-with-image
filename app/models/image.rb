class Image < ApplicationRecord
  belongs_to :imageable, polymorphic: true
  mount_uploader :file, ImageUploader
  validates_presence_of :file
  validates_integrity_of :file
end
