import Auth from "../service/auth"
const state = {
    isLoading: false,
    user: null,
    isLoggedIn: null,
    error: null,
}

const mutations = {
    StartRegister(state) {
        state.isLoading = true
    },
    SuccessRegister(state, payload) {
        state.isLoading = false
        state.user = payload
        state.isLoggedIn = true
    },
    FailurRegister(state, payload) {
        state.isLoading = false
        state.error = payload
    },
}

const actions = {
    register(context, formData) {
        return new Promise((resolve, reject) => {
            context.commit('StartRegister')
            Auth.Register(formData)
                .then((res) => {
                    resolve(res.data)
                    localStorage.setItem('token', res.data.token)
                    context.commit('SuccessRegister', res.data)
                }).catch((err) => {
                    reject(err.response)
                    context.commit('FailurRegister', err.response)
                })
        })
    },
    login(context, user) {
        return new Promise((resolve, reject) => {
            context.commit('StartRegister')
            Auth.login(user)
                .then((res) => {
                    console.log(res.data);
                    resolve(res.data)
                    context.commit('SuccessRegister', res.data)
                }).catch((err) => {
                    reject(err.response)
                    context.commit('FailurRegister', err.response)
                })
        })
    },
    getUser(context){
        return new Promise(() => {
            Auth.login()
                .then((res) => {
                    console.log(res.data);
                    resolve(res.data)
                    context.commit('SuccessRegister', res.data)
                }).catch((err) => {
                    reject(err.response)
                    context.commit('FailurRegister', err.response)
                })
        })
    }
}

export default {
    actions,
    state,
    mutations
}