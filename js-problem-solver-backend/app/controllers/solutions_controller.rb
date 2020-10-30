class SolutionsController < ApplicationController
    def create
        binding.pry
        solution = Solution.create(solution_params)
        if solution.valid
            render json: SolutionSerializer.new(solution)
        # else
            # flash message "enter valid content"
        end
    end

    private

    def solution_params
        params.require(:solution).permit(:content, :problem_id)
    end
end