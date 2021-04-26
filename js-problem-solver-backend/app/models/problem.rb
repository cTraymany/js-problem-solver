class Problem < ApplicationRecord
    has_many :solutions, dependent: :destroy
    validates :title, :description, presence: true
end
