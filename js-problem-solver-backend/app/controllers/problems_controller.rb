class ProblemsController < ApplicationController
    def index
        render json: ProblemSerializer.new(Problem.all)
    end
end
