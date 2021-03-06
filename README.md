![Screenshot of Problem Solver App](./js-problem-solver-frontend/img/problem-solver-screenshot.png)
# Problem Solver
Problem Solver has a custom API containing user-submitted problems and solutions. The API is generated with the Fast JSON gem to accelerate serialization. The JavaScript frontend creates and displays the application in a single, dynamic page, and communicates with the Rails backend models and controllers to parse and validate problem/solution objects.

## Getting Started
### Prerequisites
This app is run with Ruby. Please have Ruby installed before beginning.

Fork and clone this repository onto your terminal.

### Installing
    <!-- CD into backend -->
    $ bundle install
    $ rake db:migrate
    $ rails s

    <!-- CD into frontend -->
    $ open index.html

    Log in with the provided dummy data:
    email: Google@gmail.com
    password: GoogleLove

### Built With
[VS Code](https://code.visualstudio.com/) - text editor

### Contributing
See CONTRIBUTING.md for details on code of conduct.

### Authors
Chindalath Traymany - cTraymany

### License
This project is licensed under the MIT License - see LICENSE.md for details
