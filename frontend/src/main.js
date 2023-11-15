import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia';
import { authStore } from './stores/auth.js'
import App from './App.vue'

import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const pinia = createPinia();
const app = createApp(App)

pinia.use(({store}) => { store.router = markRaw(router)})

app.use(pinia)
app.use(router)

if (localStorage.getItem('token')) {
    (async ()=>{
        const auth = authStore()
        try {
            auth.setIsAuth(true)
            await auth.checkToken()
        } catch (error) {
            auth.setIsAuth(false)
            console.log(error);
        }
    })()
}

app.mount('#app')
