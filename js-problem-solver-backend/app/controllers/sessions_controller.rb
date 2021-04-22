class SessionsController < ApplicationController
    # def new
    #     # not using get/new because frontend JS is rendering this for us
    # end

    def create
        user = User.find_by(email: params[:user][:email])
        if user && user.authenticate(params[:user][:password])  
            session[:username] = user.username
            render json: user         
        else             
            render json: {errors: "Unable to authenticate user."}        
        end 
    end

    def destroy
        # destroy login session (log user out)
    end

    # def google_login
    # end

    # private

    # def auth_hash
    # end

    # add session_?params.require().permit()
end
