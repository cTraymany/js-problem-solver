class UsersController < ApplicationController
    def index
        render json: UserSerializer.new(User.all)
    end
    
    def create 
    end
end