class SolutionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :problem_id, :user_id
end
