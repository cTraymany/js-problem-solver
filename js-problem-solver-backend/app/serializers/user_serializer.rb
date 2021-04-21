class UserSerializer
    include FastJsonapi::ObjectSerializer
    attributes :username, :email, :password, :problems, :solutions
  end
  