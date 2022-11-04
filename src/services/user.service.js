export class UserService {
    constructor(api="https://api.github.com/users"){
        this.api = api;
        this._token = this.token;
    }

    async getUser(username='octocat'){
        return await fetch(`${this.api}/${username}`).then(res => res.json());
    }
}