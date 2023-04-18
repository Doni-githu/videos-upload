import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './main.css'
import uiComponents from './ui-components'
import store from "./store"
const app = createApp(App)

app.use(router)
app.use(store)
uiComponents.map((component) => {
    app.component(component.name, component)
})
app.mount('#app')
