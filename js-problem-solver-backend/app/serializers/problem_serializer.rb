class ProblemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :solutions
end
