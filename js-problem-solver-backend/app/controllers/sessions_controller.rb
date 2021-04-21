class SessionsController < ApplicationController
    # def new
    #     # not using get/new because frontend JS is rendering this for us
    # end

    def create
        session[:username] = User.find_by(email: params[:email]).username
    end

    def destroy

    end

    # def google_login

    # end

    # private

    # def auth_hash

    # end
end
