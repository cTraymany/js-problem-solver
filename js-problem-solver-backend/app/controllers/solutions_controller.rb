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
end