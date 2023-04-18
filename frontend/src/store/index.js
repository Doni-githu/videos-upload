import auth from "../modules/auth"
import { createStore } from "vuex"

const store = createStore({
    modules: { auth }
})

export default store