class Location < ApplicationRecord
  belongs_to :trip
  # has_many :address
  validates :name, :location, presence: true
end
