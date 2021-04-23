class UsersController < ApplicationController
    def index
        render json: UserSerializer.new(User.all)
        # delete this action. made only for testing/easy view of user objects
    end
    
    def create
        user = User.create(user_params)
        if user.save
            session[:user_id] = user.id
            render json: UserSerializer.new(user)
            # in the front end, use the render to display a welcome msg
        else
            render json: {errors: "Unable to create user."}
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end
end