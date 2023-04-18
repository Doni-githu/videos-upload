import axios from "./axios";

const Auth = {
    Register(formData) {
        return axios.post('/users', formData)
    },
    login(user) {
        return axios.post('/users/user', { user })
    },
    getUser(){
        return axios.get('/users')
    }
}

export default Auth