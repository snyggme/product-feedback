class Auth {
    signup(user) {
        this.signin(user);
    }
    signin({ token, username }){
        const _id = this.parseJWT(token).id;

        const user = {
            username,
            _id,
            backendToken: token
        };

        sessionStorage.setItem('user', JSON.stringify(user));
    }
    signout() {
        const auth2 = window.gapi.auth2.getAuthInstance()

        auth2.signOut();
        
        delete sessionStorage['user'];
    }
    isSigned() {
        return sessionStorage.getItem('user') !== null
    }
    getUsername() {
        if (!this.isSigned())
            return null

        const { username } = JSON.parse(sessionStorage.getItem('user'));
        
        return username;
    }
    getUserId() {
        if (!this.isSigned())
            return null

        const { _id } = JSON.parse(sessionStorage.getItem('user'));

        return _id;
    }
    getGoogleToken() {
        if (!this.isSigned())
            return null

        const { googleToken } = JSON.parse(sessionStorage.getItem('user'));

        return googleToken;
    }
    getBackendToken() {
        if (!this.isSigned())
            return null

        const { backendToken } = JSON.parse(sessionStorage.getItem('user'));
        
        return backendToken;
    }
    setBackendToken(token) {
        let user = JSON.parse(sessionStorage.getItem('user'));
        const _id = this.parseJWT(token).id

        user = { 
            ...user,
             _id,
             backendToken: token 
        };
        
        sessionStorage.setItem('user', JSON.stringify(user));
    }
    parseJWT(token) {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace('-', '+').replace('_', '/');

        return JSON.parse(window.atob(base64));
    }
}

export default new Auth();