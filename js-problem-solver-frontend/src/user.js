class User {
    constructor(user) {
        this.id = user.id
        this.username = user.username
        this.email = user.email
        this.password = user.password

        this.problems = user.attributes.problems.map(problem => new Problem(problem))
        this.solutions = user.attributes.solutions.map(solution => new Solution(solution))
    }
}