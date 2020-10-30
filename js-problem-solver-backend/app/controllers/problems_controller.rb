class ProblemsController < ApplicationController
    def index
        render json: ProblemSerializer.new(Problem.all)
    end

    def create
        problem = Problem.create(problem_params)
        if problem.save
            render json: ProblemSerializer.new(problem)
        # else
        #     render text: {message: "Please enter a title and description."}
        end
    end

    private

    def problem_params
        params.require(:problem).permit(:title, :description)
    end
end
