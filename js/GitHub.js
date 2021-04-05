class GitHub {
    constructor() {
        this.client_id = 'd490706ce20b4c576987';
        this.client_secret_id = '55c1dee2bdb813ee769f6bed639e83b4b189ae79 ';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret_id}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret_id}`);

        const profile = await profileResponse.json();

        const repos = await reposResponse.json();

        return { profile, repos }
    }
}