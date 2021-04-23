class SessionsController < ApplicationController
    def create
        user = User.find_by(email: params[:user][:email])
        if user && user.authenticate(params[:user][:password])
            session[:user_id] = user.id
            # session[:username] = user.username
            render json: user
        else             
            render json: {errors: "Unable to authenticate user."}        
        end
    end

    def destroy
        session.clear
        # redirect to landing page in front end
    end

    # def google_login
    # end

    # private

    # def auth_hash
    # end

    # add session_?params.require().permit()
end
