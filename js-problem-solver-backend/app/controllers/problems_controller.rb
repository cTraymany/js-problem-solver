class ProblemsController < ApplicationController
    include ActionController::HttpAuthentication::Token
    before_action :authenticate_user, only: [:create, :destroy]

    def index
        render json: ProblemSerializer.new(Problem.all)
    end

    def create
        problem = Problem.create(problem_params)
        if problem.save
            render json: ProblemSerializer.new(problem)
        else
            render json: {error: "Problem did not save."}
        end
    end

    def show
        problem = Problem.find(params[:id])
        if problem
            render json: ProblemSerializer.new(problem)
        end
    end

    def destroy
        if problem = Problem.find(params[:id])
            # binding.pry
            problem.destroy if session[:user_id] === problem.user_id
        else
            render json: {message: "Error! Try again."}
        end
    end

    private

    def authenticate_user
        token, _options = token_and_options(request)
        user_id = SessionsController.decode(token)
        User.find(user_id)
    rescue ActiveRecord::RecordNotFound
        render json: {authorized: false}
    end

    def problem_params
        params.require(:problem).permit(:title, :description, :user_id)
    end
end
