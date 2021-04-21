class Problem < ApplicationRecord
    has_many :solutions, dependent: :destroy
    belongs_to :user
    validates :title, :description, presence: true
end
