class UserSerializer
    include FastJsonapi::ObjectSerializer
    attributes :username, :email, :problems, :solutions
end
  