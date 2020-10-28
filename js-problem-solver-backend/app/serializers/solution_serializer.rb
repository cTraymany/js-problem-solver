class SolutionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content
  belongs_to :problem
end
