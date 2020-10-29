class Problem < ApplicationRecord
    has_many :solutions, dependent: :destroy
    validates :title, presence: true
    validates :description, presence: true
end
