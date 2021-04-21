class User < ApplicationRecord
    has_many :problems, dependent: :destroy
    has_many :solutions, dependent: :destroy
    
    has_secure_password

    validates :username, :email, presence: true #:password, presence: true
    validates :username, :email, uniqueness: true
    validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
end
