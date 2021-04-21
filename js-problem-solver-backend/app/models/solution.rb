class Solution < ApplicationRecord
  belongs_to :problem, :user
  validates :content, presence: true
end
