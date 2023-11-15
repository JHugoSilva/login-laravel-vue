import { authStore } from '../stores/auth.js'

export default async function routes(to, from, next) {
    if (to.meta?.auth) {
        const auth = authStore()
        if (auth.isAuth) {
            next()
        } else {
            next({name : 'login'})
        }
    } else {
        next()
    }
}