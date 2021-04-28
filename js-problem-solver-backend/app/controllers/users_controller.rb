class UsersController < ApplicationController
    def create
        user = User.create(user_params)
        if user.save
            session[:user_id] = user.id
            render json: {
                logged_in: true,
                session: UserSerializer.new(user)
            }
        else
            render json: {
                logged_in: false,
                errors: "Unable to create user."
            }
        end
    end
    
    private

    def user_params
        params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end
end