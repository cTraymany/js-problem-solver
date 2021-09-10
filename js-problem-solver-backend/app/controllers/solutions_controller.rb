class SolutionsController < ApplicationController
    def index
        render json: SolutionSerializer.new(Solution.all)
    end
    
    def create
        solution = Solution.create(solution_params)

        if solution.valid?
            render json: SolutionSerializer.new(solution)
        end
    end

    private

    def solution_params
        params.require(:solution).permit(:content, :problem_id, :user_id)
    end
end