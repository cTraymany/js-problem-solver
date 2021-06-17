class SessionsController < ApplicationController
    HMAC_SECRET = ENV['HMAC_SECRET']
    ALGORITHM_TYPE = 'HS256'

    def self.call(password)
        payload = {password: password}
        JWT.encode(payload, HMAC_SECRET, ALGORITHM_TYPE)
    end

    def create
        user = User.find_by(email: session_params[:email])

        if user && user.authenticate(session_params[:password])
            token = SessionsController.call(user.password)
            session[:username] = user.username
            session[:token] = token
            render json: {
                logged_in: true,
                session: session
            }
        else             
            render json: {
                logged_in: false,
                error: "Unable to authenticate user."
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
