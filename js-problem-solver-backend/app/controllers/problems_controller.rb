class ProblemsController < ApplicationController
    def index
        render json: ProblemSerializer.new(Problem.all)
    end

    def create
        problem = Problem.create(problem_params)
        if problem.save
            render json: ProblemSerializer.new(problem)
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
            problem.destroy
        end
    end

    private

    def problem_params
        params.require(:problem).permit(:title, :description)
    end
end
