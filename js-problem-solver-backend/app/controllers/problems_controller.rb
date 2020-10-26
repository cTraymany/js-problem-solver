class ProblemsController < ApplicationController
    def index
        render json: Problem.all
    end
end
