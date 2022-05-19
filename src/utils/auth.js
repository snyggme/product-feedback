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

const users = [
    {
        name: 'bob',
        email: 'bob@gmail.com',
        password: 123
    },
    {
        name: 'jim',
        email: 'jim@gmail.com',
        password: 123
    },
    {
        name: 'sally',
        email: 'sall@gmail.com',
        password: 123
    },
]

export const getUsers = () => users;

export const getUser = (user) => users.find(u => u.name === user.name && u.password === Number(user.password));

export const addUser = (user) => users.push(user);