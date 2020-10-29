class SolutionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :problem_id
end
