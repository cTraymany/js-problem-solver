# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "Google", email: "Google@gmail.com", password: "GoogleLove")
User.create(username: "Apple", email: "Jobs@iCloud.com", password: "AppleLove")
User.create(username: "Bill", email: "Bill@outlook.com", password: "MicrosoftLove")

Problem.create(title: "Project Confusion", description: "How can I start building my JS project?", user_id: 1)
# problem id: 1
Solution.create(content: "Start by reviewing the video lectures provided by your instructor!", problem_id: 1, user_id: 2)
# solution id: 1
Solution.create(content: "Read some blogs on Rails with JS!", problem_id: 1, user_id: 3)
# solution id: 2


Problem.create(title: "Plants Keep Dying", description: "I want house plants, but they keep dying", user_id: 2)
# problem id: 2
Solution.create(content: "Check them for pests", problem_id: 2, user_id: 1)
# solution id: 3
Solution.create(content: "Google the proper way to care for individual plants", problem_id: 2, user_id: 3)
# solution id: 4
Solution.create(content: "Buy a ton of plants so no one notices the dead ones", problem_id: 2, user_id: 1)

Problem.create(title: "My Sock is Falling", description: "My sock keeps falling inside of my shoe", user_id: 3)
Solution.create(content: "Sock suspenders", problem_id: 3, user_id: 1)
Solution.create(content: "Buy new socks", problem_id: 3, user_id: 1)