class SessionsController < ApplicationController
    def create
        user = User.find_by(email: session_params[:email])
        if user && user.authenticate(session_params[:password])
            session[:username] = user.username
            render json: {
                logged_in: true,
                session: user
            }
        else             
            render json: {
                logged_in: false,
                errors: "Unable to authenticate user."
            }        
        end
    end

    def destroy
        session.clear
    end

    # def google_login
    # end

    private

    # def auth_hash
        # for google login
    # end

    def session_params
        params.require(:user).permit(:email, :password)
    end
end
