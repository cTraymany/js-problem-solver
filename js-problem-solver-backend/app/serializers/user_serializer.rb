class UserSerializer
    include FastJsonapi::ObjectSerializer
    attributes :username, :email, :password
    attributes :problems do |p|
        ProblemSerializer.new(p.problems).as_json["data"]
    end
    attributes :solutions do |s|
        SolutionSerializer.new(s.solutions).as_json["data"]
    end
  end
  