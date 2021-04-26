# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Problem.create(title: "Project Confusion", description: "How can I start building my JS project?")
# problem id: 1
Solution.create(content: "Start by reviewing the video lectures provided by your instructor!", problem_id: 1)
# solution id: 1
Solution.create(content: "Read some blogs on Rails with JS!", problem_id: 1)
# solution id: 2


Problem.create(title: "Plants Keep Dying", description: "I want house plants, but they keep dying")
# problem id: 2
Solution.create(content: "Check them for pests", problem_id: 2)
# solution id: 3
Solution.create(content: "Google the proper way to care for individual plants", problem_id: 2)
# solution id: 4