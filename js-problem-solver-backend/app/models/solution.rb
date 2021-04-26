class Solution < ApplicationRecord
  belongs_to :problem
  validates :content, presence: true
end
