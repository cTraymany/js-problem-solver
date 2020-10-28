class ProblemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description
  has_many :solutions
  attributes :solutions do |s|
    SolutionSerializer.new(s.solutions).as_json["data"]
  end
end
