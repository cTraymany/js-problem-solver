class SessionsController < ApplicationController
    HMAC_SECRET = ENV['HMAC_SECRET']
    ALGORITHM_TYPE = 'HS256'

    def self.encode(user_id)
        payload = {user_id: user_id}
        JWT.encode(payload, HMAC_SECRET, ALGORITHM_TYPE)
    end

    def self.decode(token)
        decoded_token = JWT.decode(token, HMAC_SECRET, true, {algorithm: ALGORITHM_TYPE})
        decoded_token[0]['user_id']
    end

    def create
        user = User.find_by(email: session_params[:email])

        if user && user.authenticate(session_params[:password])
            token = SessionsController.encode(user.id)
            session[:username] = user.username
            session[:token] = token
            session[:user_id] = user.id
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
